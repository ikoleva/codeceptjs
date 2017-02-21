
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  locators: {
    oraganizations: { xpath: '/html/body/div[2]/div[4]/ul/li[1]' },
    applicationDevelopers: { xpath: '/html/body/div[2]/div[4]/ul/li[2]' },
    applications: { xpath: '/html/body/div[2]/div[4]/ul/li[3]' },
    //Manage Users
    allUsers: { xpath: '//*[@id="common_ui_grid_SimpleGrid_1_SelectAll"]' },
    toggleManageSelected: { xpath: '//*[@id="dijit_form_DropDownButton_4_label"]' },
    deleteSelected: { xpath: '//*[@id="dijit_MenuItem_3_text"]' },
    ok: { xpath: '//*[@id="uniqName_8_0"]/div[2]/div/span[1]' }
  },
  applicationsLocators: {
    newApplication: { xpath: '/html/body/div[7]/div/div[2]/div/div[1]/div/div[1]/span/span/span/span[3]' },
    applicationName: { xpath: '/html/body/div[7]/div/table/tbody/tr/td/div/div[2]/div/div/div/div/div/div[3]/div/div/div/div/fieldset[1]/div[2]/div/div/div[2]/input' },
    toggleOrganization: { xpath: '//*[@id="uniqName_0_90-name"]' },
    selectOrganization: { xpath: '//*[@id="dijit_MenuItem_34_text"]/span' },
    toggleAddApi: { xpath: '//*[@id="dijit_form_DropDownButton_14_label"]' },
    selectApiToAdd: { xpath: '//*[@id="dijit_MenuItem_38_text"]' },
    create: { xpath: '//*[@id="dijit_form_Button_43_label"]' },
    //Authentication
    authentication: { xpath: '//*[@id="dijit_layout_TabContainer_4_tablist_dijit_layout_ContentPane_48"]' },
    //Quota
    quota: { xpath: '//*[@id="dijit_layout_TabContainer_4_tablist_dijit_layout_ContentPane_49"]' },
    //Sharing
    sharing: { xpath: '//*[@id="dijit_layout_TabContainer_1_tablist_dijit_layout_ContentPane_44"]' },
    toggleAddUser: { xpath: '//*[@id="dijit_form_DropDownButton_16"]' },
    //Sharing - ApplDeveloper
    selectAppDeveloper: { xpath: '//*[@id="dijit_MenuItem_44_text"]' },
    selectAppDeveloperCheckbox: { xpath: '//*[@id="common_ui_grid_SimpleGrid_11"]/table/tbody/tr/td[1]/div' },
    togglePermissionsAppDeveloper: { xpath: '//*[@id="dijit_form_Select_10"]' },
    selectAppDeveloperView: { xpath: '//*[@id="dijit_MenuItem_48_text"]' },
    selectAppDeveloperManage: { xpath: '//*[@id="dijit_MenuItem_47_text"]' },
    back: { xpath: '//*[@id="dijit_form_Button_43_label"]' },
    //Sharing - OrgAdministrator
    selectOrgAdministrator: { xpath: '//*[@id="dijit_MenuItem_99"]' },
    selectOrgAdministratorCheckbox: { xpath: '' },
    remove: { xpath: '//*[@id="dijit_form_Button_127_label"]' }
  },
  organizationAdministratorLocators: {
    newUser: { xpath: '/html/body/div[6]/div/div[2]/div/div[1]/div/div[1]/span/span/span/span[3]' },
    loginName: { xpath: '//*[@id="uniqName_0_88-name"]' },
    name: { xpath: '//*[@id="uniqName_0_89-name"]' },
    email: { xpath: '//*[@id="uniqName_0_90-name"]' },
    toggleOrganization: { xpath: '//*[@id="uniqName_0_92-name"]' },
    selectOrganization: { xpath: '//*[@id="dijit_MenuItem_33_text"]/span' },
    toggleRole: { xpath: '//*[@id="uniqName_0_93-name"]' },
    selectRoleOrgAdmin: { xpath: '//*[@id="dijit_MenuItem_37_text"]/span' },
    create: { xpath: '//*[@id="dijit_form_Button_34_label"]' },
    back: { xpath: '//*[@id="dijit_form_Button_34_label"]' },
    cancel: { xpath: '//*[@id="dijit_form_Button_46_label"]' }
  },
  organizationAdministratorChangePwdLocators: {
    changePassword: { xpath: '//*[@id="dijit_form_Button_110_label"]' },
    newPassword: { xpath: '//*[@id="uniqName_0_112-name"]' },
    verifyNewPassword: { xpath: '//*[@id="uniqName_0_113-name"]' },
    changePasswordPopup: { xpath: '//*[@id="dijit_form_Button_111_label"]' },
    cancel: { xpath: '//*[@id="dijit_form_Button_114_label"]' },
    ok: { xpath: '//*[@id="dijit_form_Button_113_label"]' }
  },
  applicationDeveloperLocators: {
    newUser: { xpath: '//*[@id="dijit_form_Button_30_label"]' },
    loginName: { xpath: '//*[@id="uniqName_0_117-name"]' },
    name: { xpath: '//*[@id="uniqName_0_118-name"]' },
    email: { xpath: '//*[@id="uniqName_0_119-name"]' },
    toggleOrganization: { xpath: '//*[@id="uniqName_0_121-name"]' },
    selectOrganization: { xpath: '//*[@id="dijit_MenuItem_45_text"]/span' },
    toggleRole: { xpath: '//*[@id="uniqName_0_122-name"]' },
    selectRoleUser: { xpath: '//*[@id="dijit_MenuItem_50_text"]/span' },
    create: { xpath: '//*[@id="dijit_form_Button_34_label"]' },
    back: { xpath: '//*[@id="dijit_form_Button_34_label"]' },
    cancel: { xpath: '//*[@id="dijit_form_Button_37_label"]' },
  },
  applicationDeveloperChangePwdLocators: {
    changePassword: { xpath: '//*[@id="dijit_form_Button_115_label"]' },
    newPassword: { xpath: '//*[@id="uniqName_0_141-name"]' },
    verifyNewPassword: { xpath: '//*[@id="uniqName_0_142-name"]' },
    changePasswordPopup: { xpath: '//*[@id="dijit_form_Button_116_label"]' },
    cancel: { xpath: '//*[@id="dijit_form_Button_110_label"]' },
    ok: { xpath: '//*[@id="dijit_form_Button_118_label"]' }
  },
  viewApplicationDeveloperLocators: {
    approve: { xpath: '//*[@id="dijit_form_Button_111_label"]' },
    reject: { xpath: '//*[@id="dijit_form_Button_112_label"]' }
  },
  organizationLocators: {
    newOrganization: { xpath: '/html/body/div[5]/div/div[2]/div/div[1]/div/div[1]/span/span/span/span[3]' },
    organizationName: { xpath: '/html/body/div[5]/div/table/tbody/tr/td/div/div[2]/div/div/div/div/div/div/fieldset[1]/div[2]/div/div/div[2]/input' },
    toggleApiDevelopmentOn: { xpath: '/html/body/div[5]/div/table/tbody/tr/td/div/div[2]/div/div/div/div/div/div/fieldset[1]/div[5]/div/div/table/tbody/tr/td[1]/div[1]' },
    toggleApiDevelopmentOff: { xpath: '/html/body/div[5]/div/table/tbody/tr/td/div/div[2]/div/div/div/div/div/div/fieldset[1]/div[5]/div/div/table/tbody/tr/td[2]/div[1]' },
    toggleAddApi: { xpath: '' },
    create: { xpath: '//*[@id="dijit_form_Button_25"]' },
    cancel: { xpath: '/html/body/div[5]/div/div[2]/div/div[2]/div/div[1]/span[4]/span/span/span[3]' }
  },
  clickOrganizations() {
    I.click(this.locators.oraganizations);
  },
  clickCreateOrganization() {
    I.click(this.organizationLocators.newOrganization);
  },
  createAutomationOrganization() {
    I.click(this.organizationLocators.newOrganization);
    I.fillField(this.organizationLocators.organizationName, 'Automation Organization');
    I.click(this.organizationLocators.toggleApiDevelopmentOn);
    I.click(this.organizationLocators.create);
  },
  createAnotherOrganization() {
    I.click(this.organizationLocators.newOrganization);
    I.fillField(this.organizationLocators.organizationName, 'Another Organization');
    I.click(this.organizationLocators.toggleApiDevelopmentOn);
    I.click(this.organizationLocators.create);
  },
  clickApplicationDevelopers() {
    I.wait();
    I.click(this.locators.applicationDevelopers);
  },
  selectAllUsers() {
    I.wait(2);
    I.click(this.locators.allUsers);
  },
  deleteSelectedUsers() {
    I.click(this.locators.toggleManageSelected);
    I.click(this.locators.deleteSelected);
    I.wait(2);
    I.click(this.locators.ok);
  },
  createOrgAdministrator() {
    I.click(this.organizationAdministratorLocators.newUser);
    I.fillField(this.organizationAdministratorLocators.loginName, 'OrgAdministrator');
    I.fillField(this.organizationAdministratorLocators.name, 'OrgAdministrator');
    I.fillField(this.organizationAdministratorLocators.email, 'orgadministrator@mail.com');
    I.scrollTo(this.organizationAdministratorLocators.toggleOrganization);
    I.click(this.organizationAdministratorLocators.toggleOrganization);
    I.click(this.organizationAdministratorLocators.selectOrganization);
    I.click(this.organizationAdministratorLocators.toggleRole);
    I.click(this.organizationAdministratorLocators.selectRoleOrgAdmin);
    I.scrollTo(0, 0);
    I.click(this.organizationAdministratorLocators.create);
    I.wait(2);
    //Change the password
    I.scrollTo(this.organizationAdministratorChangePwdLocators.changePassword);
    I.click(this.organizationAdministratorChangePwdLocators.changePassword);
    I.fillField(this.organizationAdministratorChangePwdLocators.newPassword, 'SECRET123');
    I.fillField(this.organizationAdministratorChangePwdLocators.verifyNewPassword, 'SECRET123');
    I.wait(2);
    I.click(this.organizationAdministratorChangePwdLocators.changePasswordPopup);
    I.wait(2);
    I.click(this.organizationAdministratorChangePwdLocators.ok);
    I.wait(2);
    I.scrollTo(0, 0);
    I.click(this.organizationAdministratorLocators.back);
  },
  createAppDeveloper() {
    I.click(this.applicationDeveloperLocators.newUser);
    I.fillField(this.applicationDeveloperLocators.loginName, 'AppDeveloper');
    I.fillField(this.applicationDeveloperLocators.name, 'AppDeveloper');
    I.fillField(this.applicationDeveloperLocators.email, 'appdeveloper@mail.com');
    I.click(this.applicationDeveloperLocators.toggleOrganization);
    I.click(this.applicationDeveloperLocators.selectOrganization);
    I.click(this.applicationDeveloperLocators.toggleRole);
    I.click(this.applicationDeveloperLocators.selectRoleUser);
    I.scrollTo(0, 0);
    I.click(this.applicationDeveloperLocators.create);
    I.wait(2);
    //Change the password
    I.scrollTo(this.applicationDeveloperChangePwdLocators.changePassword);
    I.click(this.applicationDeveloperChangePwdLocators.changePassword);
    I.fillField(this.applicationDeveloperChangePwdLocators.newPassword, 'SECRET123');
    I.fillField(this.applicationDeveloperChangePwdLocators.verifyNewPassword, 'SECRET123');
    I.wait(2);
    I.click(this.applicationDeveloperChangePwdLocators.changePasswordPopup);
    I.wait(2);
    I.click(this.applicationDeveloperChangePwdLocators.ok);
    I.wait(2);
  },
  clickApplicationsOrgAdministrator() {
    I.click(this.locators.applications);
  },
  createApplication() {
    I.click(this.applicationsLocators.newApplication);
    I.fillField(this.applicationsLocators.applicationName, 'Automation Application');
    I.click(this.applicationsLocators.toggleOrganization);
    I.click(this.applicationsLocators.selectOrganization);
    I.click(this.applicationsLocators.toggleAddApi);
    I.click(this.applicationsLocators.selectApiToAdd);
    I.scrollTo(this.applicationsLocators.create);
    I.click(this.applicationsLocators.create);
  },
  clickApplicationSharing() {
    I.click(this.applicationsLocators.sharing);
  },
  editApplicationSharingAddAppDeveloper() {
    I.click(this.applicationsLocators.toggleAddUser);
    I.click(this.applicationsLocators.selectAppDeveloper);
  }
}
