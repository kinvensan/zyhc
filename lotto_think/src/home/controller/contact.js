const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }

  sendAction() {
    think.logger.info(this.post());
    return this.redirect('/contract');
  }
};
