/// <reference path="../app.ts" />
/// <reference path="../pojos/customer.ts"/>
'use strict';
/**
 * @ngdoc function
 * @name t2C3AngularApp.controller:CustomerOrderCtrl
 * @description
 * # CustomerOrderCtrl
 * Controller of the t2C3AngularApp
 */
angular.module('t2C3AngularApp')
  .controller('CustomerOrderCtrl',
    ['$scope', 'customerOrderResource', 'orderResource', 'userService',
      function ($scope, customerOrderResource, orderResource, userService) {
        $scope.orders = customerOrderResource.get({id: userService.getCustomer().id});
        let editModeOrderId = null;

        $scope.cancelOrder = function (order) {
          orderResource.delete({id: order.id}
            , function onSuccess() {
            }, function onError(response) {
              console.log('FAILED to cancel order, respones:');
              console.log(response);
            });
        };
        $scope.editAddress = function (order) {
          editModeOrderId = order.id;
        };

        $scope.saveAddress = function (order) {
          editModeOrderId = null;
          orderResource.update({id: order.id}, order);
        };

        $scope.isEditMode = function (order) {
          return order.id === editModeOrderId;
        };
      }]);
