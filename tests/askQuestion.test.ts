import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { HomePage } from '../core/page-objects/home-page';
import { ProductPage } from "../core/page-objects/product-page";
import { LoginPage } from "../core/page-objects/login-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let productPage: ProductPage;
let homePage: HomePage;
let loginPage: LoginPage;

beforeAll(async () => {
    driver = await createDriver(testData.url.product_page);
    productPage= new ProductPage(driver);
    homePage = new HomePage(driver);
    loginPage = new LoginPage(driver);
}, 10000);

test('askQuestion', async () => {
    await homePage.agree();
    await homePage.clickLogin();
    await loginPage.enterEmail();
    await loginPage.enterPassword();
    await loginPage.clickLogin();
    await productPage.enterQuestion();
}, 10000);

afterAll(async () => {
    await quitDriver(driver);
}, 10000);