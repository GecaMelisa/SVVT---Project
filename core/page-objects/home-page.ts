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
    protected publishButton = By.xpath('//div[@class="sm:hidden flex ml-md"]/button');
    protected otherButton = By.className('item-Objavite nešto drugo');
    protected productField = By.xpath('//div[@class="v--modal-box v--modal"]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input');
    protected nextButton = By.xpath('//div[@class="modal-content"]/div[1]/div[2]/button');
    protected categoryButton = By.xpath('//ul[@class="choose-cat mt-md"]/li[2]/button');
    protected categories = By.xpath('//*[@id="__layout"]/div/header/div/div[1]/div[1]/div[1]/div[3]/ul/li[2]/a');
    protected automobili = By.xpath('//*[@id="__layout"]/div/div[1]/div/div[2]/div[1]/div/a[1]');

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

    async clickPublish() {
        await this.findElementAndClick(this.publishButton);
    }

    async clickOtherButton() {
        const element = await this.waitForElement(this.otherButton, 10000)
        await this.scriptClick(element)
    }

    async enterProduct() {
        await this.fillInputField(this.productField, testData.search_data.product);
    }

    async clickNext() {
        await this.findElementAndClick(this.nextButton);
    }

    async chooseCategory() {
        await this.findElementAndClick(this.categoryButton);
    }

    async categoriesButton(){
        await this.findElementAndClick(this.categories);
    }

    async clickAutomobili(){
        await this.waitAndClick(this.automobili, 10000);
    }
}