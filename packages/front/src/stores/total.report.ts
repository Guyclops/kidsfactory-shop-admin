import { action, observable } from "mobx";
import api from "../utils/api";
import { Store } from ".";
import { User, BarChart } from "../types/custom.types";
import util from "../utils/util";

class TotalReportStore {
  root: Store;

  /** 회원수 관련 */
  @observable
  userCount = 0;
  @observable
  voucherCount = 0;
  @observable
  outCount = 0;
  @observable
  newCount = 0;

  /** 정기권 관련 */
  @observable
  voucher = {
    publish: 0,
    use: 0,
    expire: 0,
    cancel: 0,
    out: 0,
    remain: 0,
  };

  @observable
  accUserList: Array<User> = [];

  constructor(root: Store) {
    this.root = root;
  }

  @action
  getLoadReport = async (setNewData, setVisitData) => {
    try {
      const result = await api.get("/shop/total/info");
      this.userCount = result.userCount;
      this.voucherCount = result.voucherCount;
      this.outCount = result.outCount;
      this.newCount = result.newCount;

      this.voucher = result.voucher;
      this.accUserList = result.accRank;

      const data = [];
      const backgroundColor = [];
      const borderColor = [];
      const visitAdultData = [];
      const visitAdultBackground = [];
      const visitAdultBorder = [];
      const visitChildData = [];
      const visitChildBackground = [];
      const visitChildBorder = [];
      const adultColor = util.generateColor();
      const childColor = util.generateColor();
      for (let i = 0; i < 12; i++) {
        data.push(0);
        visitAdultData.push(0);
        visitChildData.push(0);
        backgroundColor.push("rgba(0, 0, 0, 0)");
        visitAdultBackground.push(adultColor.background);
        visitChildBackground.push(childColor.background);
        borderColor.push("rgba(0, 0, 0, 0)");
        visitAdultBorder.push(adultColor.border);
        visitChildBorder.push(childColor.border);
      }

      const newUserTrend: BarChart = {
        labels: [
          "1월",
          "2월",
          "3월",
          "4월",
          "5월",
          "6월",
          "7월",
          "8월",
          "9월",
          "10월",
          "11월",
          "12월",
        ],
        datasets: [
          {
            label: "올해 신규 회원 추이",
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1,
          },
        ],
      };
      result.newTrend.map(item => {
        const index = parseInt(item.date.substr(item.date.indexOf("-") + 1)) - 1;
        data[index] = item.total;
        const color = util.generateColor();
        backgroundColor[index] = color.background;
        borderColor[index] = color.border;
      });
      newUserTrend.datasets[0].data = data;
      newUserTrend.datasets[0].backgroundColor = backgroundColor;
      newUserTrend.datasets[0].borderColor = borderColor;
      setNewData(newUserTrend);

      const visitTrend: BarChart = {
        labels: [
          "1월",
          "2월",
          "3월",
          "4월",
          "5월",
          "6월",
          "7월",
          "8월",
          "9월",
          "10월",
          "11월",
          "12월",
        ],
        datasets: [
          {
            label: "어른",
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1,
          },
          {
            label: "아이",
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1,
          },
        ],
      };

      result.visitTrend.map(item => {
        const index = parseInt(item.date.substr(item.date.indexOf("-") + 1)) - 1;
        visitAdultData[index] = item.adult;
        visitChildData[index] = item.child;
      });
      visitTrend.datasets[0].data = visitAdultData;
      visitTrend.datasets[1].data = visitChildData;
      visitTrend.datasets[0].backgroundColor = visitAdultBackground;
      visitTrend.datasets[1].backgroundColor = visitChildBackground;
      visitTrend.datasets[0].borderColor = visitAdultBorder;
      visitTrend.datasets[1].borderColor = visitChildBorder;
      setVisitData(visitTrend);
      return true;
    } catch (e) {
      return false;
    }
  };
}

export default TotalReportStore;
