
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  firstPetStoreApiLocators: {
    test: {xpath: '//*[@id="tabs"]/ul/li[1]/a'},
    usage: {xpath: '//*[@id="tabs"]/ul/li[2]/a'},
    //POST methods
    addNewPet: {xpath: '//*[@id="firstpetstore_addPet"]/div[1]/h3/span[2]/a'},
    createUser: {xpath: '//*[@id="firstpetstore_createUser"]/div[1]/h3/span[2]/a'},
    createUsersWithArray: {xpath: '//*[@id="firstpetstore_createUsersWithArrayInput"]/div[1]/h3/span[2]/a'},
    createUsersWithList: {xpath: '//*[@id="firstpetstore_createUsersWithListInput"]/div[1]/h3/span[2]/a'},
    createOrderForPet: {xpath: '//*[@id="firstpetstore_placeOrder"]/div[1]/h3/span[2]/a'},
    updatePetById: {xpath: '//*[@id="firstpetstore_updatePetWithForm"]/div[1]/h3/span[2]/a'},
    uploadPetImage: {xpath: '//*[@id="firstpetstore_uploadFile"]/div[1]/h3/span[2]/a'},
    //DELETE methods
    deleteOrderById: {xpath: '//*[@id="firstpetstore_deleteOrder"]/div[1]/h3/span[2]/a'},
    deletePet: {xpath: '//*[@id="firstpetstore_deletePet"]/div[1]/h3/span[2]/a'},
    deleteUser: {xpath: '//*[@id="firstpetstore_deleteUser"]/div[1]/h3/span[2]/a'},
    //GET methods
    findPetByStatus: {xpath: '//*[@id="firstpetstore_findPetsByStatus"]/div[1]/h3/span[2]/a'},
    findPetByTag: {xpath: '//*[@id="firstpetstore_findPetsByTags"]/div[1]/h3/span[2]/a'},
    findInventoryByStatus: {xpath: '//*[@id="firstpetstore_getInventory"]/div[1]/h3/span[2]/a'},
    findOrderById: {xpath: '//*[@id="firstpetstore_getOrderById"]/div[1]/h3/span[2]/a'},
    findPetById: {xpath: '//*[@id="firstpetstore_getPetById"]/div[1]/h3/span[2]/a'},
    findUserByName: {xpath: '//*[@id="firstpetstore_getUserByName"]/div[1]/h3/span[2]/a'},
    login: {xpath: '//*[@id="firstpetstore_loginUser"]/div[1]/h3/span[2]/a'},
    logout: {xpath: '//*[@id="firstpetstore_logoutUser"]/div[1]/h3/span[2]/a'},
    //PUT methods
    updatePet: {xpath: '//*[@id="firstpetstore_updatePet"]/div[1]/h3/span[2]/a'},
    updateUser: {xpath: '//*[@id="firstpetstore_updateUser"]/div[1]/h3/span[2]/a'}
  },
  secondPetStoreApiLocators: {
    test: {xpath: '//*[@id="tabs"]/ul/li[1]/a'},
    usage: {xpath: '//*[@id="tabs"]/ul/li[2]/a'},
    //POST methods
    addNewPet: {xpath: '//*[@id="secondpetstore_addPet"]/div[1]/h3/span[2]/a'},
    createUser: {xpath: '//*[@id="secondpetstore_createUser"]/div[1]/h3/span[2]/a'},
    createUsersWithArray: {xpath: '//*[@id="secondpetstore_createUsersWithArrayInput"]/div[1]/h3/span[2]/a'},
    createUsersWithList: {xpath: '//*[@id="secondpetstore_createUsersWithListInput"]/div[1]/h3/span[2]/a'},
    createOrderForPet: {xpath: ''},
    updatePetById: {xpath: ''},
    uploadPetImage: {xpath: ''},
    //DELETE methods
    deleteOrderById: {xpath: '//*[@id="secondpetstore_deleteOrder"]/div[1]/h3/span[2]/a'},
    deletePet: {xpath: '//*[@id="secondpetstore_deletePet"]/div[1]/h3/span[2]/a'},
    deleteUser: {xpath: '//*[@id="secondpetstore_deleteUser"]/div[1]/h3/span[2]/a'},
    //GET methods
    findPetByStatus: {xpath: '//*[@id="secondpetstore_findPetsByStatus"]/div[1]/h3/span[2]/a'},
    findPetByTag: {xpath: '//*[@id="secondpetstore_findPetsByTags"]/div[1]/h3/span[2]/a'},
    findInventoryByStatus: {xpath: '//*[@id="secondpetstore_getInventory"]/div[1]/h3/span[2]/a'},
    findOrderById: {xpath: '//*[@id="secondpetstore_getOrderById"]/div[1]/h3/span[2]/a}'},
    findPetById: {xpath: '//*[@id="secondpetstore_getPetById"]/div[1]/h3/span[2]/a'},
    findUserByName: {xpath: '//*[@id="secondpetstore_getUserByName"]/div[1]/h3/span[2]/a'},
    login: {xpath: '//*[@id="secondpetstore_loginUser"]/div[1]/h3/span[2]/a'},
    logout: {xpath: '//*[@id="secondpetstore_logoutUser"]/div[1]/h3/span[2]/a'},
    //PUT methods
    updatePet: {xpath: '//*[@id="secondpetstore_updatePet"]/div[1]/h3/span[2]/a'},
    updateUser: {xpath: '//*[@id="secondpetstore_updateUser"]/div[1]/h3/span[2]/a'}
  },
  seeAllMethodsFirstPetStore() {
    I.seeElement(this.firstPetStoreApiLocators.addNewPet);
    I.seeElement(this.firstPetStoreApiLocators.createUser);
    I.seeElement(this.firstPetStoreApiLocators.createUsersWithArray);
    I.seeElement(this.firstPetStoreApiLocators.createUsersWithList);
    I.seeElement(this.firstPetStoreApiLocators.createOrderForPet);
    I.seeElement(this.firstPetStoreApiLocators.updatePetById);
    I.seeElement(this.firstPetStoreApiLocators.uploadPetImage);
    I.seeElement(this.firstPetStoreApiLocators.deleteOrderById);
    I.seeElement(this.firstPetStoreApiLocators.deletePet);
    I.seeElement(this.firstPetStoreApiLocators.deleteUser);
    I.seeElement(this.firstPetStoreApiLocators.findPetByStatus);
    I.seeElement(this.firstPetStoreApiLocators.findPetByTag);
    I.seeElement(this.firstPetStoreApiLocators.findInventoryByStatus);
    I.seeElement(this.firstPetStoreApiLocators.findOrderById);
    I.seeElement(this.firstPetStoreApiLocators.findPetById);
    I.seeElement(this.firstPetStoreApiLocators.findUserByName);
    I.seeElement(this.firstPetStoreApiLocators.login);
    I.seeElement(this.firstPetStoreApiLocators.logout);
    I.seeElement(this.firstPetStoreApiLocators.updatePet);
    I.seeElement(this.firstPetStoreApiLocators.updateUser);
  },
  seeAllMethodsSecondPetStore(){
    I.seeElement(this.secondPetStoreApiLocators.addNewPet);
    I.seeElement(this.secondPetStoreApiLocators.createUser);
    I.seeElement(this.secondPetStoreApiLocators.createUsersWithArray);
    I.seeElement(this.secondPetStoreApiLocators.createUsersWithList);
    I.seeElement(this.secondPetStoreApiLocators.createOrderForPet);
    I.seeElement(this.secondPetStoreApiLocators.updatePetById);
    I.seeElement(this.secondPetStoreApiLocators.uploadPetImage);
    I.seeElement(this.secondPetStoreApiLocators.deleteOrderById);
    I.seeElement(this.secondPetStoreApiLocators.deletePet);
    I.seeElement(this.secondPetStoreApiLocators.deleteUser);
    I.seeElement(this.secondPetStoreApiLocators.findPetByStatus);
    I.seeElement(this.secondPetStoreApiLocators.findPetByTag);
    I.seeElement(this.secondPetStoreApiLocators.findInventoryByStatus);
    I.seeElement(this.secondPetStoreApiLocators.findOrderById);
    I.seeElement(this.secondPetStoreApiLocators.findPetById);
    I.seeElement(this.secondPetStoreApiLocators.findUserByName);
    I.seeElement(this.secondPetStoreApiLocators.login);
    I.seeElement(this.secondPetStoreApiLocators.logout);
    I.seeElement(this.secondPetStoreApiLocators.updatePet);
  },
  clickAddNewPet(){
    I.click(this.firstPetStoreApiLocators.addNewPet);
  },
  clickCreateUser(){
     I.click(this.firstPetStoreApiLocators.createUser);
  },
  clickCreateUsersWithArray(){
     I.click(this.firstPetStoreApiLocators.createUsersWithArray);
  },
  clickCreateUsersWithList(){
     I.click(this.firstPetStoreApiLocators.createUsersWithList);
  },
  clickCreateOrderForPet(){
     I.click(this.firstPetStoreApiLocators.createOrderForPet);
  },
  clickUpdatePetById(){
     I.click(this.firstPetStoreApiLocators.updatePetById);
  },
  clickUploadPetImage(){
     I.click(this.firstPetStoreApiLocators.uploadPetImage);
  },
  clickDeleteOrderById(){
     I.click(this.firstPetStoreApiLocators.deleteOrderById);
  },
  clickDeletePet(){
     I.click(this.firstPetStoreApiLocators.deletePet);
  },
  clickDeleteUser(){
     I.click(this.firstPetStoreApiLocators.deleteUser);
  },
  clickFindPetByStatus(){
     I.click(this.firstPetStoreApiLocators.findPetByStatus);
  },
  clickFindPetByTag(){
     I.click(this.firstPetStoreApiLocators.findPetByTag);
  },
  clickFindInventoryByStatus(){
     I.click(this.firstPetStoreApiLocators.findInventoryByStatus);
  },
  clickFindOrderById(){
     I.click(this.firstPetStoreApiLocators.findOrderById);
  },
  clickFindPetById(){
     I.click(this.firstPetStoreApiLocators.findPetById);
  },
  clickFindUserByName(){
     I.click(this.firstPetStoreApiLocators.findUserByName);
  },
  clickLogin(){
    I.click(this.firstPetStoreApiLocators.login);
  },
  clickLogout(){
    I.click(this.firstPetStoreApiLocators.logout);
  },
  clickUpdatePet(){
    I.click(this.firstPetStoreApiLocators.updatePet);
  },
  clickUpdateUser(){
    I.click(this.firstPetStoreApiLocators.updateUser);
  }
}
