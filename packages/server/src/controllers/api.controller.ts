import { Request, Response, NextFunction } from "express";
import { success } from "../cores/result.core";
import signService from "../services/sign.services";
import { authToken } from "../cores/misc.core";
import { param } from "../cores/params.core";
import roomService from "../services/room.services";
import logVisitService from "../services/logvisit.services";
import shopUserService from "../services/shopuser.services";

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

  async getRooms(req: Request, res: Response, next: NextFunction) {
    try {
      const sno = req.admin.no;
      const [rooms, visit] = await Promise.all([
        roomService.getRooms(sno),
        logVisitService.sumOutvisitor(sno),
      ]);
      let useAdult = 0;
      let useChild = 0;
      rooms.map((item: any) => {
        useAdult += item.r_adult;
        useChild += item.r_child;
      });
      next(success.ok({ rooms, visit, use: { useAdult, useChild } }));
    } catch (e) {
      next(e);
    }
  }

  async shopUserInfo(req: Request, res: Response, next: NextFunction) {
    try {
      const sno = req.admin.no;
      const [user, trend] = await Promise.all([
        shopUserService.totalShopUserCount(sno),
        shopUserService.newShopUserTrend(sno),
      ]);
      next(success.ok({ user, trend }));
    } catch (e) {
      next(e);
    }
  }
}

const apiController: ApiController = new ApiController();
export default apiController;
