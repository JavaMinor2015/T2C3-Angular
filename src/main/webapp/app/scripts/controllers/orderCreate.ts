/// <reference path="../app.ts" />
/// <reference path="../pojos/order.ts"/>
/// <reference path="../pojos/userInfo.ts"/>
'use strict';
/**
 * @ngdoc function
 * @name t2C3AngularApp.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the t2C3AngularApp
 */
angular.module('t2C3AngularApp')
  .controller('OrderCtrl', ['$scope', 'orderService','orderResource', function ($scope, orderService,orderResource, UserInfo) {
    $scope.placeOrder = function () {
      console.log('clicked order');

      // Unfortunately no direct binding and have type safety in angular 1.x + typescript
      // without rewriting this as a typescript controller with all troubles it comes with.
      var userInfo : t2C3AngularApp.UserInfo = new t2C3AngularApp.UserInfo();
      userInfo.setFirstName(this.firstName);
      userInfo.setLastName(this.lastName);
      userInfo.setEmailAddress(this.emailAddress);

      // Pass userInfo object to orderService
      orderService.placeOrder(userInfo);
      orderResource.save(orderService.order);
      console.log('hij is niet fout gegaan');
      orderService.clearOrder();
    }
  }]);
