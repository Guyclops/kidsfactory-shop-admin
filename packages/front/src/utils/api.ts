import axios from "axios";
import config from "../configs/config";
import util from "./util";
import storageKey from "../configs/storageKey";
import store from "../stores";

interface ApiMethod {
  body?: object;
  header?: object;
  token?: string;
}
interface ApiType {
  get: (path: string, data?: ApiMethod) => {};
  post: (path: string, data?: ApiMethod) => {};
  put: (path: string, data?: ApiMethod) => {};
  patch: (path: string, data?: ApiMethod) => {};
  delete: (path: string, data?: ApiMethod) => {};
}

const headerOption = (token?: string, option?: object) => {
  let bear = token;
  if (bear === null || bear === undefined) {
    bear = util.getData(storageKey.TOKEN);
  }
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    authorization: bear ? `Bear ${bear}` : undefined,
    ...option,
  };
};

function call(type: string) {
  return async function(path: string, dataObj?: ApiMethod) {
    try {
      store.common.toggleLoading();
      const method = type;
      let response;
      if (type === "get") {
        response = await axios[method](`${config.url}${path}`, {
          headers: headerOption(dataObj?.token, dataObj?.header),
        });
      } else {
        response = await axios[method](
          `${config.url}${path}`,
          { ...dataObj?.body },
          {
            header: headerOption(dataObj?.token, dataObj?.header),
          },
        );
      }
      const { data } = response;
      if (config.type === "dev") console.log("data", data);
      return data;
    } catch (e) {
      const { response } = e;
      if (config.type === "dev") console.log("err data", response?.data);
      return response?.data;
    } finally {
      store.common.toggleLoading();
    }
  };
}

class Api implements ApiType {
  get = call("get");
  post = call("post");
  put = call("put");
  patch = call("patch");
  delete = call("delete");
}

const api = new Api();

export default api;
