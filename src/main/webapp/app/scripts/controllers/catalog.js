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
            var productOfCartItem = shoppingCartService.getProductByProductID(product.id);
            if (productOfCartItem) {
                console.log("HALLLO");
                shoppingCartService.increaseQuantityByProductId(productOfCartItem.id);
            }
            else {
                var item = { amount: 1, product: product };
                shoppingCartService.addItem(item);
            }
            //item.product = product;
        };
    }]);
//# sourceMappingURL=catalog.js.map