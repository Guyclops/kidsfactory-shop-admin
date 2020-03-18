import { Sequelize, Op } from "sequelize";
import LogBuyCoupon from "../models/logbuycoupon";
import Users from "../models/users";

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
}

const voucherService = new VoucherService();
export default voucherService;
