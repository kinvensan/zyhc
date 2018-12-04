'use strict';
const axios = require('axios');
const qs = require('qs');
const FINEBOX_API = 'https://partner.finexbox.com/v1'; // for product
const crypto = require('crypto');
module.exports = class extends think.Service {
  async getAddress(email) {
    // return this.fail(5001, 'lottery is processing');
    try {
      const md5 = crypto.createHash('md5');
      md5.update([email, 'FB2019a2'].join('#'));
      const salt = md5.digest('hex');
      think.logger.debug(salt);
      const response = await axios.post(FINEBOX_API + '/getaddress.php',
        qs.stringify({
          email,
          salt,
          client: 2,
          coin: 15
        })
      );
      if (response.status === 200 || response.status === 201) {
        const data = response.data;
        if (data.status === 1 && !think.isEmpty(data.data)) {
          data.data.salt = salt;
          return data.data;
        }
        return {errno: 9000 + data.status, errmsg: data.msg};
      }
      think.logger.error(response.status);
      return {errno: response.status, errmsg: ''};
    } catch (error) {
      think.logger.error(error);
      return {errno: 500, errmsg: error};
    }
  }
  async getIncome(address, salt, transferIds) {
    try {
      const response = await axios.post(FINEBOX_API + '/getincome.php',
        qs.stringify({
          salt,
          address
        })
      );
      if (response.status === 200 || response.status === 201) {
        const data = response.data;
        if (data.status === 1) {
          // 判断交易txtid是否存在
          think.logger.debug(data);
          think.logger.debug(data.data.transactions);
          const transactions = data.data.transactions.filter(trans => {
            return transferIds.findIndex(value => value === trans.txid) === -1;
          });
          return transactions.map(item => {
            item.address = data.data.address;
            item.salt = salt;
            item.coin_id = data.data.coin;
            item.transfer_time = item.time;
            return item;
          });
        }
        think.logger.error(response.data);
        return {errno: data.status, errmsg: data.msg};
      }
      return {errno: response.status, errmsg: ''};
    } catch (error) {
      think.logger.error(error);
      return {errno: 500, errmsg: error};
    }
  }
};
