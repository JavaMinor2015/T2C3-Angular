'use strict';
/**
 * Order object interface to be implemented and sent to server.
 */
module t2C3AngularApp {
  export class UserInfo {

    private firstName : String;
    private lastName : String;
    private emailAddress : String;
    private address: t2C3AngularApp.Address;

    public setFirstName(firstName : String) {
      this.firstName = firstName;
      console.log('FIRST NAME SET');
    }

    public getFirstName() {
      return this.firstName;
    }

    public setLastName(lastName : String) {
      this.lastName = lastName;
    }

    public getLastName() {
      return this.lastName;
    }

    public setAddress(address : Address) {
      console.log(Address);
      console.log(address);
      this.address = address;
      console.log(this.address);
    }

    public getAddress() {
      return this.address;
    }


    public setEmailAddress(emailAddress : String) {
      this.emailAddress = emailAddress;
    }

    public getEmailAddress() {
      return this.emailAddress;
    }
  }
}
