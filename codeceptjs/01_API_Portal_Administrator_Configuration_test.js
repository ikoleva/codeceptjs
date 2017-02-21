
Feature('01 API_Portal_Administration_Configuration_test.js');

Scenario('Initial Configuration', (I, administrator_login, administrator_myProfile, administrator_menus, administrator_componentsMenu) => {
    I.amOnPage('https://10.134.56.115:443/administrator');
    // administrator_login.logInBeforePwdChange();
    // administrator_myProfile.changePassword();
    // I.see('Item successfully saved.');
    administrator_login.LogInAfterPwdChange();

    //Configure API Manager Host
    administrator_menus.clickComponents();
    administrator_componentsMenu.clickApiPortal();
    administrator_componentsMenu.configureApiManagerSettings();
});