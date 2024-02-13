const { chromium, firefox } = require('@playwright/test');

async function launchBrowser(browserType, headless) {
    let browser;
    if (browserType === 'chrome') {
        browser = await chromium.launch({ headless: headless });
    } else if (browserType === 'firefox') {
        browser = await firefox.launch({ headless: headless });
    } else {
        throw new Error(`Unsupported browser: ${browserType}`);
    }
    return browser;
}

module.exports = {
    launchBrowser,
};
