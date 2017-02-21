
'use strict';

class WaitForVisible extends Helper {

  waitForVisible(selector ,ms){
    
    let client = this.helpers['WebDriverIO'].browser;
    return client.waitForVisible(selector ,ms);
  }
}

module.exports = WaitForVisible;
