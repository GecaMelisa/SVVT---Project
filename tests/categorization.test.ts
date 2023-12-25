import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { HomePage } from '../core/page-objects/home-page';
import { SearchPage } from "../core/page-objects/search-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
}, 10000);

test('categorization', async () => {
    await homePage.agree();
    await homePage.categoriesButton();
    await homePage.clickAutomobili();
}, 10000);

afterAll(async () => {
    await quitDriver(driver);
}, 10000);