
'use strict';

describe('Service: shoppingCartService', () => {

  // load the service's module
  beforeEach(angular.mock.module('t2C3AngularApp'));

  // instantiate service
  var shoppingCartService;
  beforeEach(inject(_shoppingCartService_ => {
    shoppingCartService = _shoppingCartService_;
  }));

  //it('should do something', () => {
  //  expect(!!shoppingCartService).toBe(true);
  //});
});
