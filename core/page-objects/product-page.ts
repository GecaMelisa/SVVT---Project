import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class ProductPage extends BasePage {
    private orderButton = By.xpath('//div[@class="mb-md w-full custom-info info"]/div[1]/div[5]/div[2]/button');
    private fullNameField = By.xpath('//div[@class="flex flex-col"]/div[1]/div[1]/input');
    private addressField = By.xpath('//div[@class="flex flex-col"]/div[2]/div[1]/input');
    private phoneNumberField = By.xpath('//div[@class="flex flex-col"]/div[3]/div[1]/input');
    private townField = By.xpath('//div[@class="flex flex-col"]/div[5]/div[1]/div[1]/div[1]/input');
    private townOption = By.xpath('//div[@class="flex flex-col"]/div[5]/div[1]/ul/li[1]');
    private zipField = By.xpath('//div[@class="flex flex-col"]/div[7]/div[1]/div[1]/div[1]/input');
    private checkbox = By.xpath('//label[@class="flex flex-row items-center justify-start mt-2"][3]/input');
    private nextButton = By.xpath('//div[@class="modal-container"]/div[4]/button');
    private askQuestion = By.name('addQuestion');


    constructor(driver: WebDriver) {
        super(driver);
    }

    async enterQuestion() {
        this.waitAndFillInput(this.askQuestion, testData.question_data.question, 100000)
    }

    async clickOrder() {
        const element = await this.waitForElement(this.orderButton, 10000);
        await this.scriptClick(element);
    }

    async enterFullName() {
        await this.fillInputField(this.fullNameField, testData.order_data.full_name);
    }

    async enterAddress() {
        await this.fillInputField(this.addressField, testData.order_data.address)
    }
    
    async enterPhoneNumber() {
        await this.fillInputField(this.phoneNumberField, testData.order_data.phone_number)
    }

    async enterTown() {
        await this.fillInputField(this.townField, testData.order_data.town);
        const element = await this.waitForElement(this.townOption, 10000);
        await this.scriptClick(element);
    }

    async enterZip() {
        await this.fillInputField(this.zipField, testData.order_data.zip);
    }

    async agree() {
        const element = await this.waitForElement(this.checkbox, 10000);
        await this.scriptClick(element);
    }

    async clickNext() {
        const element = await this.waitForElement(this.nextButton, 10000);
        await this.scriptClick(element);
    }
}