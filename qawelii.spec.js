const { test, expect } = require('@playwright/test');

const URL = 'https://www.saucedemo.com/';
const USER = 'standard_user';
const PASSWORD = 'secret_sauce';

test('1 -Login', async ({ page }) => {
    await page.goto(URL);

    await page.locator('[data-test="username"]').fill(USER);
    await page.locator('[data-test="password"]').fill(PASSWORD);
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(
        page.locator('.title')
    ).toHaveText('Products');
});

test('2 - Login fail', async ({ page }) => {
    await page.goto(URL);

    await page.locator('[data-test="username"]').fill(USER);
    await page.locator('[data-test="password"]').fill('clave_incorrecta');
    await page.locator('[data-test="login-button"]').click();

    await expect(
        page.locator('[data-test="error"]')
    ).toBeVisible();

    await expect(
        page.locator('[data-test="error"]')
    ).toContainText('Username and password do not match');

    await expect(page).toHaveURL(URL);
});

test('3 - Agregar producto', async ({ page }) => {
    await page.goto(URL);

    await page.locator('[data-test="username"]').fill(USER);
    await page.locator('[data-test="password"]').fill(PASSWORD);
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory\.html/);

    await page.locator(
        '[data-test="add-to-cart-sauce-labs-backpack"]'
    ).click();

    await expect(
        page.locator('.shopping_cart_badge')
    ).toHaveText('1');

    await page.locator('.shopping_cart_link').click();

    await expect(page).toHaveURL(/cart\.html/);

    await expect(
        page.getByText('Sauce Labs Backpack', { exact: true })
    ).toBeVisible();
});
