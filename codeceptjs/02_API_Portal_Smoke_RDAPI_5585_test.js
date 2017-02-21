
Feature('01 API_Portal_Smoke_RDAPI 5585_test.js');

Before((I, manager_login, manager_menus, manager_settingsMenu, portal_login, portal_menus, portal_usersMenu, manager_clientRegistryMenu) => {
    I.amOnPage('https://10.134.56.66:8075');
    manager_login.loginMasterAdmin();
    manager_menus.clickSettings();
    manager_settingsMenu.clickApiManagerSettings();

    //Reset General Settings
    manager_settingsMenu.toggleUserRegistrationOn();
    manager_settingsMenu.toggleAutoApproveUserRegistrationOn();
    manager_settingsMenu.toggleAutoApproveApplicationsOn();
    manager_settingsMenu.toggleDelegateUserManagementOn();
    manager_settingsMenu.toggleDelegateApplicationManagementOn();

    //Delete all users
    manager_menus.clickClientRegistry();
    manager_clientRegistryMenu.clickApplicationDevelopers();
    manager_clientRegistryMenu.selectAllUsers();
    manager_clientRegistryMenu.deleteSelectedUsers();

    //Create Organization Administrator
    manager_menus.clickClientRegistry();
    manager_clientRegistryMenu.clickApplicationDevelopers();
    manager_clientRegistryMenu.createOrgAdministrator();

    //Create Application Developer
    manager_menus.clickClientRegistry();
    manager_clientRegistryMenu.clickApplicationDevelopers();
    manager_clientRegistryMenu.createAppDeveloper();    
});

Scenario('5 - Organization Administrator don\'t see the Options to Approve or Reject users', (I, manager_login, manager_menus, manager_settingsMenu, portal_login, portal_menus, portal_usersMenu, portal_profileMenu, manager_clientRegistryMenu) => {
    // Prerequisites:
    // Delegate user management (OFF)
    // Auto-approve user registration (OFF)
    I.amOnPage('https://10.134.56.66:8075');
    manager_login.loginMasterAdmin();
    manager_menus.clickSettings();
    manager_settingsMenu.clickApiManagerSettings();
    manager_settingsMenu.toggleDelegateUserManagementOff();
    manager_settingsMenu.toggleAutoApproveUserRegistrationOff();

    I.amOnPage('https://10.134.56.115:443');
    portal_login.clickSignUp();
    portal_login.signUp();

    //Verify Organization Administrator cannot Approve or Reject 
    I.amOnPage('https://10.134.56.66:8075');
    manager_login.loginOrgAdministrator();
    manager_menus.clickClientRegistry();
    manager_clientRegistryMenu.clickApplicationDevelopers();
    I.click({ css: '#common_ui_grid_SimpleGrid_1 > table > tbody > tr:nth-child(1) > td:nth-child(2)' });
    I.dontSee('Approve');
    I.dontSee('Reject');
});

Scenario('6 - Organization Administrator see the Options to Approve or Reject users', (I, manager_login, manager_menus, manager_settingsMenu, manager_clientRegistryMenu) => {
    // Prerequisites
    // Delegate user management (ON)
    // Auto-approve user registration (OFF)
    I.amOnPage('https://10.134.56.66:8075');
    manager_login.loginMasterAdmin();
    manager_menus.clickSettings();
    manager_settingsMenu.clickApiManagerSettings();
    manager_settingsMenu.toggleDelegateUserManagementOn();
    manager_settingsMenu.toggleAutoApproveUserRegistrationOff();

I.amOnPage('https://10.134.56.115:443');
portal_login.clickSignUp();
portal_login.signUp();

    // Verify Organization Administrator can Approve and Reject
    I.amOnPage('https://10.134.56.66:8075');
    manager_login.loginAppDeveloper();
    manager_menus.clickClientRegistry();
    manager_clientRegistryMenu.clickApplicationDevelopers();
    I.click({css: '#common_ui_grid_SimpleGrid_1 > table > tbody > tr:nth-child(1) > td:nth-child(2)'});
    I.see('Approve');
    I.see('Reject');
});

Scenario('7 - Organization Administrator can create user', (I, manager_login, manager_menus, manager_settingsMenu, portal_login, portal_menus) => {
    //Prerequisites
    //Delegate user management (ON)
    I.amOnPage('https://10.134.56.66:8075');
    manager_login.loginMasterAdmin();
    manager_menus.clickSettings();
    manager_settingsMenu.clickApiManagerSettings();
    manager_settingsMenu.toggleDelegateUserManagementOn();

    I.amOnPage('https://10.134.56.115:443');
    portal_login.loginOrgAdministrator();
    portal_menus.clickUsersOrgAdministrator();

    //Verify "Create User" button is visible
    I.seeElement({xpath: '//*[@id="dtableCustomButtons"]/a'});
});

Scenario('8 - Organization Administrator can enable/disable user', (I, manager_login, manager_menus, manager_settingsMenu, portal_login, portal_menus, portal_usersMenu) => {
    //Prerequisites
    //Delegate user management (ON)
    I.amOnPage('https://10.134.56.66:8075');
    manager_login.loginMasterAdmin();
    manager_menus.clickSettings();
    manager_settingsMenu.clickApiManagerSettings();
    manager_settingsMenu.toggleDelegateUserManagementOn();

    // Create Organization Administrator
    I.amOnPage('https://10.134.56.115:443');
    portal_login.loginOrgAdministrator();
    portal_menus.clickUsersOrgAdministrator();
    portal_usersMenu.clickCreateUser();
    portal_usersMenu.createOrgAdministrator();

    I.amOnPage('https://10.134.56.115:443');
    portal_login.loginOrgAdministrator();
    portal_menus.clickUsersOrgAdministrator();
    portal_usersMenu.selectOrgAdministratorCheckbox();

    //Verify "Enable" and "Disable" buttons are visible
    I.seeElement({xpath: '//*[@id="users-enable-button"]'}); //Enable button
    I.seeElement({xpath: '//*[@id="users-disable-button"]'}); //Disable button
});

Scenario('9 - Organization Administrator can delete user', (I, manager_login, manager_menus, manager_settingsMenu, portal_login, portal_menus, portal_usersMenu) => {
    //Prerequisites
    //Delegate user management (ON)
    I.amOnPage('https://10.134.56.66:8075');
    manager_login.loginMasterAdmin();
    manager_menus.clickSettings();
    manager_settingsMenu.clickApiManagerSettings();
    manager_settingsMenu.toggleDelegateUserManagementOn();

    // Create Organization Administrator
    I.amOnPage('https://10.134.56.115:443');
    portal_login.loginOrgAdministrator();
    portal_menus.clickUsersOrgAdministrator();
    portal_usersMenu.clickCreateUser();
    portal_usersMenu.createOrgAdministrator();

     //Verify the user can be deleted
    I.amOnPage('https://10.134.56.115:443');
    portal_login.loginOrgAdministrator();
    portal_menus.clickUsersOrgAdministrator();
    portal_usersMenu.selectOrgAdministratorCheckbox();
    portal_usersMenu.deleteUser();
});

Scenario('10 - Organizarion Administrator can edit user profile', (I, manager_login, manager_menus, manager_settingsMenu, portal_login, portal_menus, portal_usersMenu) => {
    //Prerequisites
    //Delegate user management (ON)
    I.amOnPage('https://10.134.56.66:8075');
    manager_login.loginMasterAdmin();
    manager_menus.clickSettings();
    manager_settingsMenu.clickApiManagerSettings();
    manager_settingsMenu.toggleDelegateUserManagementOn();

    // Create Organization Administrator
    I.amOnPage('https://10.134.56.115:443');
    portal_login.loginOrgAdministrator();
    portal_menus.clickUsersOrgAdministrator();
    portal_usersMenu.clickCreateUser();
    portal_usersMenu.createOrgAdministrator();

     //Verify the user is editable
    portal_usersMenu.selectOrgAdministratorName();
    portal_usersMenu.editOrgAdministrator();
    I.see('was successfully updated.');
});

Scenario('11 - Organizarion Administrator can create user with errors', (I, portal_menus, portal_usersMenu, manager_login, manager_menus, manager_settingsMenu, portal_login) => {
    //Prerequisites
    //Delegate user management (OFF)
    I.amOnPage('https://10.134.56.66:8075');
    manager_login.loginMasterAdmin();
    manager_menus.clickSettings();
    manager_settingsMenu.clickApiManagerSettings();
    manager_settingsMenu.toggleDelegateUserManagementOff();
    I.wait(1);

    // Create Organization Administrator
    I.amOnPage('https://10.134.56.115:443');
    portal_login.loginOrgAdministrator();
    portal_menus.clickUsersOrgAdministrator();
    portal_usersMenu.clickCreateUser();
    portal_usersMenu.createOrgAdministrator();

    // Verify there are error when creating user
    I.see('102: Cannot change password for pending user');
    I.see('Cannot change password for pending user');
    I.see('Problem with user\'s password. Must set it from edit user page.');
});

Scenario('12 - Organization Administrator cannot enable/disable users', (I, manager_login, manager_menus, manager_settingsMenu, portal_login, portal_menus, portal_usersMenu) => {
    // Prerequisites
    // Delegate user management (OFF)
    I.amOnPage('https://10.134.56.66:8075');
    manager_login.loginMasterAdmin();
    manager_menus.clickSettings();
    manager_settingsMenu.clickApiManagerSettings();
    manager_settingsMenu.toggleDelegateUserManagementOff();

    // Create Organization Administrator
    I.amOnPage('https://10.134.56.115:443');
    portal_login.loginOrgAdministrator();
    portal_menus.clickUsersOrgAdministrator();
    portal_usersMenu.clickCreateUser();
    portal_usersMenu.createOrgAdministrator();

     //Verify "Enable" and "Disable" buttons are inactive
    I.wait(2);
    I.seeInSource('<button disabled="true" type="button" id="users-enable-button" class="btn btn-default" data-toggle="tabTODO">Enable</button>');
    I.seeInSource('<button disabled="true" type="button" id="users-disable-button" class="btn btn-default" data-toggle="tabTODO">Disable</button>')
});

Scenario('13 - Organization Administrator cannot delete users', (I, manager_login, manager_menus, manager_settingsMenu, portal_login, portal_menus, portal_usersMenu) => {
    // Prerequisites
    // Delegate user management (OFF)
    I.amOnPage('https://10.134.56.66:8075');
    manager_login.loginMasterAdmin();
    manager_menus.clickSettings();
    manager_settingsMenu.clickApiManagerSettings();
    manager_settingsMenu.toggleDelegateUserManagementOff();

    // Create Organization Administrator
    I.amOnPage('https://10.134.56.115:443');
    portal_login.loginOrgAdministrator();
    portal_menus.clickUsersOrgAdministrator();
    portal_usersMenu.clickCreateUser();
    portal_usersMenu.createOrgAdministrator();

    //Verify "Delete" button is inactive
    I.wait(2);
    I.seeInSource('<button disabled="true" type="button" id="users-delete-button" class="btn btn-default" data-toggle="modal" data-target="#confirm-delete" data-name="user(s)" data-object="Users">Delete</button>');
});

Scenario('14 - Organization Administrator cannot edit user profile', (I, manager_login, manager_menus, manager_settingsMenu, portal_login, portal_menus, portal_usersMenu) => {
    // Prerequisites
    // Delegate user management (OFF)
    I.amOnPage('https://10.134.56.66:8075');
    manager_login.loginMasterAdmin();
    manager_menus.clickSettings();
    manager_settingsMenu.clickApiManagerSettings();
    manager_settingsMenu.toggleDelegateUserManagementOff();

    // Create Organization Administrator
    I.amOnPage('https://10.134.56.115:443');
    portal_login.loginOrgAdministrator();
    portal_menus.clickUsersOrgAdministrator();
    portal_usersMenu.clickCreateUser();
    portal_usersMenu.createOrgAdministrator();

    //Verify the user is not editable
    I.wait(2);
    portal_usersMenu.selectOrgAdministratorName();
    I.dontSeeInSource('<textarea class="form-control" id="description" name="userdata[description]" rows="3"></textarea>');
});

Scenario('15 - Application Developer is able to change it\'s password', (I, manager_login, manager_menus, manager_clientRegistryMenu, portal_usersMenu, portal_login, portal_menus, portal_profileMenu) => {
    //Prerequisites
    //Create user and change it's password
    I.amOnPage('https://10.134.56.66:8075');
    manager_login.loginMasterAdmin();
    manager_menus.clickClientRegistry();
    manager_clientRegistryMenu.clickApplicationDevelopers();
    manager_clientRegistryMenu.createAppDeveloper();

    I.amOnPage('https://10.134.56.115:443');
    portal_login.loginAppDeveloper();
    portal_menus.clickProfileMenuAppDeveloper();
    portal_profileMenu.clickMyProfileAppDeveloper();
    portal_profileMenu.clickEditMyProfile();

    //Change the password and login with the new one 
    portal_profileMenu.changePassword();
    portal_profileMenu.clickSaveChanges();
    I.see('User profile AppDeveloper was successfully updated.');
    portal_menus.clickProfileMenuAppDeveloper();
    portal_profileMenu.clickSignOutAppDeveloper();
    portal_login.loginAppDeveloperPwdChanged();

});

Scenario('16 - Organization Administrator is able to change it\'s password', (I, manager_login, manager_menus, manager_clientRegistryMenu, portal_usersMenu, portal_login, portal_menus, portal_profileMenu) => {
    //Prerequisites
    //Create user and change it's password
    I.amOnPage('https://10.134.56.66:8075');
    manager_login.loginMasterAdmin();
    manager_menus.clickClientRegistry();
    manager_clientRegistryMenu.clickApplicationDevelopers();
    manager_clientRegistryMenu.createOrgAdministrator();

    I.amOnPage('https://10.134.56.115:443');
    I.resizeWindow();
    portal_login.loginOrgAdministrator();
    portal_menus.clickProfileMenuOrgAdministrator();
    portal_profileMenu.clickMyProfileOrgAdministrator();
    portal_profileMenu.clickEditMyProfile();

    //Change the password and login with the new one 
    portal_profileMenu.changePassword();
    portal_profileMenu.clickSaveChanges();
    I.see('User profile OrgAdministrator was successfully updated.');
    portal_menus.clickProfileMenuOrgAdministrator();
    portal_profileMenu.clickSignOutOrgAdministrator();
    portal_login.loginOrgAdministratorPwdChanged();
});

Scenario('17 - Organization Administrator can reset Application Developer\'s password', (I, manager_login, manager_menus, manager_settingsMenu, portal_login, portal_menus, portal_usersMenu) => {
    // Prerequisites
    // Delegate user management (ON)
    I.amOnPage('https://10.134.56.66:8075');
    manager_login.loginMasterAdmin();
    manager_menus.clickSettings();
    manager_settingsMenu.clickApiManagerSettings();
    manager_settingsMenu.toggleDelegateUserManagementOn();

    //Reset the password
    I.amOnPage('https://10.134.56.115:443');
    portal_login.loginOrgAdministrator();
    portal_menus.clickUsersOrgAdministrator();
    I.click('AppDeveloper');
    portal_usersMenu.resetPassword();
    I.see('User\'s password has been reset. Email with the new password has been sent to appdeveloper@mail.com');

    //ADD LOGIN WITH THE NEW PASSWORD AFTER PROPER SMTP CONFIGURATION
});

Scenario('18 - Organization Administrator can change Application Developer\'s password', (I, manager_login, manager_menus, manager_settingsMenu, portal_login, portal_menus, portal_usersMenu) => {
    // Prerequisites
    // Delegate user management (ON)
    I.amOnPage('https://10.134.56.66:8075');
    manager_login.loginMasterAdmin();
    manager_menus.clickSettings();
    manager_settingsMenu.clickApiManagerSettings();
    manager_settingsMenu.toggleDelegateUserManagementOn();

    // Change the password
    I.amOnPage('https://10.134.56.115:443');
    portal_login.loginOrgAdministrator();
    portal_menus.clickUsersOrgAdministrator();
    I.click('AppDeveloper');
    portal_usersMenu.changePassword();
    I.see('Successfully change the password.');

    // Verify the Application Developer is able to login with the new password
    portal_menus.clickProfileMenuOrgAdministrator();
    portal_profileMenu.clickSignOutOrgAdministrator();
    portal_login.loginAppDeveloperPwdChanged();
});

Scenario('19 - Organization Administrator cannot reset Application Developer\'s password', (I, manager_login, manager_menus, manager_settingsMenu, portal_login, portal_menus, portal_usersMenu) => {
    // Prerequisites
    // Delegate user management (OFF)
    I.amOnPage('https://10.134.56.66:8075');
    manager_login.loginMasterAdmin();
    manager_menus.clickSettings();
    manager_settingsMenu.clickApiManagerSettings();
    manager_settingsMenu.toggleDelegateUserManagementOff();

    //Reset the password
    I.amOnPage('https://10.134.56.115:443');
    portal_login.loginOrgAdministrator();
    portal_menus.clickUsersOrgAdministrator();
    I.click('AppDeveloper');
    I.dontSeeInSource(portal_usersMenu.editUserLocators.resetPassword);
});