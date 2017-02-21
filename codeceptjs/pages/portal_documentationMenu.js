
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  locators: {
    //GENERAL
    exploreApis: { xpath: '/html/body/div/div[1]/div/div/table[1]/tbody/tr[1]/td[1]/a' },
    styleGuidelines: { xpath: '/html/body/div/div[1]/div/div/table[1]/tbody/tr[2]/td[1]/a' },
    //WEB
    gettingStartingGuideWeb: { xpath: '/html/body/div/div[1]/div/div/table[2]/tbody/tr[1]/td[1]/a' },
    developerGuide: { xpath: '/html/body/div/div[1]/div/div/table[2]/tbody/tr[2]/td[1]/a' },
    sdkForJavaScriptReference: { xpath: '/html/body/div/div[1]/div/div/table[2]/tbody/tr[3]/td[1]/a' },
    //ANDROID
    gettingStartingGuideAndroid: { xpath: '/html/body/div/div[1]/div/div/table[3]/tbody/tr/td[1]/a' },
    //IOS
    gettingStartingGuideIOs: { xpath: '/html/body/div/div[1]/div/div/table[4]/tbody/tr/td[1]/a' }
  },
  documentationURLs: {
    //GENERAL
    exploreApis: { url: 'https://10.134.56.123/documentation#Replace_with_a_link_to_your_document' },
    styleGuidelines: { url: 'https://10.134.56.123/documentation#Replace_with_a_link_to_your_document' },
    //WEB
    gettingStartingGuideWeb: { url: 'https://10.134.56.123/documentation#Replace_with_a_link_to_your_document' },
    developerGuide: { url: 'https://10.134.56.123/documentation#Replace_with_a_link_to_your_document' },
    sdkForJavaScriptReference: { url: 'https://10.134.56.123/documentation#Replace_with_a_link_to_your_document' },
    //ANDROID
    gettingStartingGuideAndroid: { url: 'https://10.134.56.123/documentation#Replace_with_a_link_to_your_document' },
    //IOS
    gettingStartingGuideIOs: { url: 'https://10.134.56.123/documentation#Replace_with_a_link_to_your_document' }
  },
  documentationHTMLs: {
    //GENERAL
    exploreApis: { url: 'https://10.134.56.123/documentation#Replace_with_a_link_to_your_document' },
    styleGuidelines: { url: 'https://10.134.56.123/documentation#Replace_with_a_link_to_your_document' },
    //WEB
    gettingStartingGuideWeb: { url: 'https://10.134.56.123/documentation#Replace_with_a_link_to_your_document' },
    developerGuide: { url: 'https://10.134.56.123/documentation#Replace_with_a_link_to_your_document' },
    sdkForJavaScriptReference: { url: 'https://10.134.56.123/documentation#Replace_with_a_link_to_your_document' },
    //ANDROID
    gettingStartingGuideAndroid: { url: 'https://10.134.56.123/documentation#Replace_with_a_link_to_your_document' },
    //IOS
    gettingStartingGuideIOs: { url: 'https://10.134.56.123/documentation#Replace_with_a_link_to_your_document' }
  },
  documentationPDFs: {
    //GENERAL
    exploreApis: { url: 'https://10.134.56.123/documentation#Replace_with_a_link_to_your_document' },
    styleGuidelines: { url: 'https://10.134.56.123/documentation#Replace_with_a_link_to_your_document' },
    //WEB
    gettingStartingGuideWeb: { url: 'https://10.134.56.123/documentation#Replace_with_a_link_to_your_document' },
    developerGuide: { url: 'https://10.134.56.123/documentation#Replace_with_a_link_to_your_document' },
    sdkForJavaScriptReference: { url: 'https://10.134.56.123/documentation#Replace_with_a_link_to_your_document' },
    //ANDROID
    gettingStartingGuideAndroid: { url: 'https://10.134.56.123/documentation#Replace_with_a_link_to_your_document' },
    //IOS
    gettingStartingGuideIOs: { url: 'https://10.134.56.123/documentation#Replace_with_a_link_to_your_document' }
  },
  seeDocumentation() {
    I.seeElement(this.locators.exploreApis);
    I.seeElement(this.locators.styleGuidelines);
    I.seeElement(this.locators.gettingStartingGuideWeb);
    I.seeElement(this.locators.developerGuide);
    I.seeElement(this.locators.sdkForJavaScriptReference);
    I.seeElement(this.locators.gettingStartingGuideAndroid);
    I.seeElement(this.locators.gettingStartingGuideIOs);
  }
}