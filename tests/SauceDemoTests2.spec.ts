import { test, expect} from '../fixture/pageObjectFixture'
import {TEST_DATA} from '../data/testData';

test('ValidateLogin', async ({page, loginpage, productlistpage, cartpage })=> {

    //const loginpage = new LoginPage(page);
   // await loginpage.openApplication();
    //await page.waitForTimeout(1000);
    //await loginpage.doLogin();
    await page.goto(TEST_DATA.urls.inventory);
    expect(await page).toHaveURL(TEST_DATA.urls.inventory);
    await page.waitForTimeout(2000);
})

test('ValidateAddToCart', async ({page, loginpage, productlistpage, cartpage })=>{
    //const loginpage = new LoginPage(page);
    //await loginpage.openApplication();
    //await page.waitForTimeout(1000);
    //await loginpage.doLogin();
    await page.goto(TEST_DATA.urls.inventory);
    
    //const productListPage = new ProductListPage(page);
    await productlistpage.clickAddtoCartbuton();
    expect ( await productlistpage.cartBadgeIcon).toHaveText('1');
    await productlistpage.clickCartIcon();
    expect (await page).toHaveURL('https://www.saucedemo.com/cart.html');
    
    await page.waitForTimeout(2000);
})
 
test('ValidateCartItem', async ({page, loginpage, productlistpage, cartpage})=>{

    //await loginpage.openApplication();
    //await page.waitForTimeout(1000);
    //await loginpage.doLogin();
      
    await page.goto(TEST_DATA.urls.inventory);
     await productlistpage.clickAddtoCartbuton();
    expect ( await productlistpage.cartBadgeIcon).toHaveText('1');
    await productlistpage.clickCartIcon();
    expect (await page).toHaveURL('https://www.saucedemo.com/cart.html');

//const cartpage = new CartPage(page);
    expect (await cartpage.cartProduct).toHaveText('Sauce Labs Backpack');
    await page.waitForTimeout(2000);

})



