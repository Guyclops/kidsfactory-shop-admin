import CommonStore from "./common";
import SignInStore from "./signin";
import DashboardStore from "./dashboard";

export class Store {
  public common?: CommonStore;
  public signin?: SignInStore;
  public dashboard?: DashboardStore;

  constructor() {
    this.common = new CommonStore(this);
    this.signin = new SignInStore(this);
    this.dashboard = new DashboardStore(this);
  }
}

const store = new Store();

export default store;
