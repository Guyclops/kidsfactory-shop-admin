import Store from ".";
import { action } from "mobx";
import api from "../utils/api";
import util from "../utils/util";
import key from "../configs/storageKey";

class SignInStore {
  root: Store;
  constructor(root: Store) {
    this.root = root;
  }

  @action
  signIn = async (id: string, password: string) => {
    if (id.length < 1 || password.length < 1) return alert("아이디 혹은 비밀번호를 입력해주세요.");
    const result = await api.post("/signIn", { body: { id, password } });
    if (result.token === null) {
      alert("로그인에 실패했습니다.");
      return false;
    }
    util.storeData(key.TOKEN, result.token);
    util.storeData(key.INFO, result.shop);
    return true;
  };
}

export default SignInStore;
