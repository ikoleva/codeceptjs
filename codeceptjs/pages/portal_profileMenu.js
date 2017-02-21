
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  locators: {
    myProfileAppDeveloper: { xpath: '//*[@id="t3-mainnav"]/div/nav[2]/div/ul/li[9]/div/div/div/div/div/ul/li[1]/a' },
    signOutAppDeveloper: { xpath: '//*[@id="t3-mainnav"]/div/nav[2]/div/ul/li[9]/div/div/div/div/div/ul/li[2]/a' },
    myProfileOrgAdministrator: {xpath: '//*[@id="t3-mainnav"]/div/nav[2]/div/ul/li[10]/div/div/div/div/div/ul/li[1]/a'},
    signOutOrgAdministrator: {xpath: '//*[@id="t3-mainnav"]/div/nav[2]/div/ul/li[10]/div/div/div/div/div/ul/li[2]/a'}
  },
  profileLocators: {
    editProfile: { xpath: '//*[@id="t3-content"]/div[2]/a' },
    name: { xpath: '/html/body/div/div[1]/div/div/form/div/fieldset/div[3]/div/input' },
    email: { xpath: '/html/body/div/div[1]/div/div/form/div/fieldset/div[4]/div/input' },
    phone: { xpath: '/html/body/div/div[1]/div/div/form/div/fieldset/div[5]/div/input' },
    bio: { xpath: '/html/body/div/div[1]/div/div/form/div/fieldset/div[6]/div/textarea' },
    passwordChange: { xpath: '//*[@id="general"]/fieldset/div[7]/div/label' },
    toggleTimezone: { xpath: '/html/body/div/div[1]/div/div/form/div/fieldset/div[8]/div/div/a/span' },
    bujumburaTimeZone: { xpath: '/html/body/div/div[1]/div/div/form/div/fieldset/div[8]/div/div/div/ul/li[14]' },
    saveChanges: { xpath: '/html/body/div/div[1]/div/div/div[2]/div/button[1]' },
    cancel: { xpath: '/html/body/div/div[1]/div/div/div[2]/div/button[2]' }
  },
  changePasswordLocators: {
    currentPassword: { xpath: '//*[@id="password-current"]' },
    newPassword: { xpath: '//*[@id="password1"]' },
    confirmPassword: { xpath: '//*[@id="password2"]' },
    changePassword: { xpath: '//*[@id="change-password-users-submit-button"]' },
    cancel: { xpath: '//*[@id="change-password-users-details"]/div/div/div[3]/div/button[2]' }
  },
  clickMyProfileAppDeveloper() {
    I.click(this.locators.myProfileAppDeveloper);
  },
  clickMyProfileOrgAdministrator() {
    I.click(this.locators.myProfileOrgAdministrator);
  },
  clickEditMyProfile(){
    I.click(this.profileLocators.editProfile);
  },
  editMyProfile() {
    I.clearField(this.profileLocators.name);
    I.fillField(this.profileLocators.name, 'Auto Administrator Edited');
    I.clearField(this.profileLocators.email);
    I.fillField(this.profileLocators.email, 'autoadministrator-edited@mail.com');
    I.clearField(this.profileLocators.phone);
    I.fillField(this.profileLocators.phone, '012345678');
    I.clearField(this.profileLocators.bio);
    I.fillField(this.profileLocators.bio, 'I am automation administrator and this is my bio.');
    I.click(this.profileLocators.toggleTimezone);
    I.click(this.profileLocators.bujumburaTimeZone);
  },
  changePassword() {
    I.click(this.profileLocators.passwordChange);
    I.wait(2);
    I.fillField(this.changePasswordLocators.currentPassword, 'SECRET123');
    I.fillField(this.changePasswordLocators.newPassword, 'SECRET123NEW');
    I.fillField(this.changePasswordLocators.confirmPassword, 'SECRET123NEW');
    I.click(this.changePasswordLocators.changePassword);
  },
  clickSaveChanges() {
    I.click(this.profileLocators.saveChanges);
  },
  clickCancel() {
    I.click(this.profileLocators.cancel);
  },
  clickSignOutAppDeveloper(){
    I.click(this.locators.signOutAppDeveloper);
  },
  clickSignOutOrgAdministrator(){
    I.click(this.locators.signOutOrgAdministrator);
  }
}
