import table from "../models/table";
import { Op, Sequelize } from "sequelize";
import moment = require("moment-timezone");

const { LogVisits } = table;

class LogVisitService {
  async sumOutVisitor(sno: number) {
    const date = moment()
      .startOf("day")
      .format("YYYY-MM-DD");
    const nextDate = moment()
      .startOf("day")
      .add(1, "day")
      .format("YYYY-MM-DD");
    return await LogVisits.findOne({
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
          [Op.between]: [date, nextDate],
        },
      },
    });
  }
}

const logVisitService = new LogVisitService();

export default logVisitService;
