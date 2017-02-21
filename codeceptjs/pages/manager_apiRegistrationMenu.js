
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  //FrontEnd
  frontendApiLocators: {
    frontendApi: { xpath: '/html/body/div[2]/div[7]/ul/li[1]' },
    newApi: { xpath: '//*[@id="dijit_layout_ContentPane_32"]/div[1]/span[2]/span' },
    newApiFromBackendApi: { xpath: '//*[@id="dijit_MenuItem_21_text"]' },
    importApiCollection: { xpath: '/html/body/div[20]/table/tbody/tr[3]' }
  },
  newApiFromBackendApiLocators: {
    toggleSelectExistingBackendApi: { xpath: '//*[@id="uniqName_0_132-name"]/tbody/tr/td[1]' },
    selectExistingBackendApi: { xpath: '//*[@id="dijit_MenuItem_36_text"]/span' },
    ok: { xpath: '//*[@id="dijit_form_Button_124_label"]' },
    cancel: { xpath: '//*[@id="dijit_form_Button_134"]' }
  },
  editApiLocators: {
    //Inbound
    toggleInboundSecurity: { xpath: '//*[@id="uniqName_5_5-inbound-security"]/tbody/tr/td[1]' },
    selectApiKey: { xpath: '//*[@id="dijit_MenuItem_49_text"]/span' },
    selectAwsSigningAuthHeader: { xpath: '//*[@id="dijit_MenuItem_47_text"]' },
    selectAwsSigningQueryString: { xpath: '//*[@id="dijit_MenuItem_48_text"]' },
    selectHttpBasic: { xpath: '//*[@id="dijit_MenuItem_49_text"]' },
    selectInvokePolicy: { xpath: '' },
    selectOAuth: { xpath: '' },
    selectOAuthExternal: { xpath: '' },
    selectPassThrough: { xpath: '' },
    selectTwoWaySsl: { xpath: '' },
    save: { xpath: '//*[@id="dijit_form_Button_94_label"]' },
    apply: { xpath: '//*[@id="dijit_form_Button_96_label"]' },
    cancel: { xpath: '//*[@id="dijit_form_Button_97_label"]' },
    //Pop-ups
    selectApiKeyOk: { xpath: '//*[@id="dijit_form_Button_148_label"]' },
    selectApiKeyCancel: { xpath: '//*[@id="dijit_form_Button_132_label"]' }
  },
  importApiCollectionLocators: {
    selectFile: { xpath: '/html/body/div[28]/div[2]/div[1]/fieldset[1]/div[2]/div/div/span[1]/span/input[1]' },
    password: { xpath: '/html/body/div[28]/div[2]/div[1]/fieldset[1]/div[4]/div/div/div[2]/input' },
    toggleOrganization: { xpath: '/html/body/div[28]/div[2]/div[1]/fieldset[1]/div[6]/div/table/tbody/tr/td[1]' },
    import: { xpath: '/html/body/div[28]/div[2]/div[2]/span[1]/span/span/span[3]' },
    cancel: { xpath: '/html/body/div[28]/div[2]/div[2]/span[2]/span/span/span[3]' }
  },
  //BackEnd
  backendApiLocators: {
    backendApi: { xpath: '//*[@id="subnav-api_registration"]' },
    newApi: { xpath: '//*[@id="dijit_layout_ContentPane_28"]/div[1]/span[2]' },
    new: { xpath: '//*[@id="dijit_MenuItem_11_text"]' },
    importApiFromTopology: { xpath: '//*[@id="dijit_MenuItem_12_text"]' },
    importSwaggerApi: { xpath: '//*[@id="dijit_MenuItem_13_text"]' },
    importRamlApi: { xpath: '//*[@id="dijit_MenuItem_14_text"]' },
    importWadlApi: { xpath: '//*[@id="dijit_MenuItem_15_text"]' },
    importWsdlApi: { xpath: '//*[@id="dijit_MenuItem_16_text"]' }
  },
  importSwaggerApiLocators: {
    toggleSource: { xpath: '//*[@id="uniqName_0_105-name"]/tbody/tr/td[1]' },
    sourceFile: { xpath: '/html/body/div[34]/div/div/tr[1]' },
    sourceUrl: { xpath: '//*[@id="dijit_MenuItem_34"]' },
    file: { xpath: '/html/body/div[28]/div[2]/div[1]/fieldset[1]/div[2]/div/div/span[1]/span/input[1]' },
    url: { xpath: '//*[@id="uniqName_0_107-name"]' },
    apiName: { xpath: '//*[@id="uniqName_0_109-name"]' },
    toggleOrganization: { xpath: '//*[@id="uniqName_0_110-name"]/tbody/tr/td[1]' },
    selectOrganization: { xpath: '//*[@id="dijit_MenuItem_35_text"]/span' },
    import: { xpath: '//*[@id="dijit_form_Button_116_label"]' },
    cancel: { xpath: '/html/body/div[25]/div[2]/div[2]/span[2]/span/span/span[3]' },
    ok: { xpath: '//*[@id="uniqName_8_3"]/div[2]/div/span/span' }
  },
  clickBackendApi() {
    I.click(this.backendApiLocators.backendApi);
  },
  clickFrontendApi() {
    I.click(this.frontendApiLocators.frontendApi);
  },
  clickNewFrontendApi(){
    I.wait(2);
    I.click(this.frontendApiLocators.newApi);
  },
  clickNewApiFromBackendApi(){
    I.wait(2);
    I.click(this.frontendApiLocators.newApiFromBackendApi);
  },
  newApiFromBackendApi() {
    I.click(this.frontendApiLocators.frontendApi);
    I.click(this.frontendApiLocators.newApi);
    I.click(this.frontendApiLocators.newApiFromBackendApi);
    I.click(this.newApiFromBackendApiLocators.toggleSelectExistingBackendApi);
    I.click(this.newApiFromBackendApiLocators.selectExistingBackendApi);
    I.wait(2);
    I.click(this.newApiFromBackendApiLocators.ok);
    I.wait(2);
    I.click(this.editApiLocators.toggleInboundSecurity);
    I.click(this.editApiLocators.selectApiKey);
    I.click(this.editApiLocators.selectApiKeyOk);
    I.wait(2);
    I.click(this.editApiLocators.save);
  },
  importBackedSwaggerApi() {
    I.click(this.backendApiLocators.backendApi);
    I.click(this.backendApiLocators.newApi);
    I.click(this.backendApiLocators.importSwaggerApi);
    I.click(this.importSwaggerApiLocators.toggleSource);
    I.click(this.importSwaggerApiLocators.sourceUrl);
    I.wait(2);
    I.fillField(this.importSwaggerApiLocators.url, 'http://petstore.swagger.io/v2/swagger.json');
    I.fillField(this.importSwaggerApiLocators.apiName, 'Pet Store');
    I.click(this.importSwaggerApiLocators.toggleOrganization);
    I.click(this.importSwaggerApiLocators.selectOrganization);
    I.click(this.importSwaggerApiLocators.import);
    I.wait(2);
    I.click(this.importSwaggerApiLocators.ok);
    I.wait(2);
  }
}
