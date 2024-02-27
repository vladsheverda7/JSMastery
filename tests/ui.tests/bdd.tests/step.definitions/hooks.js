const { launch } = require('../../../../helpers/launch');

let browser;
let context;
let page;

const browserType = process.env.BROWSER;
const isHeadless = process.env.HEADLESS === 'true';

async function launchBrowser() {
    browser = await launch(browserType, isHeadless);
    context = await browser.newContext();
    page = await context.newPage();
}

async function closeBrowser() {
    await page.close();
    await browser.close();
}

function getPage() {
    return page;
}

function getContext() {
    return context;
}

module.exports = { launchBrowser, closeBrowser, getPage, getContext };
