import { error } from "../cores/result.core";
import { authToken } from "../cores/misc.core";

class Auth {
  public verify = (req, res, next) => {
    try {
      if (req.header.authorization === undefined) throw error.unauthorized();
      const token = req.header.authorization.split(" ")[1];
      const decode = authToken.decodeToken(token);
      if (!decode) throw error.unauthorized();
      next();
    } catch (e) {
      next(error.unauthorized());
    }
  };
}

const auth = new Auth();
export default auth;
