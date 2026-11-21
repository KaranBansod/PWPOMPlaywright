import {test, expect} from '@playwright/test'
import {LoginPage} from '../pages/loginPage'
import { ProductListPage } from '../pages/producListPage';
import { CartPage } from '../pages/cartPage';
test('ValidateLogin', async ({page})=> {

    const loginpage = new LoginPage(page);
    await loginpage.openApplication();
    await loginpage.doLogin();
    expect(await page).toHaveURL('https://www.saucedemo.com/inventory.html') 
    await page.waitForTimeout(3000);
})

test('ValidateAddToCart', async ({page})=>{
    const loginpage = new LoginPage(page);
    await loginpage.openApplication();
    await loginpage.doLogin();
    expect(await page).toHaveURL('https://www.saucedemo.com/inventory.html');
    
    const productListPage = new ProductListPage(page);
    await productListPage.clickAddtoCartbuton();
    expect ( await productListPage.cartBadgeIcon).toHaveText('1');
    await productListPage.clickCartIcon();
    expect (await page).toHaveURL('https://www.saucedemo.com/Cart.html');

    const cartpage = new CartPage(page);
    expect (await cartpage.cartProduct).toHaveText('Sauce Labs Backpack');
    
    await page.waitForTimeout(3000);

})

