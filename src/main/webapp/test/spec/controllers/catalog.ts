/// <reference path="../../../app/scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/typings/angularjs/angular-mocks.d.ts" />
describe('Controller: CatalogCtrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module('t2C3AngularApp'));

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

  // Test products need only few properties
  var product1 = {
    id: 1, name : "ThisOne"
  }
  var product2 = {
    id: 2, name : "OtherOne"
  }

  it('should add cart items to the shoppingcart', function () {
    scope.addToCart(product1);
    scope.addToCart(product2);
    var product = mockShoppingCartService.getProductByProductID(2);
    expect(product.id).toBe(2);
    expect(product.name).toBe("OtherOne");
  });

  it('should add increased amount for existing cart items in the shoppingcart', function () {
    spyOn(mockShoppingCartService,'increaseQuantityByProductId');

    scope.addToCart(product1);
    scope.addToCart(product2);
    expect(mockShoppingCartService.increaseQuantityByProductId).not.toHaveBeenCalled();
    scope.addToCart(product1);

    // Expect increaseQuantityByProductId to be called once
    expect(mockShoppingCartService.increaseQuantityByProductId).toHaveBeenCalled();
  });
});
