const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }

  async catalogAction() {
    const name = this.get('catalogId');
    if (think.isEmpty(name)) {
      return this.fail(404, 'error catalog');
    }
    this.display();
  }
};
