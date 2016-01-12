/// <reference path="../app.ts" />


'use strict';
module t2C3AngularApp {
  export class UserService {
    private _userInfo : t2C3AngularApp.UserInfo;
    private _securityToken : string;


    public get username() : t2C3AngularApp.UserInfo {
      return this._userInfo;
    }


    public get securityToken() : string {
      return this._securityToken;
    }

    public login(userInfo : t2C3AngularApp.UserInfo, securityToken : string) {
      this._userInfo = userInfo;
      this._securityToken = securityToken;

    }

    public logout() {
      this._userInfo = null;
      this._securityToken = null;
    }
  }
}

angular.module('t2C3AngularApp')
  .service('userService', t2C3AngularApp.Orderservice);

