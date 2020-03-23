import CommonStore from "./common";
import SignInStore from "./signin";
import DashboardStore from "./dashboard";
import TotalReportStore from "./total.report";
import DailyReportStore from "./daily.report";

export class Store {
  public common?: CommonStore;
  public signin?: SignInStore;
  public dashboard?: DashboardStore;
  public totalReport?: TotalReportStore;
  public dailyReport?: DailyReportStore;

  constructor() {
    this.common = new CommonStore(this);
    this.signin = new SignInStore(this);
    this.dashboard = new DashboardStore(this);
    this.totalReport = new TotalReportStore(this);
    this.dailyReport = new DailyReportStore(this);
  }
}

const store = new Store();

export default store;
