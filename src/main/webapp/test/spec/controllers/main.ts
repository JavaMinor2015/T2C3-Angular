
/// <reference path="../../../app/scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/typings/angularjs/angular-mocks.d.ts" />

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module('t2C3AngularApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCtrl.awesomeThings.length).toBe(3);
  });
});
