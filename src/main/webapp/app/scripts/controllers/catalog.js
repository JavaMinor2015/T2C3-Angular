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
    }]);
//# sourceMappingURL=catalog.jss.map
//# sourceMappingURL=catalog.js.map