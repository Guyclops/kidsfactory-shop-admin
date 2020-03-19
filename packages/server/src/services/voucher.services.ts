import { Sequelize, Op } from "sequelize";
import LogBuyCoupon from "../models/logbuycoupon";
import Users from "../models/users";
import LogUseCoupon from "../models/logusecoupon";
import LogExpCoupon from "../models/logexpcoupon";
import LogCancelBuyCoupon from "../models/logcancelbuycoupon";
import LogOutUser from "../models/logoutuser";
import ShopUsers from "../models/shopusers";

class VoucherService {
  async voucherShopUserCount(sno: number) {
    const result = await LogBuyCoupon.findAll({
      attributes: [[Sequelize.fn("count", Sequelize.col("l_u_no")), "total"]],
      include: [
        {
          attributes: [],
          model: Users,
          as: "user",
          where: Sequelize.where(Sequelize.fn("char_length", Sequelize.col("u_phone")), {
            [Op.gt]: 3,
          }),
        },
      ],
      where: {
        l_s_no: sno,
      },
      group: ["l_u_no"],
    });
    return result.length;
  }

  async totalVoucherCount(sno: number) {
    const attr: any = {
      attributes: [
        [Sequelize.fn("ifnull", Sequelize.fn("sum", Sequelize.col("l_count")), 0), "total"],
      ],
      where: {
        l_s_no: sno,
      },
    };
    const publish = await LogBuyCoupon.findOne(attr);
    const use = await LogUseCoupon.findOne(attr);
    const expire = await LogExpCoupon.findOne(attr);
    const cancel = await LogCancelBuyCoupon.findOne(attr);
    const out = await LogOutUser.findOne({
      attributes: [
        [Sequelize.fn("ifnull", Sequelize.fn("sum", Sequelize.col("l_coupon")), 0), "total"],
      ],
      where: {
        l_s_no: sno,
      },
    });
    const remain = await ShopUsers.findOne({
      attributes: [
        [Sequelize.fn("ifnull", Sequelize.fn("sum", Sequelize.col("su_coupon")), 0), "total"],
      ],
      where: {
        su_s_no: sno,
      },
    });
    return {
      publish: publish.get("total"),
      use: use.get("total"),
      expire: expire.get("total"),
      cancel: cancel.get("total"),
      out: out.get("total"),
      remain: remain.get("total"),
    };
  }
}

const voucherService = new VoucherService();
export default voucherService;
