'use strict';
/**
 * @ngdoc function
 * @name t2C3AngularApp.controller:ShoppingCartCtrl
 * @description
 * # ShoppingCartCtrl
 * Controller of the t2C3AngularApp
 */

angular.module('t2C3AngularApp')
  .controller('ShoppingCartCtrl', ['$scope', function ($scope) {

      $scope.cart = {
        items: [{
          qty: 10,
          description: 'item',
          cost: 10.00}]
      };

      $scope.addItem = function() {
        $scope.cart.items.push({
          qty: 1,
          description: '',
          cost: 0
        });
      };

        $scope.removeItem = function(index) {
          $scope.cart.items.splice(index, 1);
        };

        $scope.total = function() {
          var total = 0;
          angular.forEach($scope.cart.items, function(item) {
            total += item.qty * item.cost;
          })

          return total;
        };
  }]);


