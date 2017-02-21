
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  OrgAdministratorMenuLocators: {
    users: { xpath: '//*[@id="t3-mainnav"]/div/nav[2]/div/ul/li[2]/a' },
    apis: { xpath: '//*[@id="t3-mainnav"]/div/nav[2]/div/ul/li[3]/a' },
    applications: { xpath: '//*[@id="t3-mainnav"]/div/nav[2]/div/ul/li[4]/a' },
    documentation: { xpath: '//*[@id="t3-mainnav"]/div/nav[2]/div/ul/li[5]/a' },
    helpCenter: { xpath: '//*[@id="t3-mainnav"]/div/nav[2]/div/ul/li[6]/a' },
    monitoring: { xpath: '//*[@id="t3-mainnav"]/div/nav[2]/div/ul/li[7]/a' },
    pricing: { xpath: '/html/body/div[1]/header/div/nav[2]/div/ul/li[8]/a' },
    blog: { xpath: '//*[@id="t3-mainnav"]/div/nav[2]/div/ul/li[9]/a' },
    profileMenuOrgAdministrator: { xpath: '//*[@id="t3-mainnav"]/div/nav[2]/div/ul/li[10]/a' }
  },
  AppDeveloperMenuLocators: {
    apis: { xpath: '//*[@id="t3-mainnav"]/div/nav[2]/div/ul/li[2]/a' },
    applications: { xpath: '//*[@id="t3-mainnav"]/div/nav[2]/div/ul/li[3]/a' },
    documentation: { xpath: '//*[@id="t3-mainnav"]/div/nav[2]/div/ul/li[4]/a' },
    helpCenter: { xpath: '//*[@id="t3-mainnav"]/div/nav[2]/div/ul/li[5]/a' },
    monitoring: { xpath: '//*[@id="t3-mainnav"]/div/nav[2]/div/ul/li[6]/a' },
    pricing: { xpath: '//*[@id="t3-mainnav"]/div/nav[2]/div/ul/li[7]/a' },
    blog: { xpath: '//*[@id="t3-mainnav"]/div/nav[2]/div/ul/li[8]/a' },
    profileMenuAppDeveloper: { xpath: '//*[@id="t3-mainnav"]/div/nav[2]/div/ul/li[9]' }
  },
  seeAllMenusOrgAdministrator() {
    //Users, Apis, Applications, Documentation, Help Center, Monitoring, Pricing, Blog, Profile
    I.seeElement(this.OrgAdministratorMenuLocators.users);
    I.seeElement(this.OrgAdministratorMenuLocators.apis);
    I.seeElement(this.OrgAdministratorMenuLocators.applications);
    I.seeElement(this.OrgAdministratorMenuLocators.documentation);
    I.seeElement(this.OrgAdministratorMenuLocators.helpCenter);
    I.seeElement(this.OrgAdministratorMenuLocators.monitoring);
    I.seeElement(this.OrgAdministratorMenuLocators.pricing);
    I.seeElement(this.OrgAdministratorMenuLocators.blog);
    I.seeElement(this.OrgAdministratorMenuLocators.profileMenu);
  },
  seeAllMenusAppDeveloper() {
    //Apis, Applications, Documentation, Help Center, Monitoring, Pricing, Blog, Profile
    I.seeElement(this.AppDeveloperMenuLocators.apis);
    I.seeElement(this.AppDeveloperMenuLocators.applications);
    I.seeElement(this.AppDeveloperMenuLocators.documentation);
    I.seeElement(this.AppDeveloperMenuLocators.helpCenter);
    I.seeElement(this.AppDeveloperMenuLocators.monitoring);
    I.seeElement(this.AppDeveloperMenuLocators.pricing);
    I.seeElement(this.AppDeveloperMenuLocators.blog);
    I.seeElement(this.AppDeveloperMenuLocators.profileMenu);
  },
  //Organization Administrator
  clickUsersOrgAdministrator() {
    I.click(this.OrgAdministratorMenuLocators.users);
    I.seeInCurrentUrl('/users');
    I.see('Users');
  },
  clickApisOrgAdministrator() {
    I.click(this.OrgAdministratorMenuLocators.apis);
    I.seeInCurrentUrl('/api-catalog');
    I.see('APIs Catalog');
  },
  clickApplicationsOrgAdministrator() {
    I.click(this.OrgAdministratorMenuLocators.applications);
    I.seeInCurrentUrl('/apps');
    I.see('Applications');
  },
  clickDocumentationOrgAdministrator() {
    I.click(this.OrgAdministratorMenuLocators.documentation);
    I.seeInCurrentUrl('/documentation');
    I.see('Documentation');
  },
  clickHelpCenterOrgAdministrator() {
    I.click(this.OrgAdministratorMenuLocators.helpCenter);
    I.seeInCurrentUrl('/help-center');
    I.see('Help Center');
  },
  clickMonitoringOrgAdministrator() {
    I.click(this.OrgAdministratorMenuLocators.monitoring);
    I.seeInCurrentUrl('/monitoring');
    I.see('Monitoring');
  },
  clickPricingOrgAdministrator() {
    I.click(this.OrgAdministratorMenuLocators.pricing);
    I.seeInCurrentUrl('/pricing');
    I.see('Pricing Plans');
  },
  clickBlogOrgAdministrator() {
    I.click(this.OrgAdministratorMenuLocators.blog);
    I.seeInCurrentUrl('/blog');
    I.see('Easy Blog');
  },
  clickProfileMenuOrgAdministrator() {
    I.click(this.OrgAdministratorMenuLocators.profileMenuOrgAdministrator);
    I.seeInCurrentUrl('/');
  },
  //Application Developer
  clickApisAppDeveloper() {
    I.click(this.AppDeveloperMenuLocators.apis);
    I.seeInCurrentUrl('/api-catalog');
    I.see('APIs Catalog');
  },
  clickApplicationsAppDeveloper() {
    I.click(this.AppDeveloperMenuLocators.applications);
    I.seeInCurrentUrl('/apps');
    I.see('Applications');
  },
  clickDocumentationAppDeveloper() {
    I.click(this.AppDeveloperMenuLocators.documentation);
    I.seeInCurrentUrl('/documentation');
    I.see('Documentation');
  },
  clickHelpCenterAppDeveloper() {
    I.click(this.AppDeveloperMenuLocators.helpCenter);
    I.seeInCurrentUrl('/help-center');
    I.see('Help Center');
  },
  clickMonitoringAppDeveloper() {
    I.click(this.AppDeveloperMenuLocators.monitoring);
    I.seeInCurrentUrl('/monitoring');
    I.see('Monitoring');
  },
  clickPricingAppDeveloper() {
    I.click(this.AppDeveloperMenuLocators.pricing);
    I.seeInCurrentUrl('/pricing');
    I.see('Pricing Plans');
  },
  clickBlogAppDeveloper() {
    I.click(this.AppDeveloperMenuLocators.blog);
    I.seeInCurrentUrl('/blog');
    I.see('Easy Blog');
  },
  clickProfileMenuAppDeveloper() {
    I.click(this.AppDeveloperMenuLocators.profileMenuAppDeveloper);
    I.seeInCurrentUrl('/');
  }

}