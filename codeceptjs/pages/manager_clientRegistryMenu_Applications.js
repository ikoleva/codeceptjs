
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  createApplicationLocators: {
    newApplication: { xpath: '//*[@id="dijit_form_Button_30_label"]' },
  },
  firstApplicationLocators: {
    applicationName: { xpath: '//*[@id="uniqName_0_92-name"]' },
    toggleOrganization: { xpath: '//*[@id="uniqName_0_93-name"]' },
    selectOrganization: { xpath: '//*[@id="dijit_MenuItem_34_text"]/span' },
    toggleAddApi: { xpath: '//*[@id="dijit_form_DropDownButton_14_label"]' },
    selectApiToAdd: { xpath: '//*[@id="dijit_MenuItem_47_text"]' },
    create: { xpath: '//*[@id="dijit_form_Button_34_label"]' },
    //Sharing
    sharing: { xpath: '//*[@id="dijit_layout_TabContainer_1_tablist_dijit_layout_ContentPane_44"]' },
    toggleAddUser: { xpath: '//*[@id="dijit_form_DropDownButton_16"]' },
    selectAppDeveloper: { xpath: '//*[@id="dijit_MenuItem_56_text"]' },
    selectAppDeveloperName: { xpath: '//*[@id="common_ui_grid_SimpleGrid_11"]/table/tbody/tr/td[2]/label' },
    togglePermissionsAppDeveloper: { xpath: '//*[@id="dijit_form_Select_10"]' },
    selectAppDeveloperView: { xpath: '//*[@id="dijit_MenuItem_60_text"]' },
    selectAppDeveloperManage: { xpath: '//*[@id="dijit_MenuItem_59_text"]' },
    back: { xpath: '//*[@id="dijit_form_Button_34_label"]' }
  },
  secondApplicationLocators: {
    applicationName: { xpath: '//*[@id="uniqName_0_129-name"]' },
    toggleOrganization: { xpath: '//*[@id="uniqName_0_130-name"]' },
    selectOrganization: { xpath: '//*[@id="dijit_MenuItem_62_text"]/span' },
    toggleAddApi: { xpath: '//*[@id="uniqName_0_138"]/span[1]/span' },
    selectApiToAdd: { xpath: '//*[@id="dijit_MenuItem_74_text"]' },
    create: { xpath: '//*[@id="dijit_form_Button_34_label"] ' },
    //Sharing
    sharing: { xpath: '//*[@id="dijit_layout_TabContainer_3_tablist_dijit_layout_ContentPane_49"]' },
    toggleAddUser: { xpath: '//*[@id="dijit_form_DropDownButton_19_label"]' },
    selectAppDeveloper: { xpath: '//*[@id="dijit_MenuItem_84_text"]' },
    selectAppDeveloperName: { xpath: '//*[@id="common_ui_grid_SimpleGrid_17"]/table/tbody/tr/td[2]/label' },
    togglePermissionsAppDeveloper: { xpath: '//*[@id="dijit_form_Select_13"]' },
    selectAppDeveloperView: { xpath: '//*[@id="dijit_MenuItem_88_text"]' },
    selectAppDeveloperManage: { xpath: '//*[@id="dijit_MenuItem_87_text"]' },
    back: { xpath: '//*[@id="dijit_form_Button_34_label"]' }
  },
  thirdApplication: {
    applicationName: { xpath: '//*[@id="uniqName_0_166-name"]' },
    toggleOrganization: { xpath: '//*[@id="uniqName_0_167-name"]' },
    selectOrganization: { xpath: '//*[@id="dijit_MenuItem_91_text"]/span' },  //Select organization "Community"
    create: { xpath: '//*[@id="dijit_form_Button_34"]' }
  },
  createFirstApplication() {
    //Application developer can edit the application
    I.wait(2);
    I.click(this.createApplicationLocators.newApplication);
    I.wait(2);
    I.fillField(this.firstApplicationLocators.applicationName, 'FirstApplication');
    I.click(this.firstApplicationLocators.toggleOrganization);
    I.click(this.firstApplicationLocators.selectOrganization);
    I.scrollTo(this.firstApplicationLocators.toggleAddApi);
    I.click(this.firstApplicationLocators.toggleAddApi);
    I.click(this.firstApplicationLocators.selectApiToAdd);
    I.scrollTo(this.firstApplicationLocators.create);
    I.click(this.firstApplicationLocators.create);
    I.wait(2);
    I.click(this.firstApplicationLocators.sharing);
    I.click(this.firstApplicationLocators.toggleAddUser);
    I.click(this.firstApplicationLocators.selectAppDeveloper);
    I.wait(2);
    I.click(this.firstApplicationLocators.selectAppDeveloperName);
    I.click(this.firstApplicationLocators.togglePermissionsAppDeveloper);
    I.click(this.firstApplicationLocators.selectAppDeveloperManage);
    I.click(this.firstApplicationLocators.back);
  },
  createSecondApplication() {
    //Application developer can view the application
    I.wait(2);
    I.click(this.createApplicationLocators.newApplication);
    I.wait(2);
    I.fillField(this.secondApplicationLocators.applicationName, 'SecondApplication');
    I.click(this.secondApplicationLocators.toggleOrganization);
    I.click(this.secondApplicationLocators.selectOrganization);
    I.scrollTo(this.secondApplicationLocators.toggleAddApi);
    I.click(this.secondApplicationLocators.toggleAddApi);
    I.click(this.secondApplicationLocators.selectApiToAdd);
    I.scrollTo(this.secondApplicationLocators.create);
    I.click(this.secondApplicationLocators.create);
    I.wait(2);
    I.click(this.secondApplicationLocators.sharing);
    I.click(this.secondApplicationLocators.toggleAddUser);
    I.click(this.secondApplicationLocators.selectAppDeveloper);
    I.wait(2);
    I.click(this.secondApplicationLocators.selectAppDeveloperName);
    I.click(this.secondApplicationLocators.togglePermissionsAppDeveloper);
    I.click(this.secondApplicationLocators.selectAppDeveloperView);
    I.click(this.secondApplicationLocators.back);
  },
  createThirdApplication() {
    //Application developer can view the application
    I.wait(2);
    I.click(this.createApplicationLocators.newApplication);
    I.wait(2);
    I.fillField(this.thirdApplication.applicationName, 'ThirdApplication');
    I.click(this.thirdApplication.toggleOrganization);
    I.click(this.thirdApplication.selectOrganization);
    I.click(this.thirdApplication.create);
  }
}
