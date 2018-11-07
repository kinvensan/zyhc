'use strict';

module.exports = class extends think.Controller {
  async resultsAction() {
    await this.service('crawl_results').start();
  }

  async informationAction() {
    await this.service('crawl_infomation').start();
  }
};
