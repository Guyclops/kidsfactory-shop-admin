import { DataTypes, Model } from "sequelize";
import pool from ".";
import Shops from "./shops";
import Users from "./users";
import ShopUsers from "./shopusers";

const sequelize = pool.sequelize;

class LogUseCoupon extends Model {}

LogUseCoupon.init(
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
    l_r_no: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "룸 번호",
    },
    l_count: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "사용 정기권수",
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
    l_e_nos: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "가져온 잔여 정기권 로그 번호",
    },
  },
  {
    sequelize,
    tableName: "log_use_coupon",
    modelName: "log_use_coupon",
    timestamps: false,
    indexes: [{ name: "l_s_no", fields: ["l_s_no"] }],
  },
);

LogUseCoupon.belongsTo(Shops, { foreignKey: "l_s_no", targetKey: "s_no" });
LogUseCoupon.belongsTo(Users, { foreignKey: "l_u_no", targetKey: "u_no" });
LogUseCoupon.belongsTo(ShopUsers, { foreignKey: "l_su_no", targetKey: "su_no" });

export default LogUseCoupon;
