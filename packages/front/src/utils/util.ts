class Util {
  storeData = (key: string, data: any) => {
    return localStorage.setItem(key, JSON.stringify(data));
  };

  getData = (key: string) => {
    return JSON.parse(localStorage.getItem(key));
  };

  removeData = (key: string) => {
    return localStorage.removeItem(key);
  };
}

const util = new Util();

export default util;
