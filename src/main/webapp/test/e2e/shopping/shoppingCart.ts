/// <reference path="../../../app/scripts/typings/jasmine/jasmine.d.ts" />

// DISABLED THIS TEST, cannot use inject or angular in here.
// So i cannot talk to the service and get cart items.

/**
 *  Tests default protractor functionality. Proves protractor is working.
 */
describe('adding items to cart', function () {
  // The correct catalog routing url
  var catalogURL = browser.baseUrl + '#/catalog';

  // Get angular
  var angular = browser.window.angular;

  browser.get("/");

  // my angular test code
  var CatalogCtrl,
    scope, mockShoppingCartService;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, shoppingCartService) {
    scope = $rootScope.$new();
    mockShoppingCartService = shoppingCartService;
    CatalogCtrl = $controller('CatalogCtrl', {
      $scope: scope,
      // place here mocked dependencies
    });
  }));

  it('should navigate to catalog page on click', function () {
    browser.get(catalogURL);

    // Settings
    var addAmount = 3;

    var addButtons = element.all(by.css('table tr td button'));
    var itemListSize = addButtons.count();

    // Expect atleast 1 item to click on
    expect(addAmount).toBeGreaterThan(0);

    // Add some products
    var counter = 0;
    var addButton;
    while (counter < addAmount) {
      if (itemListSize => addAmount) {
        // Add the next product
        addButton = addButtons.get(counter);
      } else {
        // Add the first product
        addButton = addButtons.get(0);
      }

      addButton.click();

      counter++;
    }

    var cartItemCount = mockShoppingCartService.getCart().length();
    expect(cartItemCount).toBe(addAmount);

    //// Get navigation bar item for 'Catalog' page
    //var navItems = element.all(by.css('#js-navbar-collapse li'));
    //var item = navItems.get(1);
    //expect(item.getText()).toEqual('Catalog');
    //
    //item.click();
    //
    //// URL should now be set to catalog page
    //var newURL = browser.getCurrentUrl();
    //expect(newURL).toEqual(catalogURL);
  });
});
