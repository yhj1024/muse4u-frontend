import { test, expect } from '@playwright/test';

test.describe('페이지 네비게이션', () => {
  test('모든 페이지가 정상적으로 로드되어야 한다', async ({ page }) => {
    // 홈 페이지
    await page.goto('/');
    await expect(page).toHaveURL('http://localhost:3000/');
    await expect(page).toHaveTitle(/Muse 4U/);
    
    // 검색 페이지
    await page.goto('/search');
    await expect(page).toHaveURL('http://localhost:3000/search');
    
    // 알림 페이지
    await page.goto('/notice');
    await expect(page).toHaveURL('http://localhost:3000/notice');
    
    // 구독 페이지
    await page.goto('/subscribe');
    await expect(page).toHaveURL('http://localhost:3000/subscribe');
    
    // 만들기 페이지
    await page.goto('/create');
    await expect(page).toHaveURL('http://localhost:3000/create');
  });

  test('404 페이지 처리가 되어야 한다', async ({ page }) => {
    // 존재하지 않는 페이지 접근
    await page.goto('/non-existent-page');
    
    // Next.js 404 페이지 확인
    await expect(page.locator('text=404')).toBeVisible();
  });
});