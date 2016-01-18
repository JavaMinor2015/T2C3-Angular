/// <reference path="../app.ts" />
/// <reference path="../pojos/customer.ts" />
/// <reference path="../pojos/token.ts" />
'use strict';
module t2C3AngularApp {
  export class UserService {
    private _customer : t2C3AngularApp.Customer;
    private _securityToken : t2C3AngularApp.Token = null;

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
      this._customer = responsedata.customer;
      this._securityToken = new t2C3AngularApp.Token;

      this._securityToken.setValue(responsedata.value);
      console.log(this._customer);
      console.log(this._securityToken);
    }

    public logout() {
      this._customer = null;
      this._securityToken = null;
    }

    public isLoggedIn() {
      // This function is called an absurd amount of times during login proces, check by logging here
      //console.log(!(this._securityToken === null));
      return !(this._securityToken === null);
    }
  }
}

angular.module('t2C3AngularApp')
  .service('userService', t2C3AngularApp.UserService);

