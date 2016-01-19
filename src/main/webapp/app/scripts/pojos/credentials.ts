'use strict';
module t2C3AngularApp {
  export class Credentials {
    private userName : string;
    private password : string;


    public getUsername() : string {
      return this.userName;
    }

    public setUsername(value : string) {
      this.userName = value;
    }

    public getPassword() : string {
      return this.password;
    }

    public  setPassword(value : string) {
      this.password = value;
    }
  }
}
