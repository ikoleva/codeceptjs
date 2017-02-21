
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  locators: {
    system: { xpath: '//*[@id="menu"]/li[1]/a' },
    users: { xpath: '//*[@id="menu"]/li[2]/a' },
    menus: { xpath: '//*[@id="menu"]/li[3]/a' },
    content: { xpath: '//*[@id="menu"]/li[4]/a' },
    components: { xpath: '//*[@id="menu"]/li[5]/a' },
    extensions: { xpath: '//*[@id="menu"]/li[6]/a' },
    help: { xpath: '//*[@id="menu"]/li[7]/a' }
  },
  clickSystem(){
    I.click(this.locators.system);
  },
  clickUsers(){
    I.click(this.locators.users);
  },
  clickMenus(){
    I.click(this.locators.menus);
  },
  clickContent(){
    I.click(this.locators.content);
  },
  clickComponents(){
    I.click(this.locators.components);
  },
  clickExtensions(){
    I.click(this.locators.extensions);
  },
  clickHelp(){
    I.click(this.locators.help);
  }
}
