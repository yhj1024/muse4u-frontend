# Using SVGR in Tailwind Gallery

This guide explains how to use SVGR to convert SVG files to React components in the Tailwind Gallery project.

## Setup

SVGR has been configured to work with this project. The following packages have been installed:

- `@svgr/cli`: Command-line tool for SVGR
- `@svgr/core`: Core SVGR library
- `@svgr/plugin-jsx`: JSX plugin for SVGR
- `@svgr/plugin-prettier`: Prettier plugin for SVGR
- `@svgr/webpack`: Webpack loader for SVGR

## Usage

### Method 1: Direct Import (Recommended)

With the current configuration, you can directly import SVG files as React components:

```tsx
import LogoIcon from '@/public/svgs/logo.svg';

function MyComponent() {
  return (
    <div>
      <LogoIcon className="w-6 h-6 text-blue-500" />
    </div>
  );
}
```

### Method 2: Bulk Conversion Script

You can also use the provided script to convert all SVG files in the `public/svgs` directory to React components:

```bash
# Run the SVG conversion script
pnpm svgr
```

This will:
1. Convert all SVG files in `public/svgs` to React components
2. Place the components in `src/components/icons`
3. Create an index.tsx file with exports for all components

Then you can import them in your code:

```tsx
import { Home, Search, Notice } from '@/components/icons';

function MyComponent() {
  return (
    <div>
      <Home className="w-6 h-6 text-blue-500" />
      <Search className="w-6 h-6 text-green-500" />
      <Notice className="w-6 h-6 text-red-500" />
    </div>
  );
}
```

### Watch Mode

You can also run the conversion script in watch mode to automatically convert SVG files when they change:

```bash
# Run the SVG conversion script in watch mode
pnpm svgr:watch
```

## Component Props

The generated SVG components accept all standard SVG props, plus React-specific props:

```tsx
<HomeIcon 
  className="w-6 h-6" // You can use Tailwind classes
  onClick={() => console.log('Clicked!')} // React event handlers
  style={{ color: 'blue' }} // Inline styles
  width={24} // SVG width
  height={24} // SVG height
  fill="currentColor" // SVG fill color
/>
```

## Example Page

An example page has been created at `/icons-example` to demonstrate how to use the SVG components.

## Adding New SVG Files

1. Place your SVG files in the `public/svgs` directory
2. Run `pnpm svgr` to convert them to React components
3. Import and use them in your code

## Customizing SVGR Configuration

If you need to customize the SVGR configuration, you can edit:

1. The webpack configuration in `next.config.ts` for direct imports
2. The SVGR configuration in `scripts/svgr.mjs` for bulk conversion
