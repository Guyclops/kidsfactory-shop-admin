import { DataTypes, Model } from "sequelize";
import pool from ".";
import Shops from "./shops";

const sequelize = pool.sequelize;

class LogExpSms extends Model {}

LogExpSms.init(
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
    l_type: {
      type: DataTypes.ENUM("sms", "lms"),
      allowNull: false,
      defaultValue: "sms",
      comment: "문자 전송 타입",
    },
    l_count: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "문자 발송 수",
    },
    l_reg_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "등록일",
    },
  },
  {
    sequelize,
    tableName: "log_exp_sms",
    modelName: "log_exp_sms",
    timestamps: false,
  },
);

LogExpSms.belongsTo(Shops, { foreignKey: "l_s_no", targetKey: "s_no" });

export default LogExpSms;
