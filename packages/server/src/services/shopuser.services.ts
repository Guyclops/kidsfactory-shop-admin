import ShopUsers from "../models/shopusers";
import { Sequelize, Op } from "sequelize";
import Users from "../models/users";
import LogOutUser from "../models/logoutuser";

class ShopUserService {
  async totalShopUserCount(sno: number) {
    const result = await ShopUsers.findOne({
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

    return result.get("total");
  }

  async outShopUserCount(sno: number) {
    const result = await LogOutUser.findOne({
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
    });
    return result.get("total");
  }

  async newShopUserCount(sno: number, start: string, end: string) {
    const result = await ShopUsers.findOne({
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
        su_reg_date: {
          [Op.between]: [start, end],
        },
      },
    });
    return result.get("total");
  }
  async newShopUserTrend(sno: number, start: string, end: string, type: "day" | "month" | "year") {
    let group;
    switch (type) {
      case "day":
        group = [Sequelize.fn("date_format", Sequelize.col("su_reg_date"), "%Y-%m-%d"), "date"];
        break;
      case "month":
        group = [Sequelize.fn("date_format", Sequelize.col("su_reg_date"), "%Y-%m"), "date"];
        break;
      default:
        group = [Sequelize.fn("date_format", Sequelize.col("su_reg_date"), "%Y"), "date"];
    }
    const result = await ShopUsers.findAll({
      attributes: [group, [Sequelize.fn("count", Sequelize.col("su_no")), "total"]],
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
        su_reg_date: {
          [Op.between]: [start, end],
        },
      },
      group: group,
    });
    return result;
  }
}

const shopUserService = new ShopUserService();

export default shopUserService;
