import { Request, Response, NextFunction } from "express";
import { success } from "../cores/result.core";
import signService from "../services/sign.services";
import { authToken } from "../cores/misc.core";
import { param } from "../cores/params.core";

class ApiController {
  index(req: Request, res: Response, next: NextFunction) {
    try {
      next(success.ok("hello world3"));
    } catch (e) {
      next(e);
    }
  }

  async postSignIn(req: Request, res: Response, next: NextFunction) {
    try {
      param(req.body, "id");
      param(req.body, "password");
      const shop = await signService.signIn(req.body);
      let token = null;
      if (shop === null) {
        next(success.ok({ shop, token }));
      } else {
        delete shop.s_pwd;
        token = authToken.encodeToken({
          no: shop.s_no,
          id: shop.s_id,
          enable: shop.s_enable,
        });
        next(success.ok({ shop, token }));
      }
    } catch (e) {
      next(e);
    }
  }
}

const apiController: ApiController = new ApiController();
export default apiController;
