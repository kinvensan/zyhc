const Base = require('./base.js');
const puppeteer = require('puppeteer');

module.exports = class extends Base {
  async indexAction() {
    const pathToExtension = '/Users/kinven/myextension/js';
    const browser = await puppeteer.launch({
      headless: false,
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`
      ]
    });
    const targets = await browser.targets();
    think.logger.debug(targets);
    const backgroundPageTarget = targets.find(target => {
      think.logger.debug(target.type());
      return target.type() === 'background_page';
    });
    const backgroundPage = await backgroundPageTarget.page();
    const page = await browser.newPage();
    await page.goto('chrome-extension://ifdcpfdicomnhnmaoghnfigokpebjiad/login.html');
  }
};
