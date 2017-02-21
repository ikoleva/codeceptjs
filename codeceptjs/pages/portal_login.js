
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  loginLocators: {
    signIn: { xpath: '//*[@id="t3-mainnav"]/div/nav[2]/div/ul/li[2]/a' },
    loginName: { xpath: '//*[@id="username"]' },
    password: { xpath: '//*[@id="password"]' },
    logIn: { xpath: '//*[@id="btn-login"]' },
    signUp: { xpaht: '/html/body/div/div[1]/div/div/form/fieldset/div[1]/div/span/a' },
    forgotPassword: { xpath: '/html/body/div/div[1]/div/div/form/fieldset/div[2]/div/span/a' }
  },
  signupLocators: {
    signUp: { xpath: '/html/body/div/div[1]/div/div/div[3]/div/div[2]/div/div[2]' },
    fullName: { xpath: '/html/body/div[1]/div[1]/div/div/form/fieldset/div[1]/div/input' },
    email: { xpath: '/html/body/div[1]/div[1]/div/div/form/fieldset/div[2]/div/input' },
    password: { xpath: '/html/body/div[1]/div[1]/div/div/form/fieldset/div[3]/div/div[1]/input[1]' },
    confirmPassword: { xpath: '/html/body/div[1]/div[1]/div/div/form/fieldset/div[4]/div/input' },
    organizationCode: { xpath: '/html/body/div[1]/div[1]/div/div/form/fieldset/div[5]/div/div/input' }, //Optional
    toggleAgreeToTermsAndConditions: { xpath: '/html/body/div[1]/div[1]/div/div/form/fieldset/div[6]/div[2]/label/input' },
    signUpRegistration: { xpath: '//*[@id="btn-register"]' }
  },
  clickSignUp() {
    I.click(this.signupLocators.signUp);
  },
  //Email verification is needed
  signUp() {
    I.fillField(this.signupLocators.fullName, 'SignUpOrgAdmin');
    I.fillField(this.signupLocators.email, 'signup-admin@mail.com');
    I.fillField(this.signupLocators.password, 'SECRET123');
    I.fillField(this.signupLocators.confirmPassword, 'SECRET123');
    I.click(this.signupLocators.toggleAgreeToTermsAndConditions);
    I.click(this.signupLocators.signUpRegistration);
  },
  loginOrgAdministrator() {
    I.wait(2);
    I.click(this.loginLocators.signIn);
    I.fillField(this.loginLocators.loginName, 'OrgAdministrator');
    I.fillField(this.loginLocators.password, 'SECRET123');
    I.click(this.loginLocators.logIn);
    I.wait(2);
  },
  loginOrgAdministratorPwdChanged() {
    I.wait(2);
    I.click(this.loginLocators.signIn);
    I.fillField(this.loginLocators.loginName, 'OrgAdministrator');
    I.fillField(this.loginLocators.password, 'SECRET123NEW');
    I.click(this.loginLocators.logIn);
    I.wait(2);
  },
  loginAppDeveloper() {
    I.wait(2);
    I.click(this.loginLocators.signIn);
    I.fillField(this.loginLocators.loginName, 'AppDeveloper');
    I.fillField(this.loginLocators.password, 'SECRET123');
    I.click(this.loginLocators.logIn);
    I.wait(2);
  },
  loginAppDeveloperPwdChanged() {
    I.wait(2);
    I.click(this.loginLocators.signIn);
    I.fillField(this.loginLocators.loginName, 'AppDeveloper');
    I.fillField(this.loginLocators.password, 'SECRET123NEW');
    I.click(this.loginLocators.logIn);
    I.wait(2);
  }
}
