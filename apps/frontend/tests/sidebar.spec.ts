import { test, expect } from '@playwright/test';

test.describe('사이드바', () => {
  test('사이드바가 표시되어야 한다', async ({ page }) => {
    await page.goto('/');
    
    // 사이드바 컴포넌트 확인
    const sidebar = page.locator('aside');
    await expect(sidebar).toBeVisible();
  });

  test('로고가 표시되어야 한다', async ({ page }) => {
    await page.goto('/');
    
    // Muse4u 로고 확인 (SVG 컴포넌트)
    const logoContainer = page.locator('h1 svg');
    await expect(logoContainer).toBeVisible();
  });

  test('모든 메뉴 아이템이 표시되어야 한다', async ({ page }) => {
    await page.goto('/');
    
    // 각 메뉴 아이템 확인
    const menuItems = ['메인', '음악 만들기', '검색', '알림', '구독'];
    
    for (const item of menuItems) {
      const menuItem = page.getByText(item);
      await expect(menuItem).toBeVisible();
    }
  });

  test('메뉴 클릭 시 해당 페이지로 이동해야 한다', async ({ page }) => {
    await page.goto('/');
    
    // 검색 메뉴 클릭
    await page.getByText('검색').click();
    await expect(page).toHaveURL('http://localhost:3000/search');
    
    // 알림 메뉴 클릭
    await page.getByText('알림').click();
    await expect(page).toHaveURL('http://localhost:3000/notice');
    
    // 구독 메뉴 클릭
    await page.getByText('구독').click();
    await expect(page).toHaveURL('http://localhost:3000/subscribe');
    
    // 음악 만들기 메뉴 클릭
    await page.getByText('음악 만들기').click();
    await expect(page).toHaveURL('http://localhost:3000/create');
  });
});