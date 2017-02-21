
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  locators: {
    createUser: { xpath: '//*[@id="t3-content"]/div[2]/a' },
    enable: { xpath: '/html/body/div/div[1]/div/div/form/div/div[1]/div/button[1]' },
    disable: { xpath: '/html/body/div/div[1]/div/div/form/div/div[1]/div/button[2]' },
    delete: { xpath: '/html/body/div/div[1]/div/div/form/div/div[1]/button' },
    selectAll: {xpath: '//*[@id="selectAll"]'},
    confirmDeletePopup:{xpath: '//*[@id="confirm-delete-button"]'},
    cancelDeletePopup: {xpath: '//*[@id="confirm-delete"]/div/div/div[3]/div/button[2]'},
    filterUsers: { xpath: '/html/body/div/div[1]/div/div/form/div/div[2]/label/input' },
    orgAdministratorCheckbox: { xpath: '//*[@id="dtable"]/tbody/tr/td[1]/input' },
    orgAdministratorName: {xpath: '//*[@id="dtable"]/tbody/tr[1]/td[2]/a'},
    appDeveloperCheckbox: { xpath: '/html/body/div/div[1]/div/div/form/div/table/tbody/tr[3]/td[1]/input' }
  },
  createUserLocators: {
    loginName: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/fieldset/div[1]/div/input' },
    name: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/fieldset/div[2]/div/input' },
    email: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/fieldset/div[3]/div/input' },
    // On the test environment the 'Oraganization' is configured by default to API development
    // organization: {xpath: ''},
    toggleRole: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/fieldset/div[5]/div/select' },
    roleOrgAdministrator: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/fieldset/div[5]/div/select/option[1]' },
    roleAppDeveloper: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/fieldset/div[5]/div/select/option[2]' },
    enableUser: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/fieldset/div[6]/div/div/label' },
    passwordSetManually: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/fieldset/div[7]/div/div[2]/label' },
    setPassword: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/fieldset/div[8]/div/input' },
    confirmPassword: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/fieldset/div[9]/div/input' },
    saveUser: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/div/button[1]' },
    cancel: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/div/button[2]' },
    back: { xpath: '/html/body/div/div[1]/div/div/div[2]/a' }
  },
  editUserLocators: {
    loginName: { xpath: '/html/body/div/div[1]/div/div/form/div/fieldset/div[2]/div/input' },
    name: { xpath: '/html/body/div/div[1]/div/div/form/div/fieldset/div[3]/div/input' },
    toggleRole: { xpath: '/html/body/div/div[1]/div/div/form/div/fieldset/div[5]/div/select' },
    roleOrgAdministrator: { xpath: '/html/body/div/div[1]/div/div/form/div/fieldset/div[5]/div/select/option[1]' },
    roleAppDeveloper: { xpath: '/html/body/div/div[1]/div/div/form/div/fieldset/div[5]/div/select/option[2]' },
    email: { xpath: '/html/body/div/div[1]/div/div/form/div/fieldset/div[6]/div/input' },
    phone: { xpath: '/html/body/div/div[1]/div/div/form/div/fieldset/div[7]/div/input' },
    bio: { xpath: '/html/body/div/div[1]/div/div/form/div/fieldset/div[8]/div/textarea' },
    enableUser: { xpath: '/html/body/div/div[1]/div/div/form/div/fieldset/div[9]/div/div/label/input' },
    resetPassword: { xpath: '/html/body/div/div[1]/div/div/form/div/fieldset/div[10]/div/label[1]' },
    changePassword: { xpath: '/html/body/div/div[1]/div/div/form/div/fieldset/div[10]/div/label[2]' },
    addAppPermissions: { xpath: '/html/body/div/div[1]/div/div/div[4]/label' },
    save: { xpath: '/html/body/div/div[1]/div/div/div[5]/div/button[1]' },
    cancel: { xpath: '/html/body/div/div[1]/div/div/div[5]/div/button[2]' }
  },
  editUserPopUpLocators: {
    //Reset password pop-up
    popUpResetPassword: { xpath: '/html/body/div[1]/div[1]/div/div/div[8]/div/div/div[2]/div/button[1]' },
    popUpCancel: { xpath: '/html/body/div[1]/div[1]/div/div/div[8]/div/div/div[2]/div/button[2]' },
    //Change password pop-up
    popUpNewPassword: { xpath: '//*[@id="password1"]' },
    popUpConfirmPassword: { xpath: '//*[@id="password2"]' },
    popUpChangePassword: { xpath: '//*[@id="change-password-users-submit-button"]' },
    popUpCancel: { xpath: '/html/body/div[1]/div[1]/div/div/div[7]/div/div/div[3]/div/button[2]' },
    //Add application permissions
    filter: { xpath: '/html/body/div[1]/div[1]/div/div/div[6]/div/div/div[2]/div[1]/div/label/input' },
    apply: { xpath: '/html/body/div[1]/div[1]/div/div/div[6]/div/div/div[3]/div/label[1]' },
    cancel: { xpath: '/html/body/div[1]/div[1]/div/div/div[6]/div/div/div[3]/div/label[2]' }
  },
  clickCreateUser() {
    I.wait(2);
    I.click(this.locators.createUser);
    I.seeInCurrentUrl('/users/user/create');
    I.see('Create User');
  },
  //Create Organization Administrator
  //The password is manually set
  createOrgAdministrator() {
    I.fillField(this.createUserLocators.loginName, '1AutoUserOrgAdministrator');
    I.fillField(this.createUserLocators.name, '1AutoUserOrgAdministrator');
    I.fillField(this.createUserLocators.email, '1autouser@autouser.com');
    I.click(this.createUserLocators.toggleRole);
    I.click(this.createUserLocators.roleOrgAdministrator);
    I.click(this.createUserLocators.passwordSetManually);
    I.fillField(this.createUserLocators.setPassword, 'SECRET123');
    I.fillField(this.createUserLocators.confirmPassword, 'SECRET123');
    I.click(this.createUserLocators.saveUser);
  },
  //Edit Organization Administrator
  //Add BIO
  editOrgAdministrator() {
    I.scrollTo(this.editUserLocators.bio);
    I.fillField(this.editUserLocators.bio, 'I am Organization Administrator');
    I.click(this.editUserLocators.save);
  },
  //Create Application Developer
  //The password is manually set
  createAppDeveloper() {
    I.fillField(this.createUserLocators.loginName, '2AutoUserAppDeveloper');
    I.fillField(this.createUserLocators.name, '2AutoUserAppDeveloper');
    I.fillField(this.createUserLocators.email, '2autouser@autouser.com');
    I.click(this.createUserLocators.toggleRole);
    I.click(this.createUserLocators.roleAppDeveloper);
    I.click(this.createUserLocators.passwordSetManually);
    I.fillField(this.createUserLocators.setPassword, 'SECRET123');
    I.fillField(this.createUserLocators.confirmPassword, 'SECRET123');
    I.click(this.createUserLocators.saveUser);
  },
  //Edit Application Developer
  //Add BIO
  editAppDeveloper() {
    I.scrollTo(this.editUserLocators.bio);
    I.fillField(this.editUserLocators.bio, 'I am Application Developer');
    I.click(this.editUserLocators.save);
  },
  selectAll(){
    I.click(this.locators.selectAll);
  },
  selectOrgAdministratorCheckbox() {
    I.click(this.locators.orgAdministratorCheckbox);
  },
  selectOrgAdministratorName(){
    I.click(this.locators.orgAdministratorName);
  },
  selectAppDeveloperCheckbox() {
    I.click(this.locators.appDeveloperCheckbox);
  },
  resetPassword() {
    I.click(this.editUserLocators.resetPassword);
    I.wait(2);
    I.click(this.editUserPopUpLocators.popUpResetPassword);
  },
  changePassword() {
    I.click(this.editUserLocators.changePassword);
    I.wait(2);
    I.fillField(this.editUserPopUpLocators.popUpNewPassword, 'SECRET123NEW');
    I.fillField(this.editUserPopUpLocators.popUpConfirmPassword, 'SECRET123NEW');
    I.click(this.editUserPopUpLocators.popUpChangePassword);
  },
  enableUser() {
    I.click(this.locators.enable);
  },
  disableUser() {
    I.click(this.locators.disable);
  },
  deleteUser() {
    I.click(this.locators.delete);
    I.wait(2);
    I.click(this.locators.confirmDeletePopup);
  }
}
