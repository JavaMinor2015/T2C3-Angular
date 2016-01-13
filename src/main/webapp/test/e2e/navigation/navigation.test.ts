/// <reference path="../../../app/scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../protractor.d.ts" />
/**
 *  Tests default protractor functionality. Proves protractor is working.
 */
describe('page routing test', function() {
  // The correct catalog routing url and text from the nav bar
  var catalogURL = browser.baseUrl + '#/catalog';
  var catalogNavText = "Catalog";

  it('should navigate to catalog page on click', function() {
    browser.get('/');

    // Get navigation bar item for 'Catalog' page
    var navItems = element.all(by.css('#js-navbar-collapse li'));

    var item = navItems.get(1);
    expect(item.getText()).toEqual(catalogNavText);

    item.click();

    // URL should now be set to catalog page
    var newURL = browser.getCurrentUrl();
    expect(newURL).toEqual(catalogURL);
  });
});
