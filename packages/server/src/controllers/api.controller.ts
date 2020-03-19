import { Request, Response, NextFunction } from "express";
import { success } from "../cores/result.core";
import signService from "../services/sign.services";
import { authToken, util } from "../cores/misc.core";
import { param } from "../cores/params.core";
import roomService from "../services/room.services";
import logVisitService from "../services/logvisit.services";
import shopUserService from "../services/shopuser.services";
import voucherService from "../services/voucher.services";
import moment = require("moment-timezone");

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
      const start = moment()
        .startOf("day")
        .format("YYYY-MM-DD HH");
      const end = moment()
        .startOf("day")
        .add(1, "day")
        .format("YYYY-MM-DD HH");
      const [rooms, visit] = await Promise.all([
        roomService.getRooms(sno),
        logVisitService.sumOutVisitor(sno, start, end),
      ]);
      let adult = 0;
      let child = 0;
      rooms.map((item: any) => {
        adult += item.r_adult;
        child += item.r_child;
        item.dataValues = {
          ...item.dataValues,
          user: {
            phone: util.hyphenPhone(item.dataValues.user.u_phone, true),
          },
          time: util.useTime(item.r_in_date, item.r_before_min),
        };
      });
      next(success.ok({ rooms, visit, use: { adult, child } }));
    } catch (e) {
      next(e);
    }
  }

  async shopTotalInfo(req: Request, res: Response, next: NextFunction) {
    try {
      const sno = req.admin.no;
      const start = moment()
        .startOf("year")
        .format("YYYY-MM-DD HH");
      const end = moment()
        .startOf("year")
        .add(1, "year")
        .format("YYYY-MM-DD HH");
      const [
        userCount,
        voucherCount,
        outCount,
        newCount,
        newTrend,
        visitTrend,
        voucher,
        accRank,
      ] = await Promise.all([
        shopUserService.totalShopUserCount(sno),
        voucherService.voucherShopUserCount(sno),
        shopUserService.outShopUserCount(sno),
        shopUserService.newShopUserCount(sno, start, end),
        shopUserService.newShopUserTrend(sno, start, end, "month"),
        logVisitService.visitTrend(sno, start, end, "month"),
        voucherService.totalVoucherCount(sno),
        shopUserService.accUserRank(sno),
      ]);
      next(
        success.ok({
          userCount,
          voucherCount,
          outCount,
          newCount,
          newTrend,
          visitTrend,
          voucher,
          accRank,
        }),
      );
    } catch (e) {
      next(e);
    }
  }
}

const apiController: ApiController = new ApiController();
export default apiController;
