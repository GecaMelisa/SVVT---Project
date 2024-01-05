import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class MessagePage extends BasePage {
    private messageButton = By.xpath('//div[@class="user-contact mt-md w-full flex-row items-center grid grid-cols-2 gap-2"]/button[2]');    
    private textArea = By.className("flex-auto");
    private sendMessage = By.xpath('//div[@class="grid grid-cols-2 gap-4 mt-4"]/button[2]');
   
    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickMessageButton(){
        const element = await this.waitForElement(this.messageButton, 10000)
        await this.scriptClick(element)
    }

    async clickTextArea(){
        const element = await this.waitForElement(this.textArea, 10000)
        await this.scriptClick(element)
    }

    async enterQuestion() {
        const element = this.waitForElement(this.textArea, 10000);
        await this.scriptInput(element, 'Message')
    }

    async clickSendMessage() {
        const element = this.waitForElement(this.sendMessage, 10000);
        await this.scriptClick(element);
    }
}