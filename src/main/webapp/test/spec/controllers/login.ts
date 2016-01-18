/// <reference path="../../../app/scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/typings/angularjs/angular-mocks.d.ts" />
describe('Controller: LoginCtrl', function () {
  // load the controller's module
  beforeEach(angular.mock.module('t2C3AngularApp'));

  var loginCtrl, userService, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _userService_, $injector, $rootScope) {
    scope = $rootScope.$new();
    // Set up the mock http service responses
    loginCtrl = $controller('LoginCtrl', {
      $scope: scope,
      // place here mocked dependencies
    });
    //$http = $injector.get('$http');
    // backend definition common for all tests
    //authRequestHandler = $http.when('POST', 'http://localhost:6789/login').respond(
      //{userId: 'userX'}, {'A-Token': 'xxx'});
    //scope = $rootScope.$new();
    //userService = _userService_;
    //loginCtrl = $controller('LoginCtrl', {
      //$scope: scope,
      // place here mocked dependencies
    //});
  }));

  // Test products need only few properties
  //var product1 = {id: 1, name : "ThisOne"}
  //var product2 = {id: 2, name : "OtherOne"}

  it('should login successfully', function () {
    scope.username = "Man";
    scope.password = "Password";
    scope.loginCustomer();
    // Todo finish checking if login worked by mocking response from server.
  });
});
