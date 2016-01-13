/// <reference path="../../../app/scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../protractor.d.ts" />
/// <reference path="../common.ts" />
// cannot use inject or angular in here.

/**
 *  Tests the shopping proces of the user in the front end.
 */
describe('adding items to cart', function () {
  // The correct catalog routing url
  var catalogPageName = "catalog";
  var catalogURL = browser.baseUrl + '#/catalog';

  browser.get("/");

  it('should navigate to catalog page on click', function () {
    browser.get(catalogURL);

    // Amount of products to add to cart
    let addAmount = 3;

    // Get the cart test functions
    var cart = new e2e.shoppingCart;
    var common = new e2e.common;
    let itemListSize = cart.addButtons.count().then(function(maxAmount){
      // Expect atleast 3 items in catalog to click on
      expect(addAmount).toBeTruthy(addAmount <= maxAmount);
    })

    // add some items to cart
    cart.addItemsToCart(addAmount);

    // Navigate to shopping cart page
    common.navigateTo('Shopping cart');

    // URL should now be set to shoppingcart page
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '#/shoppingCart');

    // Expect correct amount of unique products in cart
    var productsInCart = element.all(by.repeater('item in shoppingCart'));
    expect(productsInCart.count()).toEqual(3);

    // Change amount of second product to 2
    var inputField = element(by.repeater('item in shoppingCart').row(1)).element(by.css('input'));
    inputField.clear();
    inputField.sendKeys("2");

    // Expect the amount to now be 2
    expect(inputField.getAttribute("value")).toEqual("2");
  })
});

module e2e {
  export class common {
    /**
     * // Get navigation bar item for 'Catalog' page
     * @returns {ElementArrayFinder}
     */
    public getNavItems() {
      return element.all(by.css('#js-navbar-collapse li'));
    }

    /**
     *  Clicks to page if it was found.
     * @param pageName
     */
    public navigateTo(pageName) {
      let navAncorItems = element.all(by.css('#js-navbar-collapse li a'));
      element.all(by.css('#js-navbar-collapse li a')).then(function (items) {
        items.forEach(function (ele, i) { // loop through array
          if (i == 2) ele.click();
          ele.getText().then(function (text) {
            if (text === pageName) {
              items[i].click();
            }
          });
        })
      });
    }
  }

  export class shoppingCart {
    public addButtons = element.all(by.css('table tr td button'));

    /**
     *  Add some products to shopping cart.
     */
    public addItemsToCart(addAmount) {
      var counter = 0;
      var addButton;
      while (counter < addAmount) {
        // Add the next product
        addButton = this.addButtons.get(counter);
        addButton.click();
        counter++;
      }
    }
  }
}
