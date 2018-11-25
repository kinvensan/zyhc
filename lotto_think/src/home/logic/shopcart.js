module.exports = class extends think.Logic {
  indexAction() {
    this.allowMethods = 'get';
  }
  saveAction() {
    this.allowMethods = 'post';
  }
};
