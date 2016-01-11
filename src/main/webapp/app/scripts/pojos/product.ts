/// <reference path="../app.ts" />


'use strict';
/**
 * Order object to be sent to server.
 */
module t2C3AngularApp {
  export class Product {


    private _name : string;
    private _price : number;

    private _category : string;
    private _supplier : string;
    private _available : boolean;
    private _imageURL : string;

    public setName(name : string) {
      this._name = name;
    }

    public getname() : string {
      return this._name;
    }

    get price() : number {
      return this._price;
    }

    get category() : string {
      return this._category;
    }

    get supplier() : string {
      return this._supplier;
    }

    get available() : boolean {
      return this._available;
    }

    get imageURL() : string {
      return this._imageURL;
    }

    set name(value : string) {
      this._name = value;
    }

    set price(value : number) {
      this._price = value;
    }

    set category(value : string) {
      this._category = value;
    }

    set supplier(value : string) {
      this._supplier = value;
    }

    set available(value : boolean) {
      this._available = value;
    }

    set imageURL(value : string) {
      this._imageURL = value;
    }


  }
}
