'use strict';
const cheerio = require('cheerio');
const superAgent = require('superagent');

module.exports = class extends think.Service {
  async download(request) {
    superAgent.get(request.url).then(async(response) => {
      const defaultCheerioOptions = {
        normalizeWhitespace: false,
        xmlMode: false,
        decodeEntities: true
      };
      response.$ = cheerio.load(response.text, defaultCheerioOptions);
      await this.parse(response);
    });
  }
};
