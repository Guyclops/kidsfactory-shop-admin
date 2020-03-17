import jwt from "jsonwebtoken";
import config from "../configs/config";
import { TokenInterface } from "../types/custom.interface";
import moment from "moment-timezone";

export const authToken = {
  encodeToken: (obj, options = {}) => {
    return jwt.sign(obj, config.jwt.key, { ...options });
  },
  decodeToken: token => {
    try {
      return jwt.verify(token, config.jwt.key) as TokenInterface;
    } catch (e) {
      return null;
    }
  },
};

export const util = {
  useTime: (inTime: string, defaultMin: number) => {
    const use = moment().diff(moment(inTime));
    const outMin = moment(inTime).add(defaultMin, "minute");
    let outTime: string;
    if (defaultMin > 0 && defaultMin < 1000) {
      outTime = outMin.format("HH:mm");
    } else {
      outTime = "";
    }
    const useMin = Math.floor(use / (1000 * 60));
    const useTime = `${Math.floor(useMin / 60)}시간 ${useMin % 60}분`;
    const time = {
      useMin,
      useTime,
      outTime,
    };
    return time;
  },
  hyphenPhone: (phone: string, hidden = false) => {
    if (phone.length < 10) return phone;
    let hyphen = phone.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3");
    if (hidden) {
      hyphen = `${hyphen.substr(0, 3)}-****-${hyphen.substring(hyphen.indexOf("-", 4) + 1)}`;
    }
    return hyphen;
  },
};
