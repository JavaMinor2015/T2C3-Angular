/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/orderservice.ts" />
'use strict';
describe('Service: orderService', function () {
    // load the service's module
    beforeEach(module('t2C3AngularApp'));
    // instantiate service
    var orderService;
    beforeEach(inject(function (_orderService_) {
        orderService = _orderService_;
    }));
    it('should do something', function () {
        expect(!!orderService).toBe(true);
    });
});
//# sourceMappingURL=orderservice.js.map