const Base = require('./base.js');

module.exports = class extends Base {
  async __before() {
    await super.__before();
    const user = await this.session('user');
    if (think.isEmpty(user) || think.isEmpty(user.id)) {
      return this.redirect('/login');
    }
  }

  async indexAction() {
    const user = await this.session('user');
    const WithdrawalModel = this.model('withdrawal');
    const withdrawals = await WithdrawalModel.queryByUserId(user.id);
    this.assign('withdrawals', withdrawals);
    return this.display();
  }

  async applyAction() {
    const user = await this.session('user');
    const WithdrawalModel = this.model('withdrawal');
    const BalanceModel = this.model('balance');
    // 检查资金是否已经申请完毕
    const amount = await WithdrawalModel.sumApply(user.id);
    const balance = await BalanceModel.findByUserId(user.id);
    if (amount > balance) {
      const withdrawals = await WithdrawalModel.queryByUserId(user.id);
      this.assign('withdrawals', withdrawals);
      this.assign('warn', 'warning');
      return this.display('home/withdrawal_index');
    }
    const result = await WithdrawalModel.create({
      user_id: user.id,
      user_email: this.post('email'),
      user_name: user.name,
      amount: amount,
      fee: amount * 0.05,
      status: 1
    });
    if (think.isEmpty(result)) {
      const withdrawals = await WithdrawalModel.queryByUserId(user.id);
      this.assign('withdrawals', withdrawals);
      this.assign('warn', 'waring');
      return this.display('home/withdrawal_index');
    }
    return this.redirect('/withdrawal');
  }
};
