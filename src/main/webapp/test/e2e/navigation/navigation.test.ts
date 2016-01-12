/// <reference path="../../../app/scripts/typings/jasmine/jasmine.d.ts" />
/**
 *  Tests default protractor functionality. Proves protractor is working.
 */
describe('page routing test', function() {
  // The correct catalog routing url
  var catalogURL = browser.baseUrl + '#/catalog';

  it('should navigate to catalog page on click', function() {
    browser.get('/');

    // Get navigation bar item for 'Catalog' page
    var navItems = element.all(by.css('#js-navbar-collapse li'));
    var item = navItems.get(1);
    expect(item.getText()).toEqual('Catalog');

    item.click();

    // URL should now be set to catalog page
    var newURL = browser.getCurrentUrl();
    expect(newURL).toEqual(catalogURL);
  });
});
