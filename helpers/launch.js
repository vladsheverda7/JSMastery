const { chromium, firefox } = require('@playwright/test');

async function launch(browserType, isHeadless) {
    let browser;
    if (browserType === 'chrome') {
        browser = await chromium.launch({ headless: isHeadless });
    } else if (browserType === 'firefox') {
        browser = await firefox.launch({ headless: isHeadless });
    } else {
        throw new Error(`Unsupported browser: ${browserType}`);
    }
    return browser;
}

module.exports = {
    launch,
};
