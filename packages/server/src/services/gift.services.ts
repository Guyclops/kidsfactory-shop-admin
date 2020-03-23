import { Op } from "sequelize";
import LogStampGift from "../models/logstampgift";
import Shops from "../models/shops";
import LogUseGift from "../models/logusegift";
import Gifts from "../models/gifts";

class GiftService {
  async countStampGifts(sno: number, start: string, end: string) {
    const all = await LogStampGift.count({
      include: [
        {
          attributes: [],
          model: Shops,
          where: {
            s_no: sno,
          },
        },
      ],
      where: {
        l_type: "add",
        l_reg_date: {
          [Op.between]: [start, end],
        },
      },
    });
    const use = await LogUseGift.count({
      include: [
        {
          attributes: [],
          model: Shops,
          where: {
            s_no: sno,
          },
        },
        {
          attributes: [],
          model: Gifts,
          where: {
            g_type: "stamp",
          },
        },
      ],
      where: {
        l_reg_date: {
          [Op.between]: [start, end],
        },
      },
    });
    return {
      all,
      use,
    };
  }
}

const giftService = new GiftService();

export default giftService;
