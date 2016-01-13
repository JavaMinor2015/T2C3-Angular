module eee {
  export class common {
    public hello(){
      return "hello dude";
    }
  }
}

exports.module = eee;
// Want to get this common test code in all the e2e tests.
