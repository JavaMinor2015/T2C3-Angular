/// <reference path="../pojos/credentials.ts" />
/// <reference path="../pojos/address.ts" />
'use strict';
module t2C3AngularApp {
  export class Customer {
    private address : t2C3AngularApp.Address;
    private firstName : string;
    private lastName : string;
    private email: string;
    private credentials : t2C3AngularApp.Credentials;

    public getEmail() {
      return this.email;
    }

    public setEmail(value : string) {
      this.email = value;
    }

    public getAddress() : t2C3AngularApp.Address {
      return this.address;
    }

    public setAddress(value : t2C3AngularApp.Address) {
      this.address = value;
    }

    public getFirstName() : string {
      return this.firstName;
    }

    public setFirstName(value : string) {
      this.firstName = value;
    }

    public getLastName() : string {
      return this.lastName;
    }

    public setLastName(value : string) {
      this.lastName = value;
    }

    public getCredentials() : t2C3AngularApp.Credentials {
      return this.credentials;
    }

    public setCredentials(value : t2C3AngularApp.Credentials) {
      this.credentials = value;
    }
  }
}
