import { By, WebDriver, Select, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class PublishPage extends BasePage {
    protected manufacturer = By.xpath('//div[@class="more"]/div[3]/div[2]/select');
    protected newButton = By.id('buttonNovo');
    protected priceField = By.xpath('//div[@class="flex flex-col items-start justify-start w-full sm:flex-col"]/div[@class="flex flex-col overall w-full"]/div[1]/input');
    protected productNameField = By.xpath('//div[@class="more"]/div[2]/div[2]/input');
    protected osButton = By.id('buttoniOS');
    protected cpuMhzField = By.name('procesor-mhz');
    protected osVersionField = By.name('verzija-os-a');
    protected flashButton = By.id('buttonLED');
    protected coreButton = By.id('button8');
    protected warrantyButton = By.id('button2 godine');
    protected providerButton = By.xpath('//div[@class="grid-new"]/div[6]/div[2]/button[@id="buttonNema"]');
    protected simTrayButton = By.id('buttonmini SIM (velika)');
    protected contractButton = By.id('buttonBez ugovora');
    protected memoryCardButton = By.id('buttonSD');
    protected colorSelect = By.xpath('//div[@class="grid-new"]/div[10]/div[2]/select');
    protected internalMemorySelect = By.xpath('//div[@class="grid-new"]/div[11]/div[2]/select');
    protected cameraSelect = By.xpath('//div[@class="grid-new"]/div[12]/div[2]/select');
    protected maxCapacitySelect = By.xpath('//div[@class="grid-new"]/div[13]/div[2]/select');
    protected frontCameraSelect = By.xpath('//div[@class="grid-new"]/div[14]/div[2]/select');
    protected ramSelect = By.xpath('//div[@class="grid-new"]/div[15]/div[2]/select');
    protected screenSizeSelect = By.xpath('//div[@class="grid-new"]/div[16]/div[2]/select');
    protected nextButton = By.xpath('//div[@class="flex flex-col main-wrap"]/div[4]/div[1]/div/button[2]');



    async selectManufacturer() {
        const selectElement = await this.findElement(this.manufacturer);
        const select = new Select(selectElement);

        await select.selectByValue('113');
    }

    async selectNew() {
        const element = await this.waitForElement(this.newButton, 10000)
        await this.scriptClick(element)
    }

    async nameProduct() {
        await this.fillInputField(this.productNameField, testData.publish_product.product_name);
    }

    async enterPrice() {
        await this.fillInputField(this.priceField, testData.publish_product.price);
    }
    

    async selectOs() {
        const element = await this.waitForElement(this.osButton, 10000)
        await this.scriptClick(element)
    }

    async enterCpuMhz() {
       await this.fillInputField(this.cpuMhzField, testData.publish_product.cpu);
    }

    async enterOsVersion() {
        await this.fillInputField(this.osVersionField, testData.publish_product.os_version);
    }

    async selectFlash() {
        const element = await this.waitForElement(this.flashButton, 10000)
        await this.scriptClick(element)
    }

    async selectCore() {
        const element = await this.waitForElement(this.coreButton, 10000)
        await this.scriptClick(element)
    }

    async selectWarranty() {
        const element = await this.waitForElement(this.warrantyButton, 10000)
        await this.scriptClick(element)
    }

    async selectProvider() {
        const element = await this.waitForElement(this.providerButton, 10000)
        await this.scriptClick(element)
    }

    async selectSimTray() {
        const element = await this.waitForElement(this.simTrayButton, 10000)
        await this.scriptClick(element)
    }

    async selectContract() {
        const element = await this.waitForElement(this.contractButton, 10000)
        await this.scriptClick(element)
    }

    async selectMemory() {
        const element = await this.waitForElement(this.memoryCardButton, 10000)
        await this.scriptClick(element)
    }

    async chooseColor() {
        const selectElement = await this.findElement(this.colorSelect);
        const select = new Select(selectElement);

        await select.selectByValue('Bijela');
    }

    async chooseInternalMemory() {
        const selectElement = await this.findElement(this.internalMemorySelect);
        const select = new Select(selectElement);

        await select.selectByValue('1 GB');
    }

    async chooseCamera() {
        const selectElement = await this.findElement(this.cameraSelect);
        const select = new Select(selectElement);

        await select.selectByValue('3 mpx');
    }

    async chooseMaxCapacity() {
        const selectElement = await this.findElement(this.maxCapacitySelect);
        const select = new Select(selectElement);

        await select.selectByValue('1 GB');
    }

    async chooseFrontCamera() {
        const selectElement = await this.findElement(this.frontCameraSelect);
        const select = new Select(selectElement);

        await select.selectByValue('3 mpx');
    }

    async chooseRam() {
        const selectElement = await this.findElement(this.ramSelect);
        const select = new Select(selectElement);

        await select.selectByValue('1 GB');
    }

    async chooseScreenSize() {
        const selectElement = await this.findElement(this.screenSizeSelect);
        const select = new Select(selectElement);

        await select.selectByValue('2.0');
    }

    async clickNextButton() {
        const element = await this.waitForElement(this.nextButton, 10000)
        await this.scriptClick(element)
    }
}