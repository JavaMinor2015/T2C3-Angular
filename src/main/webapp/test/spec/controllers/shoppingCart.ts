
/// <reference path="../../../app/scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/typings/angularjs/angular-mocks.d.ts" />

describe('Controller: ShoppingCartCtrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module('t2C3AngularApp'));

  var ShoppingCartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShoppingCartCtrl = $controller('ShoppingCartCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  //Testcases here

});
