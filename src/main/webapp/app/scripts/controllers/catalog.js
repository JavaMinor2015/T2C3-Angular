'use strict';
/**
 * @ngdoc function
 * @name t2C3AngularApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the t2C3AngularApp
 */
angular.module('t2C3AngularApp')
    .controller('CatalogCtrl', ['$scope', 'catalogResource', function ($scope, catalogResource) {
        $scope.products = catalogResource.query();
        console.log($scope.products);
        // Temp hardcoded
        $scope.products = [
            {
                id: 1,
                version: 0,
                name: 'Thing #113693836',
                price: 0.61,
                category: 'PART',
                supplier: 'Meme',
                available: true,
                imageURL: null
            },
            {
                id: 2,
                version: 0,
                name: 'Thing #21425211',
                price: 1.20,
                category: 'PART',
                supplier: 'Meme',
                available: true,
                imageURL: null
            }
        ];
    }]);
//# sourceMappingURL=catalog.js.map