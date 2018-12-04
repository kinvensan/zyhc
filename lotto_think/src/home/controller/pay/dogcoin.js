const BasePay = require('./basepay.js');
module.exports = class extends BasePay {
  async indexAction() {
    const user = await this.session('user');
    const CoinAddressModel = this.model('coin_address');
    const coinAddress = await CoinAddressModel.findByUserId(user.id) || {};
    if (think.isEmpty(coinAddress) || think.isEmpty(coinAddress.address)) {
      const UserModel = this.model('user');
      const aUser = await UserModel.findById(user.id);
      const FineBoxService = this.service('finexbox');
      const data = await FineBoxService.getAddress(aUser.email);
      think.logger.debug(data);
      coinAddress.user_id = user.id;
      coinAddress.user_id = user.id;
      coinAddress.user_email = aUser.email;
      coinAddress.coin_id = data.coinid;
      coinAddress.address = data.address;
      coinAddress.salt = data.salt;
      coinAddress.client = 2;
      if (think.isEmpty(data.errno)) {
        const result = await CoinAddressModel.create(coinAddress);
        if (result > 0) {
          coinAddress.id = result;
        }
      }
    }
    think.logger.debug(coinAddress);
    // 生成qrcode xxx
    const coinQrcodeText = [coinAddress.address, '?amount=', 10, '&message=', think.uuid()].join('');
    // const coinQrcodeBase64 = jrQrcode.getQrBase64(coinQrcodeText);
    this.assign('coin_address', coinQrcodeText);
    // this.assign('coin_qrcode', coinQrcodeBase64);
    return this.display();
  }

  async getincomeAction() {
    const user = await this.session('user');
    const CoinAddressModel = this.model('coin_address');
    const coinAddress = await CoinAddressModel.findByUserId(user.id);
    if (think.isEmpty(coinAddress)) {
      return this.fail(9002, 'no coin address');
    }
    const CoinTransferModel = this.model('coin_transfer');
    const transfers = await CoinTransferModel.queryByAddress(coinAddress.address);
    const transferIds = transfers.map(item => item.txid);
    think.logger.debug(transferIds);
    // 获取远程值
    const FineBoxService = this.service('finexbox');
    const data = await FineBoxService.getIncome(coinAddress.address, coinAddress.salt, transferIds);
    if (think.isEmpty(data) || data.length === 0) {
      return this.fail(9003, 'no transaction!');
    }
    think.logger.debug(data);
    await CoinTransferModel.createTransfers(data.map(item => {
      item.coin_address_id = coinAddress.id;
      return item;
    }));

    // 处理订单数据和交易数据
  }
};
