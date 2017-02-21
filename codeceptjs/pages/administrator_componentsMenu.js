
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  componentsLocators: {
    apiPortal: { xpath: '//*[@id="menu"]/li[5]/ul/li[1]/a' },
    banners: { xpath: '//*[@id="menu"]/li[5]/ul/li[2]/a' },
    contacts: { xpath: '//*[@id="menu"]/li[5]/ul/li[3]/a' },
    easyBlog: { xpath: '//*[@id="menu"]/li[5]/ul/li[4]/a' },
    easyDiscuss: { xpath: '//*[@id="menu"]/li[5]/ul/li[5]/a' },
    joomlaUpdate: { xpath: '//*[@id="menu"]/li[5]/ul/li[6]/a' },
    messaging: { xpath: '//*[@id="menu"]/li[5]/ul/li[7]/a' },
    newsFeeds: { xpath: '//*[@id="menu"]/li[5]/ul/li[8]/a' },
    postInstallationMessages: { xpath: '//*[@id="menu"]/li[5]/ul/li[9]/a' },
    redirect: { xpath: '//*[@id="menu"]/li[5]/ul/li[10]/a' },
    search: { xpath: '//*[@id="menu"]/li[5]/ul/li[11]/a' },
    smartSearch: { xpath: '//*[@id="menu"]/li[5]/ul/li[12]/a' },
    tags: { xpath: '//*[@id="menu"]/li[5]/ul/li[13]/a' }
  },
  apiPortalLocators: {
    host: {xpath: '//*[@id="jform_host"]'},
    port: {xpath: '//*[@id="jform_port"]'},
    verifySslConnectionYes: {xpath: '//*[@id="jform_verifyCrt"]/label[1]'},
    verifySslConnectionNo: {xpath: '//*[@id="jform_verifyCrt"]/label[2]'},
    verifySslHostNameYes: {xpath: '//*[@id="jform_verifySslHost"]/label[1]'},
    verifySslHostNameNo: {xpath: '//*[@id="jform_verifySslHost"]/label[2]'},
    authorizationEndpointPath: {xpath: '//*[@id="jform_oauthPath"]'},
    authorizationPort: {xpath: '//*[@id="jform_oauthPort"]'},
    save: {xpath: '//*[@id="toolbar-save"]/button'}
  },
  clickApiPortal() {
    I.click(this.componentsLocators.apiPortal);
  },
  clickBanners() {
    I.click(this.componentsLocators.banners);
  },
  clickContacts() {
    I.click(this.componentsLocators.contacts);
  },
  clickEasyBlog() {
    I.click(this.componentsLocators.easyBlog);
  },
  clickEasyDiscuss() {
    I.click(this.componentsLocators.easyDiscuss);
  },
  clickJoomlaUpdate() {
    I.click(this.componentsLocators.joomlaUpdate);
  },
  clickMessaging() {
    I.click(this.componentsLocators.messaging);
  },
  clickNewsFeed() {
    I.click(this.componentsLocators.newsFeeds);
  },
  clickPostInstallationMessages() {
    I.click(this.componentsLocators.postInstallationMessages);
  },
  clickRedirect() {
    I.click(this.componentsLocators.redirect);
  },
  clickSearch() {
    I.click(this.componentsLocators.search);
  },
  clickSmartSearch() {
    I.click(this.componentsLocators.smartSearch);
  },
  clickTags() {
    I.click(this.componentsLocators.tags);  
  },
  configureApiManagerSettings(){
    I.fillField(this.apiPortalLocators.host, '10.134.56.66');
    I.click(this.apiPortalLocators.save);
  }
}
