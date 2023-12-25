import { By, WebDriver } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class FilteringPage extends BasePage {
    protected filterIcon = By.xpath('//div[@data-v-275d5faa]/div[@class="flex flex-row justify-between w-full items-center new-wrap text-standard label-wrap cursor-pointer"]');
    protected doPrice = By.xpath('//*[@id="__layout"]/div/div[1]/div/div[1]/div[1]/div/div/div[2]/div[2]/div[2]/input[2]');

    constructor(driver: WebDriver) {
        super(driver);
    }

    async filterProducts() {
        const filterIconElement = (await this.findElementAndClick(this.filterIcon));
    }

    async pricing() {
        const doPriceElement = (await this.waitForElement(this.doPrice, 10000));
        await doPriceElement.sendKeys("1000");
    }
}