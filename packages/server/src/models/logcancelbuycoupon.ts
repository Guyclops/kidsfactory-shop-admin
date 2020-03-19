import { DataTypes, Model } from "sequelize";
import pool from ".";
import Shops from "./shops";
import Users from "./users";
import ShopUsers from "./shopusers";

const sequelize = pool.sequelize;

class LogCancelBuyCoupon extends Model {}

LogCancelBuyCoupon.init(
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
    l_count: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "정기권 취소 갯수",
    },
    l_child_name: {
      type: DataTypes.STRING(22),
      allowNull: false,
      comment: "아이 이름",
    },
    l_reg_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "취소일",
    },
  },
  {
    sequelize,
    tableName: "log_cancel_buy_coupon",
    modelName: "log_cancel_buy_coupon",
    timestamps: false,
  },
);

LogCancelBuyCoupon.belongsTo(Shops, { foreignKey: "l_s_no", targetKey: "s_no" });
LogCancelBuyCoupon.belongsTo(Users, { foreignKey: "l_u_no", targetKey: "u_no" });
LogCancelBuyCoupon.belongsTo(ShopUsers, {
  foreignKey: "l_su_no",
  targetKey: "su_no",
});

export default LogCancelBuyCoupon;
