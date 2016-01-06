/// <reference path="../app.ts" />
'use strict';

module t2C3AngularApp {
  export class ShoppingCartService {
    public getWelcomeMessage():String {
      var hello = 'hello';
      return hello;
    }
  }


  angular.module('t2C3AngularApp.services', []).service('ShoppingCartService')
}
