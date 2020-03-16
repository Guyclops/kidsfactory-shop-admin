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

export const room = {
  useTime: (inTime: string, defaultMin: number) => {
    const useTime = moment().diff(moment(inTime));
    const outMin = moment(inTime).add(defaultMin, "minute");
    let outTime: string;
    if (defaultMin > 0 && defaultMin < 1000) {
      outTime = outMin.format("HH:mm");
    } else {
      outTime = "";
    }
    const time = {
      useMin: Math.floor(useTime / (1000 * 60)),
      outTime,
    };
    return time;
  },
};
