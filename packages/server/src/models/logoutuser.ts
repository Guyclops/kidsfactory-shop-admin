import { DataTypes, Model } from "sequelize";
import pool from ".";
import Shops from "./shops";
import Users from "./users";

const sequelize = pool.sequelize;

class LogOutUser extends Model {}

LogOutUser.init(
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
    l_coupon: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "정기권 갯수",
    },
    l_stamp: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "스탬프 갯수",
    },
    l_reg_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "등록일",
    },
    l_term1: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "시설물 이용 동의 내용",
    },
    l_reg_term1_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      comment: "시설물 이용 동의 날짜",
    },
  },
  {
    sequelize,
    tableName: "log_out_users",
    modelName: "log_out_users",
    timestamps: false,
  },
);

LogOutUser.belongsTo(Shops, { foreignKey: "l_s_no", targetKey: "s_no" });
LogOutUser.belongsTo(Users, { foreignKey: "l_u_no", targetKey: "u_no" });

export default LogOutUser;
