import { DataTypes, Model } from "sequelize";
import pool from ".";

const sequelize = pool.sequelize;

class Users extends Model {}

Users.init(
  {
    u_no: {
      type: DataTypes.INTEGER({ length: 11 }).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: "회원 번호",
    },
    u_id: {
      type: DataTypes.STRING(8),
      allowNull: false,
      comment: "유니크 아이디",
    },
    u_phone: {
      type: DataTypes.STRING(13),
      allowNull: false,
      comment: "전화번호",
    },
    u_name: {
      type: DataTypes.STRING(22),
      allowNull: false,
      comment: "이름",
    },
    u_child_name: {
      type: DataTypes.STRING(22),
      allowNull: false,
      comment: "아이 이름(사용 안함)",
    },
    u_birth: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "생일",
    },
    u_is_sms: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
      defaultValue: 1,
      comment: "문자 수신여부",
    },
    u_reg_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "가입일",
    },
    u_nosms_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "수신거부일",
    },
    u_enable: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
      defaultValue: 1,
      comment: "탈퇴 여부",
    },
    u_email: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "이메일",
    },
    u_password: {
      type: DataTypes.BLOB,
      allowNull: true,
      comment: "비밀번호",
    },
    u_access_code: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      comment: "인증코드",
    },
    u_sns_type: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "SNS 종류",
    },
    u_suggested_code: {
      type: DataTypes.STRING(6),
      allowNull: false,
      comment: "추천인 코드",
    },
  },
  {
    sequelize,
    modelName: "users",
    tableName: "users",
    timestamps: false,
    indexes: [
      { name: "u_suggested_code", fields: ["u_suggested_code"] },
      { name: "u_id", fields: ["u_id"] },
      { name: "u_phone", fields: ["u_phone"] },
    ],
  },
);

export default Users;
