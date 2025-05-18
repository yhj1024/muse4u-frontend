#!/usr/bin/env node
import { transform } from '@svgr/core';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const args = process.argv.slice(2);
const forceOverwrite = args.includes('--force') || args.includes('-f');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// Source and destination directories
const sourceDir = path.join(rootDir, 'public', 'svgs');
const destinationDir = path.join(rootDir, 'src', 'shared/ui', 'icons');

// SVGR configuration
const svgrConfig = {
  typescript: true,
  dimensions: false,
  plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
  prettier: true,
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
    ],
  },
};

// Function to convert SVG to React component
async function convertSvgToReactComponent(svgPath, outputPath) {
  try {
    // 파일 존재 여부 확인을 try-catch로 분리
    let fileExists = false;

    if (!forceOverwrite) {
      try {
        const stats = await fs.stat(outputPath);
        if (stats.isFile()) {
          fileExists = true;
          console.log(`Skipping ${outputPath} (already exists)`);
          return;
        }
      } catch (statError) {
        // 파일이 없는 경우는 정상 흐름으로 계속 진행
        // 아무것도 하지 않음
      }
    }

    // 파일이 존재하지 않거나 강제 덮어쓰기 옵션이 활성화된 경우만 진행
    if (!fileExists || forceOverwrite) {
      const svg = await fs.readFile(svgPath, 'utf8');

      // 컴포넌트 이름 생성
      const filename = path.basename(svgPath, '.svg');
      const componentName = filename
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');

      // SVG를 React 컴포넌트로 변환
      const componentCode = await transform(
        svg,
        {
          ...svgrConfig,
          typescript: true,
          plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
          componentName: componentName,
        },
        { componentName }
      );

      // 출력 디렉토리가 없으면 생성
      await fs.mkdir(path.dirname(outputPath), { recursive: true });

      // React 컴포넌트 파일 작성
      await fs.writeFile(outputPath, componentCode);

      console.log(`Converted ${svgPath} → ${outputPath}`);
    }
  } catch (error) {
    console.error(`Error converting ${svgPath}:`, error);
  }
}

// Function to process all SVG files in directory
async function processDirectory() {
  try {
    // Create destination directory if it doesn't exist
    await fs.mkdir(destinationDir, { recursive: true });

    // Get all SVG files from source directory
    const files = await fs.readdir(sourceDir);
    const svgFiles = files.filter((file) => file.endsWith('.svg'));

    // Process each SVG file
    for (const file of svgFiles) {
      const svgPath = path.join(sourceDir, file);
      const componentName = file
        .replace('.svg', '')
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');
      const outputPath = path.join(destinationDir, `${componentName}.tsx`);

      await convertSvgToReactComponent(svgPath, outputPath);
    }

    // Create index.tsx file to export all components
    const exportStatements = svgFiles
      .map((file) => {
        const componentName = file
          .replace('.svg', '')
          .split('-')
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join('');
        return `export { default as ${componentName} } from './${componentName}';`;
      })
      .join('\n');

    await fs.writeFile(path.join(destinationDir, 'index.ts'), exportStatements);
    console.log('Created index.ts with exports');

    console.log('SVG conversion completed successfully!');
  } catch (error) {
    console.error('Error processing SVG files:', error);
  }
}

// Run the script
processDirectory();
