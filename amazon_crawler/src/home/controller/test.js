const Base = require('./base.js');
const axios = require('axios');
module.exports = class extends Base {
  async apijsAction() {
    const asin = this.get('asin');
    const response = await axios({
      url: 'https://junglescoutpro.herokuapp.com/api/products/update_product',
      method: 'post',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDIzNTgzNzUsImlhdCI6MTU0MTc1MzU3NSwiaXNzIjoianVuZ2xlc2NvdXRfYXBpIiwiYXVkIjoiY2xpZW50IiwiYXV0aF90b2tlbiI6IjQyODc1NzY1N2NiMjViOWVmNzE0YTg5M2MyMmFhNDQ4In0.qA7X5-Z0PUnvz3ldrGgHtnKx-C82ILYQA_GTQkMbwVg',
        'Content-Type': 'application/json',
        Origin: 'https://members.junglescout.com',
        Referer: 'https://members.junglescout.com/',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36'
      },
      data: {
        'asin': asin,
        'amz_store': 'us'
      }
    });
    think.logger.debug(response);
    this.body = JSON.parse(response.data.data);
  }
}
;
