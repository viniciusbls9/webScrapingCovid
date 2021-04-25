const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

async function bot() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const input = readlineSync.question('Informe o pais que deseja: ');
    let URL = `https://www.google.com/search?q=Vacina+contra+a+COVID-19+${input}`
    await page.goto(URL);

    const totalDoses = await page.evaluate(() => document.querySelector(".iSFuAf").innerText);
    console.log(totalDoses);
  
    await browser.close();
}

bot();