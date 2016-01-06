'use strict';

/**
 * @ngdoc function
 * @name t2C3AngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the t2C3AngularApp
 */
angular.module('t2C3AngularApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.contacts = [
      {
        firstName: 'Frank',
        surname: 'Muscles',
        email: 'frank@muscles.com'
      },
      {
        firstName: 'Eddy',
        surname: 'Valentino',
        email: 'eddy@valfam.co.uk'
      }
    ];
  });
