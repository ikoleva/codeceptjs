
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js', '../goback_helper.js')();
  },
  locators: {
    technicalFAQs: {xpath: '/html/body/div/div[1]/div/div/table/tbody/tr[1]/td[2]/p[1]/a'},
    documentation: {xpath: '/html/body/div/div[1]/div/div/table/tbody/tr[2]/td[2]/p[1]/a'},
    discussionForums: {xpath: '/html/body/div/div[1]/div/div/table/tbody/tr[3]/td[2]/p[1]/a'},
    contactUs: {xpath: '/html/body/div/div[1]/div/div/table/tbody/tr[4]/td[2]/p[1]/a'}
  },
  clickTechnicalFAQs(){
    I.click(this.locators.technicalFAQs);
    I.seeInCurrentUrl('help-center/help/faq');
    I.see('Technical FAQs');
    // I.goBack();
  },
  clickDocumentation(){
    I.click(this.locators.documentation);
    I.seeInCurrentUrl('/documentation'),
    I.see('Documentation');
    // I.goBack();
  },
  clickDiscussionForums(){
    I.click(this.locators.discussionForums);
    I.seeInCurrentUrl('/help-center/discussions/index');
    I.see('Featured Topics');
    // I.goBack();
  },
  clickContactUs(){
    I.click(this.locators.contactUs);
    I.seeInCurrentUrl('/help-center/help/contact');
    I.see('Contact Us');
    // I.goBack();
  }
}
