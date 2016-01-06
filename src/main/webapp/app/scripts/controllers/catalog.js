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
                'name': 'Fietsbel',
                'price': 10,
                'category': 'Diverse'
            },
            {
                'name': 'Lamp',
                'price': 10,
                'category': 'Lamp'
            }
        ];
    }]);
//# sourceMappingURL=catalog.jss.map
//# sourceMappingURL=catalog.js.map