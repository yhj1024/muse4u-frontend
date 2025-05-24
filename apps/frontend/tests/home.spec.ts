import { test, expect } from '@playwright/test';

test.describe('홈 페이지', () => {
  test('홈 페이지가 정상적으로 로드되어야 한다', async ({ page }) => {
    await page.goto('/');
    
    // 페이지가 성공적으로 로드되는지 확인
    await expect(page).toHaveURL('http://localhost:3000/');
  });

  test('네비게이션 링크가 표시되어야 한다', async ({ page }) => {
    await page.goto('/');
    
    // 네비게이션 요소 확인
    const homeLink = page.getByRole('link', { name: /home/i });
    await expect(homeLink).toBeVisible();
    
    const searchLink = page.getByRole('link', { name: /search/i });
    await expect(searchLink).toBeVisible();
  });

  test('검색 페이지로 이동할 수 있어야 한다', async ({ page }) => {
    await page.goto('/');
    
    // 검색 링크 클릭
    await page.getByRole('link', { name: /search/i }).click();
    
    // 네비게이션 확인
    await expect(page).toHaveURL('http://localhost:3000/search');
  });
});