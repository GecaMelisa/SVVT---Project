import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { HomePage } from '../core/page-objects/home-page';
import { LoginPage } from '../core/page-objects/login-page';
import { PublishPage } from "../core/page-objects/publish-page";
import { LogoutPage } from "../core/page-objects/logut-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let loginPage: LoginPage;
let publishPage: PublishPage;
let logutPage: LogoutPage;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    loginPage = new LoginPage(driver);
    publishPage = new PublishPage(driver);
    logutPage = new LogoutPage(driver);
}, 10000);

test('publish', async () => {
    await homePage.agree();
    await homePage.clickLogin();
    await loginPage.enterEmail();
    await loginPage.enterPassword();
    await loginPage.clickLogin();
    await homePage.clickPublish();
    await homePage.clickOtherButton();
    await homePage.enterProduct();
    await homePage.clickNext();
    await homePage.chooseCategory();
    await publishPage.nameProduct();
    await publishPage.selectManufacturer();
    await publishPage.selectNew();
    await publishPage.enterPrice();
    await publishPage.clickNextButton();
    await publishPage.selectOs();
    await publishPage.enterCpuMhz();
    await publishPage.selectFlash();
    await publishPage.selectCore();
    await publishPage.selectWarranty();
    await publishPage.selectProvider();
    await publishPage.selectSimTray();
    await publishPage.selectContract();
    await publishPage.selectMemory();
    await publishPage.chooseColor();
    await publishPage.chooseInternalMemory();
    await publishPage.chooseCamera();
    await publishPage.chooseMaxCapacity();
    await publishPage.chooseFrontCamera();
    await publishPage.chooseRam();
    await publishPage.chooseScreenSize();
    await publishPage.clickNextButton();
    await publishPage.clickNextButton();
    await logutPage.clickMenu();
    await logutPage.clickLogout();
}, 20000);

afterAll(async () => {
    await quitDriver(driver);
}, 10000);

