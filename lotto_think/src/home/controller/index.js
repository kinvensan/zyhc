const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    return this.display();
  }

  loginAction() {
    think.logger.debug(this.post());
    this.body = 'hello world';
  }
};
