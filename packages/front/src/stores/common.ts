import { observable, action, computed } from "mobx";
import Store from ".";

class CommonStore {
  root: Store;
  @observable count = 0;
  @observable todos = [];

  constructor(root: Store) {
    this.root = root;
  }

  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }

  @action
  increment = () => {
    this.count++;
  };

  @action
  decrement = () => {
    this.count--;
  };
}

export default CommonStore;