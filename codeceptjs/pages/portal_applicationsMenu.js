
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  locators: {
    createApplication: { xpath: '/html/body/div[1]/div/div/form/div/div[1]/a' },
    enable: { xpath: '/html/body/div[1]/div/div/form/div/div[1]/div/button[1]' },
    disable: { xpath: '/html/body/div[1]/div/div/form/div/div[1]/div/button[2]' },
    delete: { xpath: '/html/body/div[1]/div/div/form/div/div[1]/button' },
    displayModeToggle: { xpath: '/html/body/div[1]/div/div/form/div/div[2]/div/label/button' },
    displayModeTable: { xpath: '/html/body/div[1]/div/div/form/div/div[2]/div/label/ul/li[1]/a' },
    displayModeCatalog: { xpath: '/html/body/div[1]/div/div/form/div/div[2]/div/label/ul/li[2]/a' },
    filterApplications: { xpath: '/html/body/div[1]/div/div/form/div/div[2]/label/input' }
  },
  createApplicationLocators: {
    addImage: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/fieldset/div[1]/div/div[1]/div[1]/div' },
    // On the test environment the 'Oraganization' is configured by default to API development
    // organization: {xpath: ''},
    applicationName: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/fieldset/div[3]/div/input' },
    description: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/fieldset/div[4]/div/textarea' },
    phone: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/fieldset/div[5]/div/input' },
    email: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/fieldset/div[6]/div/input' },
    enableApplication: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/fieldset/div[7]/div/div/label/input' },
    filterApis: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/div[1]/div/div/label/input' },
    selectFirstApi: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/div[1]/table/tbody/tr[1]/td[3]/input' },
    selectSecondApi: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/div[1]/table/tbody/tr[2]/td[3]/input' },
    selectThirdApi: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/div[1]/table/tbody/tr[3]/td[3]/input' },
    selectFourthApi: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/div[1]/table/tbody/tr[4]/td[3]/input' },
    selectFifthApi: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/div[1]/table/tbody/tr[5]/td[3]/input' },
    saveApplication: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/div[2]/button[1]' },
    saveAndAddAuthentication: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/div[2]/button[2]' },
    cancel: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/div[2]/button[3]' },
    back: { xpath: '/html/body/div/div[1]/div/div/div[2]/a' }
  },
  editApplicationLocators: {
    editApplication: { xpath: '//*[@id="details"]/div[1]/a/i' },
    deleteApplication: { xpath: '/html/body/div/div[1]/div/div/div[3]/form/button' },
    stayOnTab: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[1]/div/form/div[2]/button[2]' },
    leaveTab: { xpath: '/html/body/div[1]/div[1]/div/div/div[13]/div/div/div[3]/div/button[2]' },
    //Details
    details: { xpath: '/html/body/div/div[1]/div/div/div[4]/ul/li[1]/a' },
    applicationName: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[1]/div/form/fieldset/div[3]/div/input' },
    description: { xpath: '//*[@id="description"]' },
    phone: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[1]/div/form/fieldset/div[5]/div/input' },
    email: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[1]/div/form/fieldset/div[6]/div/input' },
    enableApplication: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[1]/div/form/fieldset/div[7]/div/div/label/input' },
    selectFirstApi: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[1]/div/form/div[1]/table/tbody/tr[1]/td[3]/input' },
    selectSecondApi: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[1]/div/form/div[1]/table/tbody/tr[2]/td[3]/input' },
    selectThirdApi: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[1]/div/form/div[1]/table/tbody/tr[3]/td[3]/input' },
    selectFourthApi: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[1]/div/form/div[1]/table/tbody/tr[4]/td[3]/input' },
    selectFifthApi: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[1]/div/form/div[1]/table/tbody/tr[5]/td[3]/input' },
    applyChanges: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[1]/div/form/div[2]/button[1]' },
    cancel: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[1]/div/form/div[2]/button[2]' },
    //Authentication
    authentication: { xpath: '/html/body/div/div[1]/div/div/div[4]/ul/li[2]/a' },
    toggleApiKeys: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[2]/div[1]/div[1]/h2/a/strong' },
    generateApiKeys: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[2]/div[1]/div[2]/div/form/button' },
    toggleOauthCredentials: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[2]/div[2]/div[1]/h2/a/strong' },
    generateOauthCredentials: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[2]/div[2]/div[2]/div/button' },
    toggleExternalCredentials: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[2]/div[3]/div[1]/h2/a/strong' },
    generateExternalCredentials: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[2]/div[3]/div[1]/h2/a/strong' },
    //Oauth Credentials Actions
    toggleActions: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[2]/div[2]/div[2]/div/table/tbody/tr/td[6]/div/a' },
    editApiKey: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[2]/div[2]/div[2]/div/table/tbody/tr/td[6]/div/ul/li[1]/button' },
    viewSecret: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[2]/div[2]/div[2]/div/table/tbody/tr/td[6]/div/ul/li[2]/button' },
    disable: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[2]/div[2]/div[2]/div/table/tbody/tr/td[6]/div/ul/li[3]/form/button' },
    delete: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[2]/div[2]/div[2]/div/table/tbody/tr/td[6]/div/ul/li[4]/form/button' },
    //Sharing
    sharing: { xpath: '/html/body/div/div[1]/div/div/div[4]/ul/li[3]/a' },
    addUsers: { xpath: '//*[@id="sharing"]/button' },
    apply: {xpath: '//*[@id="add-shared-users-submit-button"]'},
    cancel: {xpath: '//*[@id="add-shared-users-details"]/div/div/div[3]/div/button[2]'},
    view: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[3]/div/div[1]/div[2]/form/label[1]' },
    edit: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[3]/div/div[1]/div[2]/form/label[2]' },
    remove: { xpath: '/html/body/div/div[1]/div/div/div[4]/div/div[3]/div/div[1]/div[2]/form/label[2]' }
  },
  apiKeysActionsLocators: {
    //Edit
    javaScriptOrigins: { xpath: '/html/body/div[1]/div[1]/div/div/div[5]/div/div/div[2]/form/fieldset/div[2]/div/textarea' },
    saveChanges: { xpath: '/html/body/div[1]/div[1]/div/div/div[5]/div/div/div[3]/div/button[1]' },
    cancel: { xpath: '/html/body/div[1]/div[1]/div/div/div[5]/div/div/div[3]/div/button[2]' }
  },
  sharingAddUsersLocators: {
    apply: { xpath: '/html/body/div[1]/div[1]/div/div/div[10]/div/div/div[3]/div/button[1]' },
    cancel: { xpath: '/html/body/div[1]/div[1]/div/div/div[10]/div/div/div[3]/div/button[2]' }
  },
  clickCreateApplication() {
    I.click(this.locators.createApplication);
    I.seeInCurrentUrl('/apps/application/create');
    I.see('Create Application');
  },
  clickEditApplication() {
    I.wait(2);
    I.click(this.editApplicationLocators.editApplication);
  },
  createApplication() {
    I.fillField(this.createApplicationLocators.applicationName, 'Auto Application');
    I.fillField(this.createApplicationLocators.description, 'This is an application created with automation test');
    I.fillField(this.createApplicationLocators.phone, '12345678');
    I.fillField(this.createApplicationLocators.email, 'autoapp@autoapp.com');
    I.click(this.createApplicationLocators.selectFirstApi);
    I.click(this.createApplicationLocators.selectThirdApi);
    I.click(this.createApplicationLocators.selectFifthApi);
    I.click(this.createApplicationLocators.saveApplication);
  },
  applyChanges() {
    I.click(this.editApplicationLocators.applyChanges);
  },
  cancelChanges() {
    I.click(this.editApplicationLocators.cancelChanges);
  }
}