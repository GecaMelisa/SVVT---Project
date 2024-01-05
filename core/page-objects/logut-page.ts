import { By, WebDriver, Select, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class LogoutPage extends BasePage {
    private menu = By.xpath('//div[@class="flex items-center"]/img[2]');
    private logut = By.xpath('//*[@id="__layout"]/div/header/div/div[1]/div[3]/div[2]/div[2]/a[21]');

    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickMenu(){
        const element = await this.waitForElement(this.menu, 10000);
        await this.scriptClick(element);
    }

    async clickLogout(){
        const element = await this.waitForElement(this.logut, 10000);
        await this.scriptClick(element);
    }
   
}