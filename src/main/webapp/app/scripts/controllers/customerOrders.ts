/// <reference path="../app.ts" />
/// <reference path="../pojos/customer.ts"/>
/// <reference path="../services/userService.ts"/>
'use strict';
/**
 * @ngdoc function
 * @name t2C3AngularApp.controller:CustomerOrderCtrl
 * @description
 * # CustomerOrderCtrl
 * Controller of the t2C3AngularApp
 */
angular.module('t2C3AngularApp')
  .controller('CustomerOrderCtrl', ['$scope', 'customerOrderResource','orderResource','UserService', function ($scope, customerOrderResource,orderResource, userService) {
    $scope.orders = customerOrderResource.get({id :userService.getCustomer().id});
    console.log($scope.orders);
    $scope.cancelOrder = function (order) {
      orderResource.delete(order);
    };

  }]);
