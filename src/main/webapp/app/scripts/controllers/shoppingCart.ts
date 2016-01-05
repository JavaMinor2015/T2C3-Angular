'use strict';
/**
 * @ngdoc function
 * @name t2C3AngularApp.controller:ShoppingCartCtrl
 * @description
 * # ShoppingCartCtrl
 * Controller of the t2C3AngularApp
 */

angular.module('t2C3AngularApp')
  .controller('ShoppingCartCtrl', function ($scope) {

    function ShoppingCartForm($scope) {
      $scope.invoice = {
        items: [{
          qty: 10,
          description: 'item',
          cost: 9.95}]
      };

      $scope.addItem = function() {
        $scope.invoice.items.push({
          qty: 1,
          description: '',
          cost: 0
        });
      },

        $scope.removeItem = function(index) {
          $scope.invoice.items.splice(index, 1);
        },

        $scope.total = function() {
          var total = 0;
          angular.forEach($scope.invoice.items, function(item) {
            total += item.qty * item.cost;
          })

          return total;
        }
    }
  });


