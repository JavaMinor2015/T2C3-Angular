/// <reference path="../app.ts" />

'use strict';

module t2C3AngularApp {
  export class Orderservice {
    awesomeThings:any[] = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
}

angular.module('t2C3AngularApp')
  .service('orderService', t2C3AngularApp.Orderservice);
