module.exports = class extends think.Logic {
  indexAction() {

  }

  loginAction() {
    this.allowMethods = 'post';
    const rules = {
      login_name: {
        required: true
      },
      password: {
        required: true
      }
    };
    const flag = this.validate(rules);
    if (!flag) {
      this.assign('login_error', this.validateErrors);
      return this.display('home/login_index');
    }
  }
  signupAction() {
    this.allowMethods = 'post';
    const rules = {
      email: {
        required: true
      },
      password: {
        required: true
      },
      rpassword: {
        required: true
      }
    };
    const flag = this.validate(rules);
    if (!flag) {
      this.assign('signup_error', this.validateErrors);
      return this.display('home/login_index');
    }
  }
};
