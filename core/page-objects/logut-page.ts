import { By, WebDriver, Select, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class LogoutPage extends BasePage {
    private menu = By.className("ml-sm cursor-pointer");
    private logut = By.xpath('//*[@id="__layout"]/div/header/div/div[1]/div[3]/div[2]/div[2]/a[21]');

    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickMenu(){
        await this.waitAndClick(this.menu, 100000);
    }

    async clickLogout(){
        await this.waitAndClick(this.logut, 100000);


    }
   
}