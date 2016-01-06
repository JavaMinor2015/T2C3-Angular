'use strict';
/**
 * @ngdoc function
 * @name t2C3AngularApp.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the t2C3AngularApp
 */
angular.module('t2C3AngularApp')
    .controller('OrderCtrl', ['$scope', function ($scope) {
        $scope.placeOrder = function () {
            console.log('clicked order');
            console.log(this.order);
        };
    }]);
//# sourceMappingURL=orderCreate.js.map