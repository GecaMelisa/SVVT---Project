import { By, WebDriver, Select, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class SearchPage extends BasePage {
    protected firstProductTitle = By.xpath('//div[@class="articles sm:px-md sm:pt-md md:grid-mobile lg:grid-desktop-md xl:grid-desktop up:grid-desktop sm:grid-mobile"]/div[1]/a/div/div[2]/div[2]/div[1]/h1');

    constructor(driver: WebDriver) {
        super(driver);
    }

    async checkProductName() {
        const title = (await this.waitForElement(this.firstProductTitle, 10000)).getText();
        expect((await title).includes(testData.search_data.product) || (await title).includes((testData.search_data.product).toUpperCase()) || (await title).includes((testData.search_data.product).toLowerCase()) || (await title).includes('iPhone')).toBeTruthy();
    }

    async searchForFiltering(){
        const element = await this.driver.wait(until.elementLocated(this.firstProductTitle), 1000000);
    
        const titleText = await element.getText();
    
        if (typeof titleText !== 'string') {
            console.error('Title text is not a string:', titleText);
            return; 
        }
    
        const product = testData.search_data.product.toLowerCase();
        const lowercaseTitle = titleText.toLowerCase();
    
        expect(lowercaseTitle.includes(product) || lowercaseTitle.includes('iphone')).toBeTruthy();
    }


}