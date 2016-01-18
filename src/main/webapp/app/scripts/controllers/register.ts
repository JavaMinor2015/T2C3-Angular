/// <reference path="../app.ts" />
/// <reference path="../pojos/userInfo.ts"/>
/// <reference path="../pojos/customer.ts"/>
/// <reference path="../pojos/credentials.ts"/>
'use strict';
angular.module('t2C3AngularApp')
  .controller('RegisterCtrl', ['$scope', 'userService', '$http', '$location'
    , function ($scope, userService, $http, $location) {
      $scope.errorResonseText = ""; // The resonse text sent by the server
      $scope.registerCustomer = function () {
        // Unfortunately no direct binding and have type safety in angular 1.x + typescript
        // without rewriting this as a typescript controller with all troubles it comes with.
        let customer : t2C3AngularApp.Customer = new t2C3AngularApp.Customer;
        let address : t2C3AngularApp.Address = new t2C3AngularApp.Address;
        let credentials : t2C3AngularApp.Credentials = new t2C3AngularApp.Credentials;
        customer.setFirstName(this.firstName);
        customer.setLastName(this.lastName);
        address.setStreet(this.street);
        address.setStreetNumber(this.streetNumber);
        address.setCity(this.city);
        address.setZipcode(this.zipcode);
        customer.setAddress(address);
        credentials.setUsername(this.username);
        credentials.setPassword(this.password);
        customer.setCredentials(credentials);
        //register user
        $http.post('http://localhost:6789/register', customer).then(function successCallback(response) {
            $scope.errorResonseText = ""; // Clear error response on success
            $location.path('#/login');
          },
          function (response) {
            console.log("Registration error response:");
            console.log(response);
            $scope.errorResonseText = response.statusText; // Sets / shows error response text to user
            if(response.status === 409){
              console.log("409 User already exists? statusText=" + response.statusText);
            }
          }
        );
      };
    }]);
