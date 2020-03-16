import ShopUsers from "../models/shopusers";
import { Sequelize, Op } from "sequelize";
import Users from "../models/users";

class ShopUserService {
  async totalShopUserCount(sno: number) {
    return await ShopUsers.findOne({
      attributes: [[Sequelize.fn("count", Sequelize.col("su_no")), "total"]],
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
        su_s_no: sno,
      },
    });
  }

  async newShopUserTrend(
    sno: number,
    option: { type: "day" | "month" | "year" } = {
      type: "month",
    },
  ) {
    let format: string;
    switch (option.type) {
      case "day":
        format = "%Y-%m-%d";
        break;
      case "month":
        format = "%Y-%m";
        break;
      default:
        format = "%Y";
    }
    const group = Sequelize.fn("date_format", Sequelize.col("su_reg_date"), format);
    return await ShopUsers.findAll({
      attributes: [
        [group, "date"],
        [Sequelize.fn("count", Sequelize.col("su_no")), "count"],
      ],
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
        su_s_no: sno,
      },
      group: [group],
    });
  }
}

const shopUserService = new ShopUserService();

export default shopUserService;
