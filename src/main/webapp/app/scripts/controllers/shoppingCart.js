'use strict';
/**
 * @ngdoc function
 * @name t2C3AngularApp.controller:ShoppingCartCtrl
 * @description
 * # ShoppingCartCtrl
 * Controller of the t2C3AngularApp
 */
angular.module('t2C3AngularApp')
    .controller('ShoppingCartCtrl', ['$scope', 'shoppingCartService', 'orderService', '$location', function ($scope, shoppingCartService, orderService, $location) {
        $scope.shoppingCart = shoppingCartService.getCart();
        $scope.removeItem = function (item) {
            shoppingCartService.removeItem(item);
        };
        $scope.total = function () {
            var total = 0;
            angular.forEach($scope.shoppingCart, function (item) {
                console.log(item);
                total += item.amount * item.product.price;
            });
            return total;
        };
        $scope.placeOrder = function () {
            orderService.setCartItems(this.shoppingCart);
            $location.path('/orderCreate');
        };
    }]);
//# sourceMappingURL=shoppingCart.js.map