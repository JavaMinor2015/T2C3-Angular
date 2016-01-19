/// <reference path="../app.ts" />
'use strict';
/**
 * @ngdoc function
 * @name t2C3AngularApp.controller:ShoppingCartCtrl
 * @description
 * # ShoppingCartCtrl
 * Controller of the t2C3AngularApp
 */

angular.module('t2C3AngularApp')
  .controller('ShoppingCartCtrl', ['$scope', 'shoppingCartService', 'orderService', '$location'
    , function ($scope, shoppingCartService, orderService, $location) {

      $scope.shoppingCart = shoppingCartService.getCart();
      $scope.removeItem = function (index) {
        shoppingCartService.removeItem(index);
      };
      $scope.countCart = function () {
        return shoppingCartService.getCart().length;
      };


      $scope.total = function () {
        let total = 0;
        angular.forEach($scope.shoppingCart, function (item) {
          total += item.amount * item.product.price;
        });

        return total;
      };

      $scope.placeOrder = function () {
        orderService.setCartItems(this.shoppingCart);
        // Navigate to page
        $location.path('/orderCreate');
      };
    }]);


