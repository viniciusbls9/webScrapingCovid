const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

async function bot() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const input = readlineSync.question('Informe uma moeda base: ') || 'dolar';
    const Qtd = readlineSync.question('Informe a quantidade dessa moeda: ');
    const output = readlineSync.question('Informe uma moeda desejada: ') || 'real';
    const URL = `https://www.google.com/search?q=${input}+para+${output}&oq=${input}+para+${input}&aqs=chrome.0.0l2j0i10i433j0l7.1551j1j9&sourceid=chrome&ie=UTF-8`
    await page.goto(URL);

    const clear = await page.evaluate(() => {
        return document.querySelector('.ZEB7Fb.vk_gy.vk_sh.Hg3mWc').value = "0";
    });

    await page.type('[class="ZEB7Fb vk_gy vk_sh Hg3mWc"]', clear);
    await page.type('[class="ZEB7Fb vk_gy vk_sh Hg3mWc"]', Qtd);

    const result = await page.evaluate(() => {
        return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
    });

    console.log(`o valor de ${Qtd} ${Qtd > 1 ? input+'s' : input} em moeda ${output} é ${result}`)
    // await browser.close();
}

bot();