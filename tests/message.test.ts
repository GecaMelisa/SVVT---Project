import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { HomePage } from '../core/page-objects/home-page';
import { ProductPage } from "../core/page-objects/product-page";
import { LoginPage } from "../core/page-objects/login-page";
import { MessagePage } from "../core/page-objects/message-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let productPage: ProductPage;
let homePage: HomePage;
let loginPage: LoginPage;
let messagePage: MessagePage;

beforeAll(async () => {
    driver = await createDriver(testData.url.message_page);
    homePage = new HomePage(driver);
    loginPage = new LoginPage(driver);
    messagePage = new MessagePage(driver);
}, 10000);

test('Chating between users', async () => {
    await homePage.agree();
    await homePage.clickLogin();
    await loginPage.enterEmail();
    await loginPage.enterPassword();
    await loginPage.clickLogin();
    await messagePage.clickMessageButton();
    await messagePage.clickTextArea();
    await messagePage.enterQuestion();
    await messagePage.clickSendMessage();
    
}, 200000);

afterAll(async () => {
    await quitDriver(driver);
}, 10000000);