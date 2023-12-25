import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { HomePage } from '../core/page-objects/home-page';
import { SearchPage } from "../core/page-objects/search-page";
import { FilteringPage } from "../core/page-objects/filtering-page"

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let searchPage: SearchPage;
let filteringPage: FilteringPage;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    searchPage = new SearchPage(driver);
    filteringPage = new FilteringPage(driver);
}, 10000);

test('filtering', async () => {
    await homePage.agree();
    await homePage.searchForProduct();
    await searchPage.searchForFiltering();
    await filteringPage.filterProducts();
    await filteringPage.pricing();
}, 1000000);

afterAll(async () => {
    await quitDriver(driver);
}, 1000000);