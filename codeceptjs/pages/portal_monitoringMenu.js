
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  appUsageLocators: {
    applicationUsage: { xpath: '/html/body/div[1]/div[1]/div/div/ul/li[1]/a' },
    messages: { xpath: '/html/body/div[1]/div[1]/div/div/table[1]/thead/tr/th[1]/div[1]' },
    successes: { xpath: '/html/body/div[1]/div[1]/div/div/table[1]/thead/tr/th[2]/div[1]' },
    failures: { xpath: '/html/body/div[1]/div[1]/div/div/table[1]/thead/tr/th[3]/div[1]' },
    exceptions: { xpath: '/html/body/div[1]/div[1]/div/div/table[1]/thead/tr/th[4]/div[1]' },
    processingTime: { xpath: '/html/body/div[1]/div[1]/div/div/table[1]/thead/tr/th[5]/div[1]' }
  },
  apiUsageLocators: {
    apiUsage: { xpath: '/html/body/div[1]/div[1]/div/div/ul/li[2]/a' },
    messages: { xpath: '/html/body/div[1]/div[1]/div/div/table[1]/thead/tr/th[1]/div[1]' },
    successes: { xpath: '/html/body/div[1]/div[1]/div/div/table[1]/thead/tr/th[2]/div[1]' },
    failures: { xpath: '/html/body/div[1]/div[1]/div/div/table[1]/thead/tr/th[3]/div[1]' },
    exceptions: { xpath: '/html/body/div[1]/div[1]/div/div/table[1]/thead/tr/th[4]/div[1]' },
    processingTime: { xpath: '/html/body/div[1]/div[1]/div/div/table[1]/thead/tr/th[5]/div[1]' }
  },
  calendarLocators: {
    toggleCalendar: { xpath: '/html/body/div[1]/div[1]/div/div/div[3]/div/span' },
    today: { xpath: '/html/body/div[2]/div[3]/ul/li[1]' },
    yesterday: { xpath: '/html/body/div[2]/div[3]/ul/li[2]' },
    last7days: { xpath: '/html/body/div[2]/div[3]/ul/li[3]' },
    last30days: { xpath: '/html/body/div[2]/div[3]/ul/li[4]' },
    thisMonth: { xpath: '/html/body/div[2]/div[3]/ul/li[5]' },
    lastMonth: { xpath: '/html/body/div[2]/div[3]/ul/li[6]' },
    custom: { xpath: '/html/body/div[2]/div[3]/ul/li[7]' },
    //The locators for custom dates will not be defined at this moment
    //Will be defined when exact test cases are provided 
    ok: { xpath: '/html/body/div[2]/div[3]/div/button[1]' },
    cancel: { xpath: '/html/body/div[2]/div[3]/div/button[2]' }
  },
  //
  //Application Usage
  //
  clickApplicationUsage() {
    I.click(this.appUsageLocators.applicationUsage);
  },
  seeApplicationUsageElements() {
    I.seeElement(this.appUsageLocators.messages);
    I.seeElement(this.appUsageLocators.successes);
    I.seeElement(this.appUsageLocators.failures);
    I.seeElement(this.appUsageLocators.exceptions);
    I.seeElement(this.appUsageLocators.processingTime);
  },
  clickAppMessages() {
    I.click(this.appUsageLocators.messages);
  },
  clickAppSuccesses() {
    I.click(this.appUsageLocators.successes);
  },
  clickAppFailures() {
    I.click(this.appUsageLocators.failures);
  },
  clickAppExceptions() {
    I.click(this.appUsageLocators.exceptions);
  },
  clickAppProcessingTime() {
    I.click(this.appUsageLocators.processingTime);
  },
  //
  //API Usage
  //
  clickApiUsage() {
    I.click(this.apiUsageLocators.apiUsage);
  },
  seeApiUsageElements() {
    I.seeElement(this.apiUsageLocators.messages);
    I.seeElement(this.apiUsageLocators.successes);
    I.seeElement(this.apiUsageLocators.failures);
    I.seeElement(this.apiUsageLocators.exceptions);
    I.seeElement(this.apiUsageLocators.processingTime);
  },
  clickApiMessages() {
    I.click(this.apiUsageLocators.messages);
  },
  clickApiSuccesses() {
    I.click(this.apiUsageLocators.successes);
  },
  clickApiFailures() {
    I.click(this.apiUsageLocators.failures);
  },
  clickApiExceptions() {
    I.click(this.apiUsageLocators.exceptions);
  },
  clickApiProcessingTime() {
    I.click(this.apiUsageLocators.processingTime);
  },
  //
  //Calendar
  //
  seeCalenar() {
    I.seeElement(this.calendarLocators.toggleCalendar);
  },
  confCalendarToday() {
    I.click(this.calendarLocators.toggleCalendar);
    I.click(this.calendarLocators.today);
    I.click(this.calendarLocators.ok);
  },
  confCalendarYesterday() {
    I.click(this.calendarLocators.toggleCalendar);
    I.click(this.calendarLocators.yesterday);
    I.click(this.calendarLocators.ok);
  },
  confCalendarToday() {
    I.click(this.calendarLocators.toggleCalendar);
    I.click(this.calendarLocators.today);
    I.click(this.calendarLocators.ok);
  },
  confCalendarLast7Days() {
    I.click(this.calendarLocators.toggleCalendar);
    I.click(this.calendarLocators.last7days);
    I.click(this.calendarLocators.ok);
  },
  confCalendarLast30Days() {
    I.click(this.calendarLocators.toggleCalendar);
    I.click(this.calendarLocators.last30days);
    I.click(this.calendarLocators.ok);
  },
  confCalendarThisMonth() {
    I.click(this.calendarLocators.toggleCalendar);
    I.click(this.calendarLocators.thisMonth);
    I.click(this.calendarLocators.ok);
  },
  confCalendarLastMonth() {
    I.click(this.calendarLocators.toggleCalendar);
    I.click(this.calendarLocators.lastMonth);
    I.click(this.calendarLocators.ok);
  }
}