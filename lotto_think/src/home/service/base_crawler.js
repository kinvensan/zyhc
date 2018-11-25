'use strict';
const cheerio = require('cheerio');
const axios = require('axios');

module.exports = class extends think.Service {
  async download(request) {
    axios({
      url: request.url,
      method: 'get',
      responseType: 'text'
    }).then(async(response) => {
      const defaultCheerioOptions = {
        normalizeWhitespace: false,
        xmlMode: false,
        decodeEntities: true
      };
      response.$ = cheerio.load(response.data, defaultCheerioOptions);
      await this.parse(response);
    }).catch(function(error) {
      think.logger.error(error);
    });
  }
};
