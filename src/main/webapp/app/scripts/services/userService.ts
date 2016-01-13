/// <reference path="../app.ts" />


'use strict';
module t2C3AngularApp {
  export class UserService {
    private _customer : t2C3AngularApp.Customer;
    private _securityToken : t2C3AngularApp.Token;


    public getUsername() : string {
      return this._customer.getCredentials().getUsername();
    }

    public getCustomer() : t2C3AngularApp.Customer {
      return this._customer;
    }


    public getSecurityToken() : t2C3AngularApp.Token {
      return this._securityToken;
    }

    public login(responsedata) {

      console.log(responsedata.value);


      this._customer = responsedata.customer;
      this._securityToken = responsedata.value;
      console.log(this._customer);
      console.log(this._securityToken);

    }

    public logout() {
      this._customer = null;
      this._securityToken = null;
    }

    public isLoggedIn() {
      return !(this._securityToken == null);
    }
  }
}

angular.module('t2C3AngularApp')
  .service('UserService', t2C3AngularApp.UserService);

