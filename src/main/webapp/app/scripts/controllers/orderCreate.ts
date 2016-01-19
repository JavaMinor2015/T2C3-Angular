/// <reference path="../app.ts" />
/// <reference path="../pojos/order.ts"/>
/// <reference path="../pojos/userInfo.ts"/>
/// <reference path="../pojos/customer.ts"/>
/// <reference path="../pojos/credentials.ts"/>
/// <reference path="../pojos/address.ts"/>
'use strict';
/**
 * @ngdoc function
 * @name t2C3AngularApp.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the t2C3AngularApp
 */
angular.module('t2C3AngularApp')
  .controller('OrderCtrl', ['$scope', 'orderService', '$location', 'orderResource', 'userService', 'shoppingCartService'
    , function ($scope, orderService, $location, orderResource, userService, shoppingCartService) {
      if (userService.isLoggedIn()) {
        let customer : t2C3AngularApp.Customer;
        customer = userService.getCustomer();
        let address : t2C3AngularApp.Address;
        address = customer.getAddress();
        $scope.firstName = customer.getFirstName();
        console.log($scope.firstName);
        $scope.lastName = customer.getLastName();
        $scope.emailAddress = customer.getEmail();
        if (address) {
          $scope.straatnaam = address.street;
          $scope.straatnummer = address.streetNumber;
          $scope.city = address.city;
          $scope.zipcode = address.zipcode;
        }

      }
      $scope.placeOrder = function () {
        console.log('clicked order');

        // Unfortunately no direct binding and have type safety in angular 1.x + typescript
        // without rewriting this as a typescript controller with all troubles it comes with.
        let userInfo : t2C3AngularApp.UserInfo = new t2C3AngularApp.UserInfo(); // jshint ignore:line
        let address : t2C3AngularApp.Address = new t2C3AngularApp.Address; // jshint ignore:line

        userInfo.setFirstName(this.firstName);
        userInfo.setLastName(this.lastName);

        address.setStreet(this.street);
        address.setStreetNumber(this.streetNumber);
        address.setCity(this.city);
        address.setZipcode(this.zipcode);
        //console.log(this.address);
        userInfo.setAddress(address);
        userInfo.setEmailAddress(this.emailAddress);

        // Pass userInfo object to orderService
        orderService.placeOrder(userInfo);
        orderService.orderrequest.order = orderService.order;
        orderService.orderrequest.token = userService.getSecurityToken();
        orderResource.save(orderService.orderrequest, function success() {
          shoppingCartService.clearCart();
        });

        // Navigate to thank you page
        $location.path('/thanksOrder');
      };
    }]);
