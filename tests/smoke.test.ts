import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { HomePage } from '../core/page-objects/home-page';
import { LoginPage } from '../core/page-objects/login-page';
import { PublishPage } from "../core/page-objects/publish-page";
import { LogoutPage } from "../core/page-objects/logut-page";
import { ProductPage } from "../core/page-objects/product-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let loginPage: LoginPage;
let productPage: ProductPage;
let logutPage: LogoutPage;

beforeAll(async () => {
    driver = await createDriver(testData.url.product_url);
    homePage = new HomePage(driver);
    loginPage = new LoginPage(driver);
    productPage = new ProductPage(driver);
    logutPage = new LogoutPage(driver);
}, 10000);

test('smoke test', async () => {
    await homePage.agree();
    await productPage.clickOrder();
    await loginPage.enterEmail();
    await loginPage.enterPassword();
    await loginPage.clickLogin();
    await productPage.clickOrder();
    await productPage.enterFullName();
    await productPage.enterAddress();
    await productPage.enterPhoneNumber();
    await productPage.enterTown();
    await productPage.enterZip();
    await productPage.agree();
    await productPage.clickNext();
    await logutPage.clickMenu();
    await logutPage.clickLogout();
}, 20000);

afterAll(async () => {
    await quitDriver(driver);
}, 10000);

