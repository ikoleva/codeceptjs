
Feature('03 API_Portal_Smoke_RDAPI_4685_test.js');

// Before((I, manager_login, manager_menus, manager_settingsMenu, manager_clientRegistryMenu, portal_login, portal_menus, portal_usersMenu) => {
//     I.amOnPage('https://10.134.56.66:8075');
//     manager_login.loginMasterAdmin();
//     manager_menus.clickSettings();
//     manager_settingsMenu.clickApiManagerSettings();

//     //Reset General Settings
//     manager_settingsMenu.toggleUserRegistrationOn();
//     manager_settingsMenu.toggleAutoApproveUserRegistrationOn();
//     manager_settingsMenu.toggleAutoApproveApplicationsOn();
//     manager_settingsMenu.toggleDelegateUserManagementOn();
//     manager_settingsMenu.toggleDelegateApplicationManagementOn();

//     // Delete all users
//     manager_menus.clickClientRegistry();
//     manager_clientRegistryMenu.clickApplicationDevelopers();
//     manager_clientRegistryMenu.selectAllUsers();
//     manager_clientRegistryMenu.deleteSelectedUsers();

//     //Create Organization Administrator
//     manager_menus.clickClientRegistry();
//     manager_clientRegistryMenu.clickApplicationDevelopers();
//     manager_clientRegistryMenu.createOrgAdministrator();

//     //Create Application Developer
//     manager_clientRegistryMenu.createAppDeveloper();    
// });

// Scenario('1 - Application Developer successfully logs in and sees the correct menus', (I, portal_login, portal_menus) => {
//     I.amOnPage('https://10.134.56.115:443');
//     portal_login.loginAppDeveloper();
//     portal_menus.seeAllMenusAppDeveloper();
// });

// Scenario('2 - Application Developer can edit it\'s profile', (I, portal_login, portal_menus, portal_profileMenu) => {
//     I.amOnPage('https://10.134.56.115:443');
//     portal_login.loginAppDeveloper();
//     portal_menus.clickProfileMenuAppDeveloper();
//     portal_profileMenu.clickMyProfileAppDeveloper();
//     portal_profileMenu.clickEditMyProfile();
//     I.clearField(portal_profileMenu.profileLocators.bio);
//     I.fillField(portal_profileMenu.profileLocators.bio, 'I am Application Developer');
// });

// Scenario('3 - Application Developer can change it\'s password', (I, portal_login, portal_menus, portal_profileMenu) => {
//     I.amOnPage('https://10.134.56.115:443');
//     portal_login.loginAppDeveloper();
//     portal_menus.clickProfileMenuAppDeveloper();
//     portal_profileMenu.clickMyProfileAppDeveloper();
//     portal_profileMenu.clickEditMyProfile();
//     portal_profileMenu.changePassword();

//     //Logout
//     portal_menus.clickProfileMenuAppDeveloper();
//     portal_profileMenu.clickSignOutAppDeveloper();

//     //Login with the new password
//     portal_login.loginAppDeveloperPwdChanged();
//     I.seeInCurrentUrl('/api-catalog');
// });

// Scenario('4 - Application Developer sees the correct list of applications', (I, manager_login, manager_menus, manager_clientRegistryMenu, manager_clientRegistryMenu_Applications, manager_apiRegistrationMenu, manager_apiRegistrationMenu_Apis, portal_login, portal_menus) => {
//     //Verify Application Developer sees two applications
//     I.amOnPage('https://10.134.56.115:443');
//     portal_login.loginAppDeveloper();
//     portal_menus.clickApplicationsAppDeveloper();
//     I.see('FirstApplication');
//     I.see('SecondApplication');
//     I.dontSee('ThirdApplication');
// });

// Scenario('5 - Application Developer can change detail of FirstApplication', (I, portal_login, portal_menus, portal_applicationsMenu) => {
//     I.amOnPage('https://10.134.56.115:443');
//     portal_login.loginAppDeveloper();

//     portal_menus.clickApplicationsAppDeveloper();
//     I.click('FirstApplication');
//     portal_applicationsMenu.clickEditApplication();
//     //Edit description - add description
//     I.fillField(portal_applicationsMenu.editApplicationLocators.description, 'This is an edited application!');
//     I.click(portal_applicationsMenu.editApplicationLocators.applyChanges);
//     //Edit authentication - generate API keys
//     I.click(portal_applicationsMenu.editApplicationLocators.authentication);
//     I.wait(2);
//     I.click(portal_applicationsMenu.editApplicationLocators.toggleApiKeys);
//     I.click(portal_applicationsMenu.editApplicationLocators.generateApiKeys);
//     //Edit Sharing - Add OrgAdministrator
//     I.click(portal_applicationsMenu.editApplicationLocators.sharing);
//     I.wait(2);
//     I.click(portal_applicationsMenu.editApplicationLocators.addUsers);
//     I.wait(2);
//     I.click({xpath: '//*[@id="add-shared-users-table"]/tbody[1]/tr/td/div/div'});
//     I.click(portal_applicationsMenu.editApplicationLocators.apply);

//     //Verify the application is successfully edited 
//     I.click(portal_applicationsMenu.editApplicationLocators.details);
//     I.wait(2);
//     I.see('This is an edited application!');
//     I.click(portal_applicationsMenu.editApplicationLocators.authentication);
//     I.wait(2);
//     I.seeElement('//*[@id="api-keys-table"]/tbody');
//     I.click(portal_applicationsMenu.editApplicationLocators.sharing);
//     I.wait(2);
//     I.see('AppDeveloper');
//     I.see('OrgAdministrator');
// });

Scenario('6 - Application Developer sees the correct list of APIs', (I, portal_login, portal_menus, portal_apisMenu_apiPreview) => {
    I.amOnPage('https://10.134.56.115:443');
    portal_login.loginAppDeveloper();

    //The correct APIs are listed
    portal_menus.clickApisAppDeveloper();
    I.see('First Pet Store');
    I.see('Second Pet Store');
    I.dontSee('Third Pet Store');

    //First Pet Store API can be previewed
    I.click('First Pet Store');
    I.seeInCurrentUrl('apiName=First%20Pet%20Store');
    I.wait(2);
    portal_apisMenu_apiPreview.seeAllMethodsFirstPetStore();
    I.goBack();

    //Second Pet Store API can be previewed
    I.click('Second Pet Store');
    I.seeInCurrentUrl('apiName=Second%20Pet%20Store')
    I.wait(2);
    portal_apisMenu_apiPreview.seeAllMethods();
    I.wai(20);
})