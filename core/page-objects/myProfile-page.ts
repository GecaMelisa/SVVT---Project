import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class MyProfile extends BasePage {
    private profileIcon = By.className("w-40 h-40 self-center bg-gray-100 rounded-circle mr-sm object-cover cursor-pointer");
    private name = By.className("font-semibold username");
    private active = By.className("nuxt-link-exact-active nuxt-link-active");
    private oglas = By.className("sm:flex w-full z-2 urgent-wrapper");

    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickOnMyProfile(){
        await this.waitAndClick(this.profileIcon, 100000);
    }

    async findMyName(){
        await this.waitForElement(this.name, 100000);
        await this.checkMatchingElements(this.name, testData.profile_data.username);
    }

    async findActiveAd(){
        await this.findElementAndClick(this.oglas);
    }

  
}