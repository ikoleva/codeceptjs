
'use strict';

class ResizeWindow extends Helper {

  resizeWindow(dimension){
    let client = this.helpers['WebDriverIO'].browser;
    return client.windowHandleSize({width: 1280, height: 768});
  }
}

module.exports = ResizeWindow;
