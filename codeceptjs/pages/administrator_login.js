
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  locators: {
    username: {xpath: '//*[@id="mod-login-username"]'},
    password: {xpath: '//*[@id="mod-login-password"]'},
    login: {xpath: '//*[@id="form-login"]/fieldset/div[3]/div/div/button'}
  },
  logInBeforePwdChange(){
    I.fillField(this.locators.username, 'admin');
    I.fillField(this.locators.password, 'changeme');
    I.click(this.locators.login);
  },
  LogInAfterPwdChange(){
    I.fillField(this.locators.username, 'admin');
    I.fillField(this.locators.password, 'SECRET123');
    I.click(this.locators.login);
  }
}
