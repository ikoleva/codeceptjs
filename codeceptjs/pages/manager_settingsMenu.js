
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  locators: {
    account: { xpath: '/html/body/div[2]/div[8]/ul/li[1]' },
    apiManagerSettings: { xpath: '//*[@id="subnav-settings"]' },
    alerts: { xpath: '/html/body/div[2]/div[8]/ul/li[3]' },
    remoteHosts: { xpath: '/html/body/div[2]/div[8]/ul/li[4]' }
  },
  accountSettingsLocators: {
    image: { xpath: '/html/body/div[13]/div[3]/div/div/div/fieldset[1]/div[1]/div/div/div/span[1]' },
    loginName: { xpath: '/html/body/div[13]/div[3]/div/div/div/fieldset[1]/div[2]/div/div/div[2]/input' },
    name: { xpath: '/html/body/div[13]/div[3]/div/div/div/fieldset[1]/div[3]/div/div/div[2]/input' },
    email: { xpath: '/html/body/div[13]/div[3]/div/div/div/fieldset[1]/div[4]/div/div/div[2]/input' },
    toggleEnabledOn: { xpath: '/html/body/div[13]/div[3]/div/div/div/fieldset[1]/div[5]/div/div/table/tbody/tr/td[1]/div[1]' },
    phone: { xpath: '/html/body/div[13]/div[3]/div/div/div/fieldset[3]/div[1]/div/div/div[2]/input ' },
    description: { xpath: '/html/body/div[13]/div[3]/div/div/div/fieldset[3]/div[2]/div/textarea' },
    changePassword: { xpath: '/html/body/div[13]/div[3]/div/div/div/fieldset[4]/div/div/span/span/span' }
  },
  changePasswordPopUp: {
    currentPassword: { xpath: '/html/body/div[23]/div[2]/div[1]/fieldset/div[1]/div/div/div[2]/input' },
    newPassword: { xpath: '/html/body/div[23]/div[2]/div[1]/fieldset/div[2]/div/div/div[2]/input' },
    verifyPassword: { xpath: '/html/body/div[23]/div[2]/div[1]/fieldset/div[3]/div/div/div[2]/input' },
    changePassword: { xpath: '/html/body/div[23]/div[2]/div[2]/span[1]/span/span' },
    cancel: { xpath: '/html/body/div[23]/div[2]/div[2]/span[2]/span/span' }
  },
  apiManagerSettingsLocators: {
    //API Manager settings
    apiManagerName: { xpath: '/html/body/div[14]/div[3]/fieldset[1]/div[1]/div/div[1]/div[2]/input' },
    apiManagerHost: { xpath: '/html/body/div[14]/div[3]/fieldset[1]/div[2]/div/div[1]/div[2]/input' },
    emailReplayTo: { xpath: '/html/body/div[14]/div[3]/fieldset[1]/div[3]/div/div/div[2]/input' },
    emailBounce: { xpath: '/html/body/div[14]/div[3]/fieldset[1]/div[4]/div/div/div[2]/input' },
    toggleDemoModeOn: { xpath: 'html/body/div[14]/div[3]/fieldset[1]/div[5]/div/div[1]/table/tbody/tr/td[1]/div[1]' },
    toggleDemoModeOff: { xpath: '/html/body/div[14]/div[3]/fieldset[1]/div[5]/div/div[1]/table/tbody/tr/td[2]/div[1]' },
    toggleTrialModeOn: { xpath: '/html/body/div[14]/div[3]/fieldset[1]/div[6]/div/div[1]/table/tbody/tr/td[1]/div[1]' },
    toggleTrialModeOff: { xpath: '/html/body/div[14]/div[3]/fieldset[1]/div[6]/div/div[1]/table/tbody/tr/td[2]/div[1]' },
    defaultTrialDuration: { xpath: '/html/body/div[14]/div[3]/fieldset[1]/div[7]/div/div[1]/div[2]/input[1]' },
    //API Portal settings
    toggleApiPortalOn: { xpath: '/html/body/div[14]/div[3]/fieldset[2]/div[1]/div/div[1]/table/tbody/tr/td[1]/div[1]' },
    toggleApiPortalOff: { xpath: '/html/body/div[14]/div[3]/fieldset[2]/div[1]/div/div[1]/table/tbody/tr/td[2]/div[1]' },
    apiPortalName: { xpath: '/html/body/div[14]/div[3]/fieldset[2]/div[2]/div/div[1]/div[2]/input' },
    apiPortalHostAndPort: { xpath: '/html/body/div[14]/div[3]/fieldset[2]/div[3]/div/div[1]/div[2]/input' },
    //General settings
    toggleUserRegistrationOn: { xpath: '/html/body/div[14]/div[3]/fieldset[3]/div[1]/div/div/table/tbody/tr/td[1]/div[1]' },
    toggleUserRegistrationOff: { xpath: '/html/body/div[14]/div[3]/fieldset[3]/div[1]/div/div/table/tbody/tr/td[2]/div[1]' },
    toggleForgotPasswordOn: { xpath: '/html/body/div[14]/div[3]/fieldset[3]/div[2]/div/div/table/tbody/tr/td[1]/div[1]' },
    toggleForgotPasswordOff: { xpath: '/html/body/div[14]/div[3]/fieldset[3]/div[2]/div/div/table/tbody/tr/td[2]/div[1]' },
    minimumPasswordLength: { xpath: '/html/body/div[14]/div[3]/fieldset[3]/div[3]/div/div' },
    toggleAutoApproveUserRegistrationOn: { xpath: '/html/body/div[14]/div[3]/fieldset[3]/div[4]/div/div/table/tbody/tr/td[1]/div[1]' },
    toggleAutoApproveUserRegistrationOff: { xpath: '/html/body/div[14]/div[3]/fieldset[3]/div[4]/div/div/table/tbody/tr/td[2]/div[1]' },
    toggleAutoApproveApplicationsOn: { xpath: '/html/body/div[14]/div[3]/fieldset[3]/div[5]/div/div/table/tbody/tr/td[1]/div[1]' },
    toggleAutoApproveApplicationsOff: { xpath: '/html/body/div[14]/div[3]/fieldset[3]/div[5]/div/div/table/tbody/tr/td[2]/div[1]' },
    loginNameRegularExpression: { xpath: '/html/body/div[14]/div[3]/fieldset[3]/div[6]/div/div[1]/div[2]/input' },
    toggleEnableOAuthScopesPerApplicationOn: { xpath: '/html/body/div[14]/div[3]/fieldset[3]/div[7]/div/div/table/tbody/tr/td[1]/div[1]' },
    toggleEnableOAuthScopesPerApplicationOff: { xpath: 'html/body/div[14]/div[3]/fieldset[5]/div[2]/div/div[1]/table/tbody/tr/td[2]/div[1]' },
    idleSessionTimeout: { xpath: '/html/body/div[14]/div[3]/fieldset[3]/div[8]/div/div[1]/div[2]/input[1]' },
    //Organization Administrator Delegation
    toggleDelegateUserManagementOn: { xpath: '//*[@id="uniqName_0_20-name"]/tbody/tr/td[1]/div[1]' },
    toggleDelegateUserManagementOff: { xpath: '//*[@id="uniqName_0_20-name"]/tbody/tr/td[2]/div[1]'},
    toggleDelegateApplicationManagementOn: { xpath: '//*[@id="uniqName_0_21-name"]/tbody/tr/td[1]/div[1]' },
    toggleDelegateApplicationManagementOff: { xpath: '//*[@id="uniqName_0_21-name"]/tbody/tr/td[2]/div[1]'},
    //API Registration
    apiDefaultVirtualHost: { xpath: '/html/body/div[14]/div[3]/fieldset[5]/div[1]/div/div[1]/div[2]/input' },
    toggleApiPromotionViaPolicy: { xpath: '/html/body/div[14]/div[3]/fieldset[5]/div[2]/div/div[1]/table/tbody/tr/td[1]/div[1]' },
  },
  reloadApplicationPopUp: {
    ok: { xpath: '/html/body/div[25]/div[2]/div/span/span/span/span[3]' }
  },
  clickAccount() {
    I.click(this.locators.account);
  },
  clickApiManagerSettings() {
    I.click(this.locators.apiManagerSettings);
  },
  clickAlerts() {
    I.click(this.locators.alerts);
  },
  clickRemoteHosts() {
    I.click(this.locators.remoteHosts);
  },
  toggleUserRegistrationOn() {
    I.click(this.apiManagerSettingsLocators.toggleUserRegistrationOn);
  },
  toggleAutoApproveUserRegistrationOn() {
    I.click(this.apiManagerSettingsLocators.toggleAutoApproveUserRegistrationOn);
  },
  toggleAutoApproveApplicationsOn() {
    I.click(this.apiManagerSettingsLocators.toggleAutoApproveApplicationsOn);
  },
  toggleDelegateUserManagementOn() {
    I.click(this.apiManagerSettingsLocators.toggleDelegateUserManagementOn);
  },
  toggleDelegateApplicationManagementOn() {
    I.click(this.apiManagerSettingsLocators.toggleDelegateApplicationManagementOn);
  },
  toggleApiPortalOn() {
    I.click(this.apiManagerSettingsLocators.toggleApiPortalOn);
  },
    toggleUserRegistrationOff() {
    I.click(this.apiManagerSettingsLocators.toggleUserRegistrationOff);
  },
  toggleAutoApproveUserRegistrationOff() {
    I.click(this.apiManagerSettingsLocators.toggleAutoApproveUserRegistrationOff);
  },
  toggleAutoApproveApplicationsOff() {
    I.click(this.apiManagerSettingsLocators.toggleAutoApproveApplicationsOff);
  },
  toggleDelegateUserManagementOff() {
    I.click(this.apiManagerSettingsLocators.toggleDelegateUserManagementOff);
  },
  toggleDelegateApplicationManagementOff() {
    I.click(this.apiManagerSettingsLocators.toggleDelegateApplicationManagementOff);
  },
  toggleApiPortalOff() {
    I.click(this.apiManagerSettingsLocators.toggleApiPortalOff);
  },
  editApiPortalName() {
    I.clearField(this.apiManagerSettingsLocators.apiPortalName);
    I.fillField(this.apiManagerSettingsLocators.apiPortalName, 'Axway API Portal');
  },
  editApiPortalHostAndPort() {
    I.clearField(this.apiManagerSettingsLocators.apiPortalHostAndPort);
    I.fillField(this.apiManagerSettingsLocators.apiPortalHostAndPort, 'https://10.134.56.66:443');
  }
}
