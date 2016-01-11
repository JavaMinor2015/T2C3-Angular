/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/orderservice.ts" />

'use strict';

describe('Service: orderService', () => {

  // load the service's module
  beforeEach(module('t2C3AngularApp'));

  // instantiate service
  var orderService;
  beforeEach(inject(_orderService_ => {
    orderService = _orderService_;
  }));

  it('should do something', () => {
    expect(!!orderService).toBe(true);
  });

});
