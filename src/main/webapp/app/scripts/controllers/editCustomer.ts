/// <reference path="../app.ts" />
/// <reference path="../pojos/order.ts"/>
/// <reference path="../pojos/userInfo.ts"/>
/// <reference path="../pojos/customer.ts"/>
/// <reference path="../pojos/credentials.ts"/>
/// <reference path="../pojos/address.ts"/>

angular.module('t2C3AngularApp')
  .controller('EditCustomerCtrl', ['$scope', 'UserService', 'customerResource'
    , function ($scope, userService, customerResource) {

        let customer:t2C3AngularApp.Customer;
        customer = userService.getCustomer();
        let address:t2C3AngularApp.Address;
        address = customer.address;
        $scope.firstName = customer.firstName;
        $scope.lastName = customer.lastName;
        $scope.emailAddress = customer.emailAddress;
        if (address) {
          $scope.street = address.street;
          $scope.streetNumber = address.streetNumber;
          $scope.city = address.city;
          $scope.zipcode = address.zipcode;
        }



      $scope.updateCustomer = function () {


        // Unfortunately no direct binding and have type safety in angular 1.x + typescript
        // without rewriting this as a typescript controller with all troubles it comes with.
        let userInfo : t2C3AngularApp.UserInfo = new t2C3AngularApp.UserInfo();
        let address : t2C3AngularApp.Address = new t2C3AngularApp.Address;
        let credentials: t2C3AngularApp.Credentials = new t2C3AngularApp.Credentials;
        userInfo.setFirstName(this.firstName);
        userInfo.setLastName(this.lastName);
        credentials.setPassword(this.password);
        address.setStreet(this.street);
        address.setStreetNumber(this.streetNumber);
        address.setCity(this.city);
        address.setZipcode(this.zipcode);
        //console.log(this.address);
        userInfo.setAddress(address);
        userInfo.setEmailAddress(this.emailAddress);

        // Pass userInfo object to orderService

        customerResource.save(customer, function success() {

        });


      };
    }]);
