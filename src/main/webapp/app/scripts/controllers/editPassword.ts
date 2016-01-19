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




      $scope.updatePassword = function () {
        // Unfortunately no direct binding and have type safety in angular 1.x + typescript
        // without rewriting this as a typescript controller with all troubles it comes with.

        customerCredentialsResource.save(customer, function success() {
        });


      };
    }]);
