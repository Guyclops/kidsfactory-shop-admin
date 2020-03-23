import ShopUsers from "../models/shopusers";
import { Sequelize, Op } from "sequelize";
import Users from "../models/users";
import LogOutUser from "../models/logoutuser";
import { util } from "../cores/misc.core";

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

  async outShopUserTrend(sno: number, start: string, end: string, type: "day" | "month" | "year") {
    let group;
    switch (type) {
      case "day":
        group = [Sequelize.fn("date_format", Sequelize.col("l_reg_date"), "%Y-%m-%d"), "date"];
        break;
      case "month":
        group = [Sequelize.fn("date_format", Sequelize.col("l_reg_date"), "%Y-%m"), "date"];
        break;
      default:
        group = [Sequelize.fn("date_format", Sequelize.col("l_reg_date"), "%Y"), "date"];
    }
    const result = await LogOutUser.findAll({
      attributes: [
        group,
        [Sequelize.fn("count", Sequelize.col("l_no")), "total"],
        [Sequelize.fn("ifnull", Sequelize.fn("sum", Sequelize.col("l_stamp")), 0), "stamp"],
        [Sequelize.fn("ifnull", Sequelize.fn("sum", Sequelize.col("l_coupon")), 0), "voucher"],
      ],
      where: {
        l_s_no: sno,
        l_reg_date: {
          [Op.between]: [start, end],
        },
      },
      group,
      raw: true,
    });

    return result;
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

  async accUserRank(sno: number, limit = 10) {
    const rank = await ShopUsers.findAll({
      raw: true,
      attributes: [
        "su_no",
        "su_child_name",
        ["su_visit_count", "count"],
        [Sequelize.fn("CONCAT", Sequelize.col("user.u_phone")), "phone"],
      ],
      include: [
        {
          attributes: [],
          model: Users,
          where: Sequelize.where(Sequelize.fn("char_length", Sequelize.col("u_phone")), {
            [Op.gt]: 3,
          }),
        },
      ],
      where: {
        su_s_no: sno,
      },
      order: [["su_visit_count", "DESC"]],
    });
    const result = rank.slice(0, limit);
    result.map((item: any) => {
      item.phone = util.hyphenPhone(item.phone, true);
    });
    return result;
  }
}

const shopUserService = new ShopUserService();

export default shopUserService;
