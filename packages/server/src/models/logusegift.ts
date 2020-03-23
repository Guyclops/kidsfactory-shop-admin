import { DataTypes, Model } from "sequelize";
import pool from ".";
import Shops from "./shops";
import Users from "./users";
import ShopUsers from "./shopusers";
import Gifts from "./gifts";

const sequelize = pool.sequelize;

class LogUseGift extends Model {}

LogUseGift.init(
  {
    l_no: {
      type: DataTypes.INTEGER({ length: 11 }).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: "번호",
    },
    l_s_no: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "매장 번호",
    },
    l_u_no: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "회원 번호",
    },
    l_su_no: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "매장 회원 번호",
    },
    l_g_no: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "쿠폰 번호",
    },
    l_child_name: {
      type: DataTypes.STRING(22),
      allowNull: false,
      comment: "아이 이름",
    },
    l_reg_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "등록일",
    },
  },
  {
    sequelize,
    tableName: "log_use_gift",
    modelName: "log_use_gift",
    timestamps: false,
  },
);

LogUseGift.belongsTo(Shops, { foreignKey: "l_s_no", targetKey: "s_no" });
LogUseGift.belongsTo(Users, { foreignKey: "l_u_no", targetKey: "u_no" });
LogUseGift.belongsTo(ShopUsers, { foreignKey: "l_su_no", targetKey: "su_no" });
LogUseGift.belongsTo(Gifts, { foreignKey: "l_g_no", targetKey: "g_no" });

export default LogUseGift;
