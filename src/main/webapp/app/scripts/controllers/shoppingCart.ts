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

      // Disables input if value is less than 1
      $scope.amountInputChanged = function (amount) {
        let button : HTMLInputElement = <HTMLInputElement> document.getElementById("order");
        if (typeof amount !== 'undefined') {
          if (amount < 1) {
            //amount = 1;
            button.disabled = true;
          } else {
            button.disabled = false;
          }
        } else {
          //amount = 1;
          button.disabled = true;
        }
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


