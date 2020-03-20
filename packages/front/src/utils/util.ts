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

  generateColor = (opacity = 0.6) => {
    const hue = Math.floor(Math.random() * 360);
    return {
      background: `hsla(${hue}, 100%, 80%, ${opacity})`,
      border: `hsl(${hue}, 100%, 80%)`,
    };
  };
}

const util = new Util();

export default util;
