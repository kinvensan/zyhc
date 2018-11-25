'use strict';
const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    await this.service('crawl_results').start();
  }

  async infoAction() {
    await this.service('crawl_infomation').start();
  }

  errorAction() {
    this.ctx.throw('error', 500);
  }
};
