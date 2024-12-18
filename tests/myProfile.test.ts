import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { HomePage } from '../core/page-objects/home-page';
import { MyProfile} from "../core/page-objects/myProfile-page";
import { LoginPage } from "../core/page-objects/login-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let loginPage: LoginPage;
let myProfile: MyProfile;



beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    loginPage = new LoginPage(driver);
    myProfile = new MyProfile(driver);
   
}, 10000);

test('MyProfile', async () => {
    await homePage.agree();
    await homePage.clickLogin();
    await loginPage.enterEmail();
    await loginPage.enterPassword();
    await loginPage.clickLogin();
    await myProfile.clickOnMyProfile();
    await myProfile.findMyName();
    await myProfile.findActiveAd();
   
    
}, 1000000);

afterAll(async () => {
    await quitDriver(driver);
}, 10000000);