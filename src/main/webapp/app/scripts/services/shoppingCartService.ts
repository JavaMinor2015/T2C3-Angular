/// <reference path="../app.ts" />

'use strict';

module t2C3AngularApp {
  export class ShoppingCartService {
    awesomeThings:any[] = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
}

angular.module('t2C3AngularApp')
  .service('shoppingCartService', t2C3AngularApp.ShoppingCartService);
