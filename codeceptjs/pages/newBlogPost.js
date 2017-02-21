
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  locatorsMenus: {
    returnToBlogs: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/div[1]/div/ul/li[1]/a' },
    overview: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/div[1]/div/ul/li[2]/a' },
    posts: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/div[1]/div/ul/li[3]/a' },
    drafts: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/div[1]/div/ul/li[4]/a' },
    comments: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/div[1]/div/ul/li[5]/a' },
    categories: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/div[1]/div/ul/li[6]/a' },
    tags: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/div[1]/div/ul/li[7]/a' },
    //
    write: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/div[1]/div/ul/li[10]/a' },
    update: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/div[1]/div/ul/li[9]/a' },
    profile: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/div[1]/div/ul/li[8]/a' },
    //
    livePreview: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/form/div[1]/div[2]/span[1]/a' },
    saveDraft: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/form/div[1]/div[2]/span[2]/a' },
    mediaManager: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/form/div[1]/div[2]/span[3]/a' },
    //
    toggleShare: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/form/div[1]/div[2]/div/div/a' },
    cancel: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/form/div[1]/div[2]/div/a' },
    apply: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/form/div[1]/div[2]/div/button[1] ' },
    publishNow: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/form/div[1]/div[2]/div/button[2]' }
  },
  locatorsWritePost: {
    toggleCategory: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/form/div[3]/div[1]/div/div[1]/div[1]/div/select' },
    togglePostType: { xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/form/div[3]/div[1]/div/div[1]/div[2]/div/select' },
    //In the UI the field is called "Blog Title", but it should be Post Titel
    postTitle: {xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/form/div[3]/div[1]/div/div[2]/div[1]/div[2]/input'},
    //Permalink elements
    permalinkEdit: {xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/form/div[3]/div[1]/div/div[2]/div[1]/div[2]/div[1]/span[1]/a'},
    permalinkField: {xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/form/div[3]/div[1]/div/div[2]/div[1]/div[2]/div[1]/span[2]/span/input'},
    permalinkSave: {xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/form/div[3]/div[1]/div/div[2]/div[1]/div[2]/div[1]/span[2]/a[1]'},
    permalinkCancel: {xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/form/div[3]/div[1]/div/div[2]/div[1]/div[2]/div[1]/span[2]/a[2]'},
    //
    blogImage: {xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/form/div[3]/div[1]/div/div[2]/div[1]/div[1]/div/div[1]'},
    toggleViewableBy: {xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/form/div[3]/div[1]/div/div[2]/div[1]/div[2]/div[2]/div/select[1]'},
    toggleLanguage: {xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/form/div[3]/div[1]/div/div[2]/div[1]/div[2]/div[2]/div/select[2]'},
    //
    olderPosts: {xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/form/div[3]/div[1]/div/div[2]/div[2]/div[1]/div/div[1]/a[1]/b'},
    insertMedia: {xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/form/div[3]/div[1]/div/div[2]/div[2]/div[1]/div/div[1]/a[2]/b'},
    embedVideo: {xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/form/div[3]/div[1]/div/div[2]/div[2]/div[1]/div/div[1]/a[3]/b'},
    //
    toggleStatus: {xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/form/div[3]/div[1]/div/div[2]/div[2]/div[1]/div/div[1]/select'},
    statusPublished: {xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/form/div[3]/div[1]/div/div[2]/div[2]/div[1]/div/div[1]/select/option[1]'},
    statusUnpublished: {xpath: '/html/body/div[1]/div[1]/div/div/div[2]/div/form/div[3]/div[1]/div/div[2]/div[2]/div[1]/div/div[1]/select/option[2]'}

  }
}
