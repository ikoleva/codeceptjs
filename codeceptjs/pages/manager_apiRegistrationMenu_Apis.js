
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  manageBackendApiLocators: {
    manageSelected: { xpath: '//*[@id="dijit_form_DropDownButton_9_label"]' },
    deleteSelected: { xpath: '//*[@id="dijit_MenuItem_17_text"]' },
    cloneApi: { xpath: '//*[@id="dijit_MenuItem_18_text"]' },
    exportApi: { xpath: '//*[@id="dijit_MenuItem_19_text"]' },
    downloadOriginalApiDefinition: { xpath: '//*[@id="dijit_MenuItem_20_text"]' }
  },
  cloneFirstBackendApiLocators: {
    selectApi: { xpath: '//*[@id="dijit_form_CheckBox_8"]' },
    apiName: { xpath: '//*[@id="uniqName_0_89-name"]' },
    create: { xpath: '//*[@id="dijit_form_Button_83_label"]' },
    apply: { xpath: '//*[@id="dijit_form_Button_85_label"]' },
    cancel: { xpath: '//*[@id="dijit_form_Button_86_label"]' }
  },
  cloneSecondBackendApiLocators: {
    selectApi: { xpath: '//*[@id="dijit_form_CheckBox_13"]' },
    apiName: { xpath: '//*[@id="uniqName_0_118-name"]' },
    create: { xpath: '//*[@id="dijit_form_Button_83_label"]' },
    apply: { xpath: '//*[@id="dijit_form_Button_85_label"]' },
    cancel: { xpath: '//*[@id="dijit_form_Button_86_label"]' }
  },
  cloneThirdBackendApiLocators: {
    selectApi: { xpath: '//*[@id="dijit_form_CheckBox_18"]' },
    apiName: { xpath: '//*[@id="uniqName_0_147-name"]' },
    toggleOrganization: {xpath: '//*[@id="uniqName_0_134-name"]'},
    selectAnotherOrganization: {xpath: '//*[@id="dijit_MenuItem_94_text"]/span'},
    create: { xpath: '//*[@id="dijit_form_Button_83_label"]' },
    apply: { xpath: '//*[@id="dijit_form_Button_85_label"]' },
    cancel: { xpath: '//*[@id="dijit_form_Button_86_label"]' }
  },
  importFirstFrontendApiLocators: {
    toggleSelectExistingBackendApi: { xpath: '//*[@id="uniqName_0_89-name"]' },
    selectExistingBackendApi: { xpath: '//*[@id="dijit_MenuItem_34_text"]/span' },
    ok: { xpath: '//*[@id="dijit_form_Button_107_label"]' },
    cancel: { xpath: '//*[@id="dijit_form_Button_108_label"]' },
    resourcePath: { xpath: '//*[@id="uniqName_5_2-path"]' },
    toggleInboundSecurity: { xpath: '//*[@id="uniqName_5_2-inbound-security"]/tbody/tr/td[1]' },
    selectApiKey: { xpath: '//*[@id="dijit_MenuItem_48_text"]/span' },
    okPopup: { xpath: '//*[@id="dijit_form_Button_131_label"]' },
    save: { xpath: '//*[@id="dijit_form_Button_92_label"]' }
  },
  importSecondFrontendApiLocators: {
    toggleSelectExistingBackendApi: { xpath: '//*[@id="uniqName_0_141-name"]' },
    selectExistingBackendApi: { xpath: '//*[@id="dijit_MenuItem_152_text"]' },
    ok: { xpath: '//*[@id="dijit_form_Button_133_label"]' },
    cancel: { xpath: '//*[@id="dijit_form_Button_134_label"]' },
    resourcePath: { xpath: '//*[@id="uniqName_5_7-path"]' },
    toggleInboundSecurity: { xpath: '//*[@id="uniqName_5_7-inbound-security"]/tbody/tr/td[1]' },
    selectApiKey: { xpath: '//*[@id="dijit_MenuItem_165_text"]/span' },
    okPopup: { xpath: '//*[@id="dijit_form_Button_157_label"]' },
    save: { xpath: '//*[@id="dijit_form_Button_92_label"]' }
  },
  importThirdFrontendApiLocators: {
    toggleSelectExistingBackendApi: { xpath: '//*[@id="uniqName_0_193-name"]' },
    selectExistingBackendApi: { xpath: '//*[@id="dijit_MenuItem_268_text"]/span' },
    ok: { xpath: '//*[@id="dijit_form_Button_159_label"]' },
    cancel: { xpath: '//*[@id="dijit_form_Button_160_label"]' },
    resourcePath: { xpath: '//*[@id="uniqName_5_12-path"]' },
    toggleInboundSecurity: { xpath: '//*[@id="uniqName_5_12-inbound-security"]/tbody/tr/td[1]' },
    selectApiKey: { xpath: '//*[@id="dijit_MenuItem_281_text"]/span' },
    okPopup: { xpath: '//*[@id="dijit_form_Button_180_label"]' },
    save: { xpath: '//*[@id="dijit_form_Button_92_label"]' }
  },
  clickManageSelected() {
    I.wait(2);
    I.click(this.manageBackendApiLocators.manageSelected);
  },
  //
  //Create backend APIs
  //
  cloneFirstBackendApi() {
    //Select API to clone
    I.click(this.cloneFirstBackendApiLocators.selectApi);
    I.wait(2);
    I.click(this.manageBackendApiLocators.manageSelected);
    I.click(this.manageBackendApiLocators.cloneApi);
    I.wait(2);
    I.clearField(this.cloneFirstBackendApiLocators.apiName);
    I.fillField(this.cloneFirstBackendApiLocators.apiName, 'First Pet Store');
    I.click(this.cloneFirstBackendApiLocators.create);
  },
  cloneSecondBackendApi() {
    //Select API to clone
    I.click(this.cloneSecondBackendApiLocators.selectApi);
    I.wait(2);
    I.click(this.manageBackendApiLocators.manageSelected);
    I.click(this.manageBackendApiLocators.cloneApi);
    I.wait(2);
    I.clearField(this.cloneSecondBackendApiLocators.apiName);
    I.fillField(this.cloneSecondBackendApiLocators.apiName, 'Second Pet Store');
    I.click(this.cloneSecondBackendApiLocators.create);
  },
  cloneThirdBackendApi() {
    //Select API to clone
    I.click(this.cloneThirdBackendApiLocators.selectApi);
    I.wait(2);
    I.click(this.manageBackendApiLocators.manageSelected);
    I.click(this.manageBackendApiLocators.cloneApi);
    I.wait(2);
    I.clearField(this.cloneThirdBackendApiLocators.apiName);
    I.fillField(this.cloneThirdBackendApiLocators.apiName, 'Third Pet Store');
    I.click(this.cloneThirdBackendApiLocators.toggleOrganization);
    I.click(this.cloneThirdBackendApiLocators.selectAnotherOrganization);
    I.click(this.cloneThirdBackendApiLocators.create);
  },
  //
  //Create frontend APIs
  //
  importFirstFrontendApi() {
    I.click(this.importFirstFrontendApiLocators.toggleSelectExistingBackendApi);
    I.click(this.importFirstFrontendApiLocators.selectExistingBackendApi);
    I.click(this.importFirstFrontendApiLocators.ok);
    I.wait(2);
    I.clearField(this.importFirstFrontendApiLocators.resourcePath);
    I.fillField(this.importFirstFrontendApiLocators.resourcePath, '/firstpetstore')
    I.click(this.importFirstFrontendApiLocators.toggleInboundSecurity);
    I.click(this.importFirstFrontendApiLocators.selectApiKey);
    I.click(this.importFirstFrontendApiLocators.okPopup);
    I.wait(2);
    I.click(this.importFirstFrontendApiLocators.save);
  },
  importSecondFrontendApi() {
    I.click(this.importSecondFrontendApiLocators.toggleSelectExistingBackendApi);
    I.click(this.importSecondFrontendApiLocators.selectExistingBackendApi);
    I.click(this.importSecondFrontendApiLocators.ok);
    I.wait(2);
    I.clearField(this.importSecondFrontendApiLocators.resourcePath);
    I.fillField(this.importSecondFrontendApiLocators.resourcePath, '/secondpetstore')
    I.click(this.importSecondFrontendApiLocators.toggleInboundSecurity);
    I.click(this.importSecondFrontendApiLocators.selectApiKey);
    I.click(this.importSecondFrontendApiLocators.okPopup);
    I.wait(2);
    I.click(this.importSecondFrontendApiLocators.save);
  },
  importThirdFrontendApi(){
    I.click(this.importThirdFrontendApiLocators.toggleSelectExistingBackendApi);
    I.click(this.importThirdFrontendApiLocators.selectExistingBackendApi);
    I.click(this.importThirdFrontendApiLocators.ok);
    I.wait(2);
    I.clearField(this.importThirdFrontendApiLocators.resourcePath);
    I.fillField(this.importThirdFrontendApiLocators.resourcePath, '/thirdpetstore')
    I.click(this.importThirdFrontendApiLocators.toggleInboundSecurity);
    I.click(this.importThirdFrontendApiLocators.selectApiKey);
    I.click(this.importThirdFrontendApiLocators.okPopup);
    I.wait(2);
    I.click(this.importThirdFrontendApiLocators.save);
  }
}
