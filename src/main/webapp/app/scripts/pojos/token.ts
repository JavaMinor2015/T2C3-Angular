'use strict';
module t2C3AngularApp {
  export class Token {
    private value : String;

    public setValue(value : String) {
      this.value = value;
    }

    public getValue() : String {
      return this.value;
    }
  }
}
