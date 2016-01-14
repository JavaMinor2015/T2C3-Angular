angular.module('t2C3AngularApp')
  .controller('RegisterCtrl', ['$scope', 'UserService', '$http', '$location'
    , function ($scope, userService, $http, $location) {
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
        $http.post('http://localhost:6789/register', customer).then(function successCallback() {
            $location.path('#/login');
          }
        );


      };
    }]);