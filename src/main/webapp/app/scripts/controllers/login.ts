angular.module('t2C3AngularApp')
  .controller('LoginCtrl', ['$scope', 'UserService', '$http', '$location'
    , function ($scope, userService, $http, $location) {
      $scope.loginCustomer = function () {


        // Unfortunately no direct binding and have type safety in angular 1.x + typescript
        // without rewriting this as a typescript controller with all troubles it comes with.
        let customer : t2C3AngularApp.Customer = new t2C3AngularApp.Customer;
        let credentials : t2C3AngularApp.Credentials = new t2C3AngularApp.Credentials;
        credentials.setUsername(this.username);
        credentials.setPassword(this.password);

        //register user
        $http.post('http://localhost:6789/login', credentials).then(function successCallback(response) {
            credentials.setPassword(null);
            customer.setCredentials(credentials);
            userService.login(customer, response.data);
            console.log(response.data);
            $location.path('/');
          }
        );


      };
      $scope.loggedIn = function () {
        return userService.isLoggedIn();
      };
      $scope.logOut = function () {
        console.log(userService.getSecurityToken());
        $http.post('http://localhost:6789/logout', userService.getSecurityToken());
        userService.logout();
      };

    }]);
