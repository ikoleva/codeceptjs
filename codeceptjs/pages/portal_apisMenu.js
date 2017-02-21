
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  locators: {
    apisOrder: { xpath: '/html/body/div/div[1]/div/div/div[2]/div/div/div/div[2]/button' },
    ascending: { xpath: '/html/body/div/div[1]/div/div/div[2]/div/div/div/div[2]/ul/li[1]/a' },
    descending: { xpath: '/html/body/div/div[1]/div/div/div[2]/div/div/div/div[2]/ul/li[2]/a' },
    toggleTags: { xpath: '/html/body/div/div[1]/div/div/div[2]/div/div/div/div[3]/button' },
    clearTags: { xpath: '/html/body/div/div[1]/div/div/div[2]/div/div/div/div[3]/ul/li[1]/a' }
  },
  firstApiLocators: {
    apiLogo: { xpath: '/html/body/div/div[1]/div/div/div[2]/div/div/ul/li[1]/div[1]' },
    test: { xpath: '' },
    viewMetrics: { xpath: '' }
  },
  exploreFirstApiLocators: {
    apiLogo: { xpath: '/html/body/div[1]/div/div/div[1]/div[6]/div[2]/div[1]/div' },
    downloadDefinition: { xpath: '/html/body/div[1]/div/div/div[1]/div[6]/div[2]/div[2]/div[6]/div/a' },
    //Test
    test: { xpath: '/html/body/div[1]/div/div/div[3]/ul/li[1]/a' },
    useSameCredentials: { xpath: '/html/body/div[1]/div/div/div[3]/div/div[1]/div[2]/label/input' },
    toggleOAuthClient: { xpath: '/html/body/div[1]/div/div/div[3]/div/div[1]/form/fieldset/div/div[1]/div/a/span' },
    requestToken: { xpath: '/html/body/div[1]/div/div/div[3]/div/div[1]/form/fieldset/div/div[2]/button' },
    listOperations: { xpath: '/html/body/div[1]/div/div/div[3]/div/div[1]/div[3]/div[2]/ul/li/div/ul/li[1]/a[2]' },
    expandOperations: { xpath: '/html/body/div[1]/div/div/div[3]/div/div[1]/div[3]/div[2]/ul/li/div/ul/li[2]/a' },
    tryItOut: { xpath: '/html/body/div[1]/div/div/div[3]/div/div[1]/div[3]/div[2]/ul/li/ul/li[1]/ul/li/div[2]/form/div[6]/input' },
    //Usage
    usage: { xpath: '/html/body/div[1]/div/div/div[3]/ul/li[2]/a' },
    messages: { xpath: '/html/body/div[1]/div[1]/div/div/table[1]/thead/tr/th[1]/div[1]' },
    success: { xpath: '/html/body/div[1]/div[1]/div/div/table[1]/thead/tr/th[2]/div[1]' },
    failures: { xpath: '/html/body/div[1]/div[1]/div/div/table[1]/thead/tr/th[3]/div[1]' },
    exceptions: { xpath: '/html/body/div[1]/div[1]/div/div/table[1]/thead/tr/th[4]/div[1]' },
    processingTime: { xpath: '/html/body/div[1]/div[1]/div/div/table[1]/thead/tr/th[5]/div[1]' },
    toggleCalendar: { xpath: '/html/body/div[1]/div/div/div[3]/div/div[2]/div[2]/div/span' },
    today: { xpath: '/html/body/div[2]/div[3]/ul/li[1]' },
    yesterday: { xpath: '/html/body/div[2]/div[3]/ul/li[2]' },
    last7days: { xpath: '/html/body/div[2]/div[3]/ul/li[3]' },
    last30days: { xpath: '/html/body/div[2]/div[3]/ul/li[4]' },
    thisMonth: { xpath: '/html/body/div[2]/div[3]/ul/li[5]' },
    lastMonth: { xpath: '/html/body/div[2]/div[3]/ul/li[6]' },
    custom: { xpath: '/html/body/div[2]/div[3]/ul/li[7]' },
    //The locators for custom dates will defined if needed
    ok: { xpath: '/html/body/div[2]/div[3]/div/button[1]' },
    cancel: { xpath: '/html/body/div[2]/div[3]/div/button[2]' }
  },
  orderAscending() {
    I.click(this.locators.apisOrder);
    I.seeInCurrentUrl('/api-catalog');
    I.click(this.locators.ascending);
  },
  orderDescending() {
    I.click(this.locators.apisOrder);
    I.click(this.locators.descending);
  },
  exploreFirstApi() {
    I.click(this.firstApiLocators.apiLogo);
  }
}