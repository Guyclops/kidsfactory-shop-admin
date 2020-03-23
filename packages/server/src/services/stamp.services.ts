import { Sequelize, Op } from "sequelize";
import LogStamp from "../models/logstamp";

class StampService {
  async dateStampCount(
    sno: number,
    start: string,
    end: string,
    type: "day" | "month" | "year",
    stampType: Array<"add" | "add_pad" | "minus_pad" | "gift">,
  ) {
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
    const result = await LogStamp.findAll({
      attributes: [
        group,
        [Sequelize.fn("ifnull", Sequelize.fn("sum", Sequelize.col("l_stamp")), 0), "total"],
      ],
      where: {
        l_s_no: sno,
        l_type: {
          [Op.in]: stampType,
        },
        l_reg_date: {
          [Op.between]: [start, end],
        },
      },
      group,
      raw: true,
    });
    return result;
  }
}

const stampService = new StampService();
export default stampService;
