'use strict';

class GoBack extends Helper {
  goBack(){
    let client = this.helpers['WebDriverIO'].browser;
    return client.back();
  }
}
module.exports = GoBack;
