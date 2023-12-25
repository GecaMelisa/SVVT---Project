import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class MessagePage extends BasePage {
    private messageButton = By.xpath('//*[@id="__layout"]/div/div[1]/div[2]/div/div/div[2]/div[2]/div[2]/div/div[2]/button[2]');
    private textArea = By.className("flex-auto");
    private sendMessage = By.xpath('//*[@id="modals-container"]/div/div/div[2]/div/div[2]/div/div[2]/div/button[2]');
   
    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickMessageButton(){
        await this.findElementAndClick(this.messageButton);
    }

    async clickTextArea(){
         await this.waitAndFillInput(this.textArea, testData.chating_data.message, 1000000);
    }

    async clickSendMessage(){
       await this.findElementAndClick(this.sendMessage);
       
    }



  
}