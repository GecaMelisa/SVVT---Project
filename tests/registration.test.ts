import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { HomePage } from '../core/page-objects/home-page';
import { RegistrationPage } from "../core/page-objects/registration-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let registrationPage: RegistrationPage;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    registrationPage = new RegistrationPage(driver);
}, 10000);

test('registration', async () => {
    await homePage.agree();
    await homePage.clickRegButton();
    await registrationPage.enterEmail();
    await registrationPage.enterPassword();
    await registrationPage.enterUsername();
    await registrationPage.selectGender();
    await registrationPage.selectRegion();
    await registrationPage.selectPlace();
    await registrationPage.checkTermsAndConditions();
    await registrationPage.registerUser();
}, 10000);

afterAll(async () => {
    await quitDriver(driver);
}, 10000);