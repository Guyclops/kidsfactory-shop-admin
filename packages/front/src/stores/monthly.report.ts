import { Store } from ".";
import { action, observable } from "mobx";
import api from "../utils/api";

class MonthlyReportStore {
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
    out: 0,
    expire: 0,
    cancel: 0,
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
  visitRank: Array<{
    childName: string;
    phone: string;
    total: number;
  }> = [];

  constructor(root: Store) {
    this.root = root;
  }

  @action
  async getShopInfoMontly(date: string) {
    const result = await api.get(`/shop/info/monthly?date=${date}`);
    this.user = result.user;
    this.voucher = result.voucher;
    this.stamp = result.stamp;
    this.gift = result.gift;
    this.visitRank = result.visitRank;
  }
}

export default MonthlyReportStore;
