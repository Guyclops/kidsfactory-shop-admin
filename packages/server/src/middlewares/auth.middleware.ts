import { error } from "../cores/result.core";
import { authToken } from "../cores/misc.core";
import { NextFunction, Request, Response } from "express";

class Auth {
  public verify = (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.headers.authorization === undefined) throw error.unauthorized();
      const token = req.headers.authorization.split(" ")[1];
      const decode = authToken.decodeToken(token);
      if (!decode) throw error.unauthorized();
      req.admin = decode;
      next();
    } catch (e) {
      next(error.unauthorized());
    }
  };
}

const auth = new Auth();
export default auth;
