
Feature('00 API_Portal_Manager_Configuration_test.js');

Scenario('Initial Configuration', (I, manager_login, manager_settingsMenu, manager_menus, manager_apiRegistrationMenu, manager_clientRegistryMenu, manager_clientRegistryMenu_Applications) => {
    I.amOnPage('https://10.134.56.66:8075/');
    manager_login.loginMasterAdmin();
    manager_login.clickInitialConfigurationNo();
    I.wait(2);

    //Create Automation Organization 
    manager_menus.clickClientRegistry();
    manager_clientRegistryMenu.clickOrganizations();
    manager_clientRegistryMenu.createAutomationOrganization();

    //Create Another Organization
    manager_clientRegistryMenu.createAnotherOrganization();

    //Create Backend API
    manager_menus.clickApiRegistration();
    manager_apiRegistrationMenu.clickBackendApi();
    manager_apiRegistrationMenu.importBackedSwaggerApi();

    //Clone First Backend API
    manager_apiRegistrationMenu_Apis.cloneFirstBackendApi();

    //Clone Second Backend API
    manager_apiRegistrationMenu_Apis.cloneSecondBackendApi();

    //Clone Third Backend API
    manager_apiRegistrationMenu_Apis.cloneThirdBackendApi();

    // Create Frontend API
    manager_menus.clickApiRegistration();
    manager_apiRegistrationMenu.clickFrontendApi();
    manager_apiRegistrationMenu.newApiFromBackendApi();

    //Create First Frontend API
    manager_apiRegistrationMenu.clickNewFrontendApi();
    manager_apiRegistrationMenu.clickNewApiFromBackendApi();
    manager_apiRegistrationMenu_Apis.importFirstFrontendApi();

    //Create Second Frontend API
    manager_apiRegistrationMenu.clickNewFrontendApi();
    manager_apiRegistrationMenu.clickNewApiFromBackendApi();
    manager_apiRegistrationMenu_Apis.importSecondFrontendApi();

    //Create Third Frontend API
    manager_apiRegistrationMenu.clickNewFrontendApi();
    manager_apiRegistrationMenu.clickNewApiFromBackendApi();
    manager_apiRegistrationMenu_Apis.importThirdFrontendApi();

    //Create Application Default
    manager_menus.clickClientRegistry();
    manager_clientRegistryMenu.clickApplicationsOrgAdministrator();
    manager_clientRegistryMenu.createApplication();

    //Create First Application
    manager_clientRegistryMenu_Applications.createFirstApplication();

    //Create Second Application
    manager_clientRegistryMenu_Applications.createSecondApplication();

    //Create Third Application
    manager_clientRegistryMenu_Applications.createThirdApplication();

    //Create Organization Administrator
    manager_menus.clickClientRegistry();
    manager_clientRegistryMenu.clickApplicationDevelopers();
    manager_clientRegistryMenu.createOrgAdministrator();
});
