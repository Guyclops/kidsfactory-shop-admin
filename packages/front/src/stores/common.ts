import { observable, action } from "mobx";
import { Store } from ".";

class CommonStore {
  root: Store;
  @observable loading = false;

  constructor(root: Store) {
    this.root = root;
  }

  @action
  toggleLoading = () => {
    this.loading = !this.loading;
  };
}

export default CommonStore;
