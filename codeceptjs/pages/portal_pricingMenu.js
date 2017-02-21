
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  locators: {
    bronzeGetStartedNow: {xpath: ''},
    silverGetStartedNow: {xpath: ''},
    goldGetStartedNow: {xpath: ''}
  },
  seePricingPlans(){
    I.seeElement(this.locators.bronzeGetStartedNow);
    I.seeElement(this.locators.silverGetStartedNow);
    I.seeElement(this.locators.goldGetStartedNow);
  },
  clickBronzePricingPlan(){
    I.click(this.locators.bronzeGetStartedNow);
    //I should be redirected, but it not the correct URL at the moment
  },
  clickSilverPricingPlan(){
    I.click(this.locators.silverGetStartedNow);
    //I should be redirected, but it not the correct URL at the moment
  },
  clickGoldPricingPlan(){
    I.click(this.locators.goldGetStartedNow);
    //I should be redirected, but it not the correct URL at the moment
  }
}
