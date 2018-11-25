module.exports = class extends think.Logic {
  indexAction() {

  }

  changemailAction() {
    this.allowMethods = 'post';
  }

  resetpasswordAction() {
    this.allowMethods = 'post';
  }
};
