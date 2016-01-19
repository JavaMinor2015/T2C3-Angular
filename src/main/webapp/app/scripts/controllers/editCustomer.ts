/// <reference path="../app.ts" />
/// <reference path="../pojos/order.ts"/>
/// <reference path="../pojos/userInfo.ts"/>
/// <reference path="../pojos/customer.ts"/>
/// <reference path="../pojos/address.ts"/>
/// <reference path="../services/userService.ts"/>
'use strict';
angular.module('t2C3AngularApp')
  .controller('EditCustomerCtrl', ['$scope', '$location', 'userService', 'customerResource'
    , function ($scope, $location, userService, customerResource) {

      let customer : t2C3AngularApp.Customer;
      customer = userService.getCustomer();
      let address : t2C3AngularApp.Address;
      address = customer.address;
      $scope.firstName = customer.firstName;
      $scope.lastName = customer.lastName;
      $scope.emailAddress = customer.emailAddress;
      if (address) {
        $scope.street = address.street;
        $scope.streetNumber = address.streetNumber;
        $scope.city = address.city;
        $scope.zipcode = address.zipcode;
      } else {
        address = new t2C3AngularApp.Address();
      }


      $scope.updateCustomer = function () {
        // Unfortunately no direct binding and have type safety in angular 1.x + typescript
        // without rewriting this as a typescript controller with all troubles it comes with.
        console.log("update Customer");

        customer.firstName = this.firstName;
        customer.lastName = this.lastName;
        address.street = this.street;
        address.streetNumber = this.streetNumber;
        address.city = this.city;
        address.zipcode = this.zipcode;
        //console.log(this.address);
        customer.address = address;
        customer.emailAddress = this.emailAddress;
        // Pass userInfo object to orderService
        customerResource.update({id: customer.id}, customer);
      };
      $scope.editPassword = function () {
        $location.path('/password');
      };
    }]);
