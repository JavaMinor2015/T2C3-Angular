
/// <reference path="../../../app/scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/typings/angularjs/angular-mocks.d.ts" />

describe('Controller: ShoppingCartCtrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module('t2C3AngularApp'));

  var ShoppingCartCtrl,
    scope, cartService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, shoppingCartService) {
    scope = $rootScope.$new();
    cartService = shoppingCartService;
    ShoppingCartCtrl = $controller('ShoppingCartCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  var item1 = {
    amount : 2,
    product : {
      id: 1, version: 0, name: "TheOne", price: 1.10, category: "PART"
    }
  }
  var item2 = {
    amount : 1,
    product : {
      id: 2, version: 0, name: "TheSecond", price: 0.50, category: "PART"
    }
  }

  //Testcases here
  it('should remove the correct item from the shoppingcart', function () {
    var cost = 0;
    cost = scope.total();
    expect(cost).toBe(0);

    // Add items to cart
    cartService.addItem(item1);
    cartService.addItem(item2);

    // calculate cost
    cost = scope.total();
    expect(cost).toBe(2.70);

    // Remove the first item from the cart
    cartService.removeItem(0);

    // re-calculate cost
    cost = scope.total();
    expect(cost).toBe(0.50);
  });

});
