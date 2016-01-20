/// <reference path="../app.ts" />

angular.module('t2C3AngularApp')
  .controller('navbarCtrl', ['$scope', '$location'
    , function ($scope, $location) {
      $scope.isActive = function(viewLocation){
        return viewLocation === $location.path();
      }
    }]);
