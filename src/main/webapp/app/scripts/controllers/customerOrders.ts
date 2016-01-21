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
              order.status = "CANCELED";
            }
            , function onError(response) {
              console.log('FAILED to cancel order, response:');
              console.log(response);
            });
        };
        $scope.editAddress = function (order) {
          editModeOrderId = order.id;
        };

        $scope.saveAddress = function (order) {
          editModeOrderId = null;
          console.log(order);
          orderResource.update({id: order.id}, order, function onSuccess(response){
            console.log("Address changed:");
            console.log(response);
          });
        };

        $scope.isEditMode = function (order) {
          return order.id === editModeOrderId;
        };
      }]);
