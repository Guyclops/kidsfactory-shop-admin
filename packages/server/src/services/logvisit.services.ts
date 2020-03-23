import table from "../models/table";
import { Op, Sequelize } from "sequelize";
import Users from "../models/users";

const { LogVisit } = table;

class LogVisitService {
  // 기간동안 어른/아이 입장수 개별 합산
  async sumOutVisitor(sno: number, start: string, end: string) {
    return await LogVisit.findOne({
      attributes: [
        [Sequelize.fn("ifnull", Sequelize.fn("sum", Sequelize.col("l_adult")), 0), "adult"],
        [Sequelize.fn("ifnull", Sequelize.fn("sum", Sequelize.col("l_child")), 0), "child"],
      ],
      where: {
        l_s_no: sno,
        l_type: {
          [Op.ne]: "in",
        },
        l_reg_date: {
          [Op.between]: [start, end],
        },
      },
    });
  }

  async visitTrend(
    sno: number,
    start: string,
    end: string,
    type: "time" | "day" | "month" | "year",
  ) {
    let group;
    switch (type) {
      case "day":
        group = [Sequelize.fn("date_format", Sequelize.col("l_reg_date"), "%Y-%m-%d"), type];
        break;
      case "month":
        group = [Sequelize.fn("date_format", Sequelize.col("l_reg_date"), "%Y-%m"), type];
        break;
      case "time":
        group = [Sequelize.fn("date_format", Sequelize.col("l_reg_date"), "%H"), type];
        break;
      default:
        group = [Sequelize.fn("date_format", Sequelize.col("l_reg_date"), "%Y"), type];
    }
    const result = await LogVisit.findAll({
      attributes: [
        group,
        [Sequelize.fn("ifnull", Sequelize.fn("sum", Sequelize.col("l_adult")), 0), "adult"],
        [Sequelize.fn("ifnull", Sequelize.fn("sum", Sequelize.col("l_child")), 0), "child"],
      ],
      where: {
        l_s_no: sno,
        l_type: "in",
        l_reg_date: {
          [Op.between]: [start, end],
        },
      },
      group: group,
      raw: true,
    });
    return result;
  }

  async visitList(sno: number, start: string, end: string) {
    const result = await LogVisit.findAll({
      attributes: [
        ["l_adult", "adult"],
        ["l_child", "child"],
        ["l_reg_date", "date"],
        ["l_type", "type"],
        [Sequelize.fn("CONCAT", Sequelize.col("user.u_phone")), "phone"],
      ],
      include: [
        {
          model: Users,
          as: "user",
          attributes: [],
        },
      ],
      where: {
        l_s_no: sno,
        l_reg_date: {
          [Op.between]: [start, end],
        },
      },
      order: [["l_reg_date", "ASC"]],
      raw: true,
    });
    return result;
  }
}

const logVisitService = new LogVisitService();

export default logVisitService;
