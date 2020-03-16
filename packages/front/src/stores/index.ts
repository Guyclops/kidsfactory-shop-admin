import CommonStore from "./common";
import SignInStore from "./signin";

class Store {
  public common: CommonStore;
  public signin: SignInStore;

  constructor() {
    this.common = new CommonStore(this);
    this.signin = new SignInStore(this);
  }
}

export default Store;
