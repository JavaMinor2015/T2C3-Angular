/// <reference path="../../../app/scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../protractor.d.ts" />
/// <reference path="../common.ts" />
// cannot use inject or angular in here.

/**
 *  Tests the shopping proces of the user in the front end.
 */
describe('adding items to cart', function () {
  // The correct configuration that needs to resemble the actual page texts / links.
  //  Also keep the classes up to date in the bottom wich gets repeaters and such.
  var shoppingCartPageLabel = "Shopping cart";
  var catalogURL = browser.baseUrl + '#/catalog';
  var shoppingCartURL = browser.baseUrl + '#/shoppingCart';
  var orderCreateURL = browser.baseUrl + '#/orderCreate';
  var orderThanksURL = browser.baseUrl + '#/thanksOrder';
  var shoppingCartRepeater = 'item in shoppingCart';

  //browser.get("/");

  it('should add products to cart and place order as guest customer', function () {
    browser.get(catalogURL);

    // Amount of products to add to cart
    let addAmount = 3;

    // Get the cart test functions
    var cart = new e2e.shoppingCart;
    var common = new e2e.common;
    var orderCreate = new e2e.orderCreate;
    let itemListSize = cart.getItemAmountInCatalog().then(function (amount) {
      // Expect atleast 3 items in catalog to click on
      expect(addAmount).toBeTruthy(addAmount <= amount);
    })

    // add some items to cart
    cart.addItemsToCart(addAmount);

    // Navigate to shopping cart page
    common.navigateTo(shoppingCartPageLabel);

    // URL should now be set to shoppingcart page
    expect(browser.getCurrentUrl()).toEqual(shoppingCartURL);

    // Expect correct amount of unique products in cart
    expect(cart.getItemAmountInCart()).toEqual(addAmount);

    // Get current total price
    cart.getTotalPrice().then(function (totalPrice) { // After promise has been delivered.
      // Change amount of second product to 2
      var inputField = element(by.repeater(shoppingCartRepeater).row(1)).element(by.css('input'));
      inputField.clear();
      inputField.sendKeys("2");

      // Expect the amount to now be 2
      expect(inputField.getAttribute("value")).toEqual("2");

      // Expect price to be updated
      expect(totalPrice).not.toEqual(cart.getTotalPrice());

      cart.placeOrder();

      // URL should now be set to order create page since this user is not logged in yet.
      expect(browser.getCurrentUrl()).toEqual(orderCreateURL);

      // Fill in user information for order
      orderCreate.fillInDefaultUserOrderInformation();

      // URL should now be set to shoppingcart page
      expect(browser.getCurrentUrl()).toEqual(orderThanksURL);
    });
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
    private totalPriceElement;
    private productsInCart;
    private productsInCatalog;
    private orderButton;

    /**
     *  Returns add product buttons element from catalog page.
     * @returns {ElementArrayFinder}
       */
    public getAddButtonsFromCatalog(){
      return element.all(by.css('table tr td button'));
    }

    /**
     *  Returns amount of items in the catalog page.
     * @returns {any}
     */
    public getItemAmountInCatalog(){
      if(this.productsInCatalog === undefined) this.productsInCatalog = element.all(by.repeater('x in products'));
      return this.productsInCatalog.count();
    }

    /**
     *  Returns amount of items in the shopping cart.
     * @returns {any}
       */
    public getItemAmountInCart(){
      if(this.productsInCart === undefined) this.productsInCart = element.all(by.repeater('item in shoppingCart'));
      return this.productsInCart.count();
    }

    /**
     *  Get total price from element in shoppingcart.
     * @returns {any}
     */
    public getTotalPrice() {
      if (this.totalPriceElement === undefined) this.totalPriceElement = element(by.css('[name=totalprice]'));
      return this.totalPriceElement.getText();
    }

    /**
     *  Add some products to shopping cart.
     */
    public addItemsToCart(addAmount) {
      var counter = 0;
      var addButton;
      while (counter < addAmount) {
        // Add the next product
        addButton = this.getAddButtonsFromCatalog().get(counter);
        addButton.click();
        counter++;
      }
    }

    private getOrderButton(){
      return element(by.css('button[name=orderButton]'));
    }

    /**
     * Clicks the order button in the shopping cart page.
     */
    public placeOrder(){
      if(this.orderButton === undefined) this.orderButton = this.getOrderButton();
      this.orderButton.click();
    }
  }

  export class orderCreate {
    private userName = "Jan";
    private lastName = "de Man";
    private email = "J.deMan@mail.com";
    private street = "Woonstraat";
    private streetNumber = "10";
    private city = "Teststad";
    private zipcode = "1234AB";

    private getPlaceOrderButton(){
      return element(by.id('submit'));
    }

    public fillInDefaultUserOrderInformation(){
      // Get form
      var form = element(by.css('form[name="orderForm"]'));
      form.element(by.model('firstName')).sendKeys(this.userName);
      form.element(by.model('lastName')).sendKeys(this.lastName);
      form.element(by.model('emailAddress')).sendKeys(this.email);
      form.element(by.model('street')).sendKeys(this.street);
      form.element(by.model('streetNumber')).sendKeys(this.streetNumber);
      form.element(by.model('city')).sendKeys(this.city);
      form.element(by.model('zipcode')).sendKeys(this.zipcode);
      this.getPlaceOrderButton().click();
    }
  }
}
