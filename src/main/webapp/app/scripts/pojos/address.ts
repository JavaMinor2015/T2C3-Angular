'use strict';
/**
 * Adres object interface to be implemented and sent to server.
 */
module t2C3AngularApp {
  export class Address{
    public constructor(){

    }

    private city:String;
    private street:String;
    private streetNumber:String;
    private zipcode:String;

    public setCity(city : String) {
      this.city = city;
      console.log('CITY SET');
    }

    public getCity() {
      return this.city;
    }

    public setStreet(street : String) {
      this.street = street;
      console.log('STREET SET');
    }

    public getStreet() {
      return this.street;
    }

    public setStreetNumber(streetNumber : String) {
      this.streetNumber = streetNumber;
      console.log('STREETNUMBER SET');
    }

    public getStreetNumber() {
      return this.streetNumber;
    }

    public setZipcode(zipcode : String) {
      this.zipcode = zipcode;
      console.log('ZIPCODE SET');
    }

    public getZipcode() {
      return this.zipcode;
    }

  }
}

/**
 * Made this class as a service so it can be used inside an Angular v1 objects like a controller.
 * And be able to get a new object of this class by calling the getNewInstance() function.
 */
//angular.module('t2C3AngularApp')
//  .service('UserInfo', t2C3AngularApp.UserInfo);
