'use strict';
/**
 * @ngdoc function
 * @name t2C3AngularApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the t2C3AngularApp
 */
angular.module('t2C3AngularApp')
  .controller('CatalogCtrl', ['$scope', 'catalogResource', 'shoppingCartService', function ($scope, catalogResource, shoppingCartService) {
    $scope.products = catalogResource.query();

    $scope.addToCart = function (product) {
      let productOfCartItem = shoppingCartService.getProductByProductID(product.id);
      if (productOfCartItem) {
        shoppingCartService.increaseQuantityByProductId(productOfCartItem.id);
      } else {
        let item = {amount: 1, product: product};
        shoppingCartService.addItem(item);
      }
      //item.product = product;
    };
  }]);
