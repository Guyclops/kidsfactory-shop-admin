import table from "../models/table";
import { Op, Sequelize } from "sequelize";

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

  async visitTrend(sno: number, start: string, end: string, type: "day" | "month" | "year") {
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
    });
    return result;
  }
}

const logVisitService = new LogVisitService();

export default logVisitService;
