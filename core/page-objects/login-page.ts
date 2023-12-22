import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class LoginPage extends BasePage {
    protected emailField = By.name('username');
    protected passwordField = By.name('password');
    protected loginButton = By.className('my-lg');

    constructor(driver: WebDriver) {
        super(driver);
    }

    async enterEmail() {
        await this.waitAndFillInput(this.emailField, testData.user_data.email, 10000);
    }

    async enterPassword() {
        await this.fillInputField(this.passwordField, testData.user_data.password);
    }

    async clickLogin() {
        await this.findElementAndClick(this.loginButton);
    }
}