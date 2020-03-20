import { Store } from ".";
import { observable, action, computed } from "mobx";
import api from "../utils/api";

class DashboardStore {
  root: Store;
  @observable
  rooms = [];
  @observable visit = { adult: 0, child: 0 };
  @observable use = { adult: 0, child: 0 };

  constructor(root: Store) {
    this.root = root;
  }

  @action
  getRoomInfo = async () => {
    try {
      const result = await api.get("/rooms");
      this.rooms = result.rooms;
      this.visit = result.visit;
      this.use = result.use;
      return true;
    } catch (e) {
      return false;
    }
  };

  @computed get roomCount() {
    return this.rooms.length;
  }

  @computed get totalAdultCount() {
    return this.visit.adult + this.use.adult;
  }
  @computed get totalChildCount() {
    return this.visit.child + this.use.child;
  }
}

export default DashboardStore;
