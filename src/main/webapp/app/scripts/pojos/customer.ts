/// <reference path="../pojos/credentials.ts" />
/// <reference path="../pojos/address.ts" />
module t2C3AngularApp {
  export class Customer {
    public id: number;
    public address : t2C3AngularApp.Address;
    public firstName : string;
    public lastName : string;
    public emailAddress: string;
    private credentials : t2C3AngularApp.Credentials;

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

    public getEmail() : string {
      return this.emailAddress;
    }

    public setEmailAddress(value : string) {
      this.emailAddress = value;
    }

    public getCredentials() : t2C3AngularApp.Credentials {
      return this.credentials;
    }

    public setCredentials(value : t2C3AngularApp.Credentials) {
      this.credentials = value;
    }
  }
}
