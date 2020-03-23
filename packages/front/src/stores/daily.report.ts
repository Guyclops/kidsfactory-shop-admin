import { Store } from ".";
import { observable, action } from "mobx";
import api from "../utils/api";
import util from "../utils/util";

class DailyReportStore {
  root: Store;

  @observable
  user = {
    new: 0,
    out: 0,
    adult: 0,
    child: 0,
  };

  @observable
  voucher = {
    publish: 0,
    use: 0,
    expire: 0,
    cancel: 0,
    out: 0,
  };

  @observable
  stamp = {
    add: 0,
    minus: 0,
    out: 0,
  };

  @observable
  gift = {
    all: 0,
    use: 0,
  };

  @observable
  visitList: Array<{
    adult: number;
    child: number;
    date: string;
    type: string;
    status: string;
    phone: string;
  }> = [];

  adultColor = util.generateColor();
  childColor = util.generateColor();

  constructor(root: Store) {
    this.root = root;
  }

  @action
  async getShopInfoDaily(date: string, setBarData) {
    const result = await api.get(`/shop/info/daily?date=${date}`);

    this.user = {
      new: result.newCount,
      out: result.outCount,
      adult: result.adultCount,
      child: result.childCount,
    };

    this.voucher = result.voucher;
    this.stamp = result.stamp;
    this.gift = result.gift;

    const visitTrend = {
      labels: [
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
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

    const visitAdultData = [];
    const visitChildData = [];
    const visitAdultBackground = [];
    const visitChildBackground = [];

    for (let i = 8; i < 23; i++) {
      visitAdultData.push(0);
      visitChildData.push(0);
      visitAdultBackground.push(this.adultColor.background);
      visitChildBackground.push(this.childColor.background);
    }

    result.visitTrend.map(item => {
      const time = Number(item.time) - 8;
      if (item < 0 || item > 22) return;
      visitAdultData[time] = item.adult;
      visitChildData[time] = item.child;
    });

    visitTrend.datasets[0].data = visitAdultData;
    visitTrend.datasets[0].backgroundColor = visitAdultBackground;
    visitTrend.datasets[1].data = visitChildData;
    visitTrend.datasets[1].backgroundColor = visitChildBackground;

    setBarData(visitTrend);

    this.visitList = result.visitList;
    this.visitList.map(item => {
      switch (item.type) {
        case "in":
          item.status = "입장";
          break;
        case "outpart":
          item.status = "부분퇴장";
          break;
        case "outall":
          item.status = "전체퇴장";
          break;
      }
    });
  }
}

export default DailyReportStore;
