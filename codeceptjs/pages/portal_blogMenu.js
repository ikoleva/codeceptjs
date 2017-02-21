
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  locators: {
    subscribeToBlog: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div[1]/div/div[1]/a[1]/span' },
    subscribeViaRSS: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div[1]/div/div[1]/a[2]/span' },
    //
    home: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div[1]/div/div[2]/div/ul/li[1]/a/span' },
    categories: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div[1]/div/div[2]/div/ul/li[2]/a/span' },
    tags: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div[1]/div/div[2]/div/ul/li[3]/a/span' },
    bloggers: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div[1]/div/div[2]/div/ul/li[4]/a/span' },
    teamBlogs: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div[1]/div/div[2]/div/ul/li[5]/a/span' },
    searchBar: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div[1]/div/div[2]/div/ul/li[6]/form/input' },
    newBlogPost: {xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div[1]/div/div[2]/div/ul/li[9]/a/span'},
    quickUpdate: {xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div[1]/div/div[2]/div/ul/li[8]/a/span'},
    dashboard: {xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div[1]/div/div[2]/div/ul/li[7]/a/span'}
  },
  seeBlogElements(){
    I.seeElement(this.locators.subscribeToBlog);
    I.seeElement(this.locators.subscribeViaRSS);
    I.seeElement(this.locators.home);
    I.seeElement(this.locators.categories);
    I.seeElement(this.locators.tags);
    I.seeElement(this.locators.bloggers);
    I.seeElement(this.locators.teamBlogs);
    I.seeElement(this.locators.searchBar);
    I.seeElement(this.locators.newBlogPost);
    I.seeElement(this.locators.quickUpdate);
    I.seeElement(this.locators.dashboard);
  },
  clickHome(){
    I.click(this.locators.home);
    I.seeInCurrentUrl('/blog');
    I.see(' Recent blog posts ');
  },
  clickCategories(){
    I.click(this.locators.categories);
    I.seeInCurrentUrl('/blog/categories');
    I.see('Categories');
  },
  clickTags(){
    I.click(this.locators.tags);
    I.seeInCurrentUrl('/blog/tags');
    I.see('Tags');
  },
  clickBloggers(){
    I.click(this.locators.bloggers);
    I.seeInCurrentUrl('/blog/blogger');
    I.see('Bloggers');
  },
  clickTeamBlogs(){
    I.click(this.locators.teamBlogs);
    I.seeInCurrentUrl('/blog/teamblog');
    I.see('Team Blog');
  },
  clickSearchBar(){
    I.click(this.locators.searchBar);
  },
  clickCreateNewBlogPost(){
    I.click(this.locators.newBlogPost);
    I.seeInCurrentUrl('/blog/dashboard/write');
  }
}