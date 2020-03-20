import CommonStore from "./common";
import SignInStore from "./signin";
import DashboardStore from "./dashboard";
import TotalReportStore from "./total.report";

export class Store {
  public common?: CommonStore;
  public signin?: SignInStore;
  public dashboard?: DashboardStore;
  public totalReport?: TotalReportStore;

  constructor() {
    this.common = new CommonStore(this);
    this.signin = new SignInStore(this);
    this.dashboard = new DashboardStore(this);
    this.totalReport = new TotalReportStore(this);
  }
}

const store = new Store();

export default store;
