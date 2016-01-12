'use strict';
module t2C3AngularApp {
  export class Credentials {
    private userName : string;
    private hashedPassword : string;


 public getUsername() : string {
      return this.userName;
    }

 public setUsername(value : string) {
      this.userName = value;
    }

 public getPassword() : string {
      return this.hashedPassword;
    }

  public  setPassword(value : string) {
      this.hashedPassword = value;
    }
  }
}
