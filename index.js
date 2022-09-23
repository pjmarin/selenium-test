require('chromedriver');
const { Builder, By, Key, until } = require('selenium-webdriver');

let driver;

(async function () {
	driver = await new Builder().forBrowser('chrome').build();
})();

async function test() {
    
    try {
        
        setTimeout(async () => {
			await driver.get('http://www.google.es');
			try {
				const rejectButton = await driver.wait(until.elementLocated(By.css('#W0wltc .QS5gu')),10000);
				rejectButton.click();
				
				// await driver.findElement(By.className('QS5gu sy4vM')).click();
				//await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
				
				const searchInput = await driver.wait(until.elementLocated(By.name('q')),10000);
				searchInput.sendKeys('webdriver', Key.RETURN);
				
				await driver.wait(until.titleIs('webdriver - Buscar con Google'), 1000);
			} catch(e) {
				console.log(e);
			}
			/*setTimeout(async () => {
				await driver.quit();
			}, 1000);*/
		}, 3000);
    } finally {
        // await driver.quit();
    }
}

async function testOpenWindow() {
	try {
        for(var i=0; i<3; i++) {
			setTimeout(async () => {
				await driver.executeScript('window.open("http://www.google.es", "_blank");');
				i++;
				// window.open('http://www.google.es', '_blank');
				// await driver.get('http://www.google.es');
			}, 299995);
		}
	} catch(e) {
		console.log(e);
	}
}

test();
testOpenWindow();

/*setTimeout(() => {
	test();
}, 289995);

setTimeout(() => {
	test();
}, 599995);*/