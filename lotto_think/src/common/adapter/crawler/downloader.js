'use strict';
const EventEmitter = require('events').EventEmitter;
const request = require('superagent');
const cheerio = require('cheerio');
class Dowloader extends EventEmitter {
  preRequest() {}
  doRequest() {}
};

class SuperAgentDowloader extends Dowloader {
  constructor(options) {
    super();
  }
  preRequest(req, res) {

  }
  doRequest(req) {
    request.get(req.url).then((response) => {
      const defaultCheerioOptions = {
        normalizeWhitespace: false,
        xmlMode: false,
        decodeEntities: true
      };
      response.meta = req.meta;
      response.url = '';
      response.$ = cheerio.load(response.body, defaultCheerioOptions);
      this.emit('downloadFinish', response);
    }).catch(err => {
      console.error(err);
    });
  }
};

module.exports = function(options) {
  const dowloader = new SuperAgentDowloader(options);
  dowloader.on('prePequest', dowloader.preRequest);
  dowloader.on('request', dowloader.doRequest);
  return dowloader;
};
