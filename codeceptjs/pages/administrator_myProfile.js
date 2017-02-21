
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  myProfileDetailsLocators: {
    name: { xpath: '//*[@id="jform_name"]' },
    loginName: { xpath: '//*[@id="jform_username"]' },
    password: { xpath: '//*[@id="jform_password2"]' },
    confirmPassword: { xpath: '//*[@id="jform_password"]' },
    email: { xpath: '//*[@id="jform_email"]' },
    save: { xpath: '//*[@id="toolbar-apply"]/button' },
    saveAndClose: { xpath: '//*[@id="toolbar-save"]/button' },
    close: { xpath: '//*[@id="toolbar-cancel"]/button' },
  },
  changePassword() {
    I.fillField(this.myProfileDetailsLocators.password, 'SECRET123');
    I.fillField(this.myProfileDetailsLocators.confirmPassword, 'SECRET123');
    I.click(this.myProfileDetailsLocators.saveAndClose);
  }
}
