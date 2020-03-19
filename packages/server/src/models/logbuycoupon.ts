import { DataTypes, Model } from "sequelize";
import pool from ".";
import Shops from "./shops";
import ShopUsers from "./shopusers";
import Users from "./users";

const sequelize = pool.sequelize;

class LogBuyCoupon extends Model {}

LogBuyCoupon.init(
  {
    l_no: {
      type: DataTypes.INTEGER({ length: 11 }).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: "로그 번호",
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
    l_count: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "정기권 구매 갯수",
    },
    l_status: {
      type: DataTypes.ENUM("ok", "cancel"),
      allowNull: false,
      defaultValue: "ok",
      comment: "ok: 구매, cancel: 취소",
    },
    l_cancel_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "취소 날짜",
    },
    l_child_name: {
      type: DataTypes.STRING(22),
      allowNull: false,
      comment: "아이 이름",
    },
    l_reg_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "구매일",
    },
  },
  {
    sequelize,
    tableName: "log_buy_coupon",
    modelName: "log_buy_coupon",
    timestamps: false,
    indexes: [
      { name: "l_s_no", fields: ["l_s_no"] },
      { name: "l_su_no", fields: ["l_su_no"] },
    ],
  },
);

LogBuyCoupon.belongsTo(Shops, { foreignKey: "l_s_no", targetKey: "s_no" });
LogBuyCoupon.belongsTo(Users, { foreignKey: "l_u_no", targetKey: "u_no" });
LogBuyCoupon.belongsTo(ShopUsers, { foreignKey: "l_su_no", targetKey: "su_no" });

export default LogBuyCoupon;
