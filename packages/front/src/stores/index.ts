import CommonStore from "./common";
import SignInStore from "./signin";
import DashboardStore from "./dashboard";
import TotalReportStore from "./total.report";
import DailyReportStore from "./daily.report";
import MonthlyReportStore from "./monthly.report";

export class Store {
  public common?: CommonStore;
  public signin?: SignInStore;
  public dashboard?: DashboardStore;
  public totalReport?: TotalReportStore;
  public dailyReport?: DailyReportStore;
  public monthlyReport?: MonthlyReportStore;

  constructor() {
    this.common = new CommonStore(this);
    this.signin = new SignInStore(this);
    this.dashboard = new DashboardStore(this);
    this.totalReport = new TotalReportStore(this);
    this.dailyReport = new DailyReportStore(this);
    this.monthlyReport = new MonthlyReportStore(this);
  }
}

const store = new Store();

export default store;
