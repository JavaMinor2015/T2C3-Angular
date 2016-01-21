/// <reference path="../app.ts" />
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

      // Visually show add to cart animation
      // Only flashes once when clicking, since removing / adding does not animate it.
      let cartIcon = angular.element(document.getElementById("shoppingCartIcon"));
      cartIcon.removeClass('addedToCart');
      cartIcon.addClass('addedToCart');

      if (productOfCartItem) {
        shoppingCartService.increaseQuantityByProductId(productOfCartItem.id);
      } else {
        let item = {amount: 1, product: product};
        shoppingCartService.addItem(item);
      }
      //item.product = product;
    };

  }]);
