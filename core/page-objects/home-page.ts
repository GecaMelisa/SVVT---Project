import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class HomePage extends BasePage {
    protected regButton = By.xpath('//div[@class="sm:hidden flex flex-row items-center"]/a[2]');
    protected loginButton = By.className('font-semibold mr-md pr-md border-gray-300 border-r');
    protected agreeButton = By.className(' css-1sjubqu');
    protected searchBar = By.name('notASearchField');

    async clickRegButton() {
        await this.findElementAndClick(this.regButton);
    }

    async clickLogin() {
        await this.findElementAndClick(this.loginButton);
    }

    async agree() {
        await this.findElementAndClick(this.agreeButton);
    }

    async searchForProduct() {
        await this.fillInputField(this.searchBar, testData.search_data.product);
        await this.driver.actions().keyDown('\uE007').sendKeys().perform();
    }
}