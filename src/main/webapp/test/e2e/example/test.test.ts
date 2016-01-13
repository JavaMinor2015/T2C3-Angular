/// <reference path="../../../app/scripts/typings/jasmine/jasmine.d.ts" />
/**
 *  Tests default protractor functionality. Proves protractor is working.
 */
describe('angularjs homepage', function() {
  // xit disables this test, it runs it
  xit('should greet the named user', function() {
    browser.get('http://www.angularjs.org');

    element(by.model('yourName')).sendKeys('Julie');

    var greeting = element(by.binding('yourName'));

    expect(greeting.getText()).toEqual('Hello Julie!');
  });
});
