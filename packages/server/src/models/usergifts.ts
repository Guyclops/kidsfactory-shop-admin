import { DataTypes, Model } from "sequelize";
import pool from ".";
import ShopUsers from "./shopusers";
import Gifts from "./gifts";

const sequelize = pool.sequelize;

class UserGifts extends Model {}

UserGifts.init(
  {
    ug_no: {
      type: DataTypes.INTEGER({ length: 11 }).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: "번호",
    },
    ug_su_no: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "매장 회원 번호",
    },
    ug_g_no: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "쿠폰 번호",
    },
    ug_is_used: {
      type: DataTypes.ENUM("on", "off"),
      allowNull: false,
      defaultValue: "off",
      comment: "사용 유무",
    },
    ug_use_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "사용 날짜",
    },
    ug_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "쿠폰 사용기간 시작일",
    },
    ug_finish_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "쿠폰 사용기간 마지막일",
    },
    ug_reg_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "등록일",
    },
  },
  {
    sequelize,
    tableName: "user_gifts",
    modelName: "user_gifts",
    timestamps: false,
    indexes: [
      { name: "ug_su_no", fields: ["ug_su_no"] },
      { name: "ug_g_no", fields: ["ug_g_no"] },
    ],
  },
);

UserGifts.belongsTo(ShopUsers, { foreignKey: "ug_su_no", targetKey: "su_no" });
UserGifts.belongsTo(Gifts, { foreignKey: "ug_g_no", targetKey: "g_no" });

export default UserGifts;
