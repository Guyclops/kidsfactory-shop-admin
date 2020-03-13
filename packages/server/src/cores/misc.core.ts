import jwt from "jsonwebtoken";
import config from "../configs/config";
import { TokenInterface } from "../types/custom.interface";

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
