import CommonStore from "./common";
import SignInStore from "./signin";
import Dashboard from "./dashboard";

class Store {
  public common: CommonStore;
  public signin: SignInStore;
  public dashboard: Dashboard;

  constructor() {
    this.common = new CommonStore(this);
    this.signin = new SignInStore(this);
    this.dashboard = new Dashboard(this);
  }
}

export default Store;
