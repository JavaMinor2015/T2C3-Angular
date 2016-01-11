/// <reference path="../../../app/scripts/services/orderservice.ts" />
/// <reference path="../../../app/scripts/app.ts" />

'use strict';

describe('Service: orderService', () => {

  // load the service's module
  beforeEach(angular.mock.module('t2C3AngularApp'));

  // instantiate service
  var orderService;
  beforeEach(inject(_orderService_ => {
    orderService = _orderService_;
  }));

  it('should do something', () => {
    expect(!!orderService).toBe(true);
  });

});
