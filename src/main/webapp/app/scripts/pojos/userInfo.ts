'use strict';
/**
 * Order object interface to be implemented and sent to server.
 */
module t2C3AngularApp {
  export class UserInfo {
    private firstName : String;
    private lastName : String;
    private emailAddress : String;

    //public constructor() {
    //
    //}

    public getNewInstance() : UserInfo {
      return new UserInfo();
    }

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

    public setEmailAddress(emailAddress : String) {
      this.emailAddress = emailAddress;
    }

    public getEmailAddress() {
      return this.emailAddress;
    }
  }
}

/**
 * Made this class as a service so it can be used inside an Angular v1 objects like a controller.
 * And be able to get a new object of this class by calling the getNewInstance() function.
 */
//angular.module('t2C3AngularApp')
//  .service('UserInfo', t2C3AngularApp.UserInfo);
