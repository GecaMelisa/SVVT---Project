import { By, WebDriver, Select, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class RegistrationPage extends BasePage {
    protected emailField = By.xpath('//div[@class="flex flex-col w-full"]/div/div/div[1]/div/input');
    protected passwordField = By.xpath('//div[@class="flex flex-col w-full"]/div/div/div[2]/div/input');
    protected usernameField = By.xpath('//div[@class="flex flex-col w-full"]/div/div/div[3]/div/input');
    protected genderSelect = By.xpath('//div[@class="flex flex-col w-full"]/div/div/div[4]/select');
    protected regionSelect = By.xpath('//div[@class="flex flex-col w-full"]/div/div/div[5]/div[1]/div[2]/select');
    protected placeSelect = By.xpath('//div[@class="flex flex-col w-full"]/div/div/div[5]/div[2]/div/div[2]/select');
    protected termsAndConditions = By.id('checkbox');
    protected regButton = By.className('my-md');


    constructor(driver: WebDriver) {
        super(driver);
    }

    async enterEmail() {
        await this.waitAndFillInput(this.emailField, testData.new_user_data.email, 10000);
    }

    async enterPassword() {
        await this.fillInputField(this.passwordField, testData.new_user_data.password);
    }

    async enterUsername() {
        await this.fillInputField(this.usernameField, testData.new_user_data.username);
    }

    async selectGender() {
        const selectElement = await this.findElement(this.genderSelect);
        const select = new Select(selectElement);

        await select.selectByValue('male');
    }

    async selectRegion() {
        const selectElement = await this.findElement(this.regionSelect);
        const select = new Select(selectElement);

        await select.selectByValue('9');
    }

    async selectPlace() {
        const selectElement = await this.findElement(this.placeSelect);
        const select = new Select(selectElement);

        await select.selectByValue('80');
    }

    async checkTermsAndConditions() {   
        await this.findElementAndClick(this.termsAndConditions);
    }

    async registerUser() {
        await this.findElementAndClick(this.regButton);
    }
 }