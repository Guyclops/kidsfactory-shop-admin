import { DataTypes, Model } from "sequelize";
import pool from ".";

const sequelize = pool.sequelize;

class LogVisits extends Model {}

LogVisits.init(
  {
    l_no: {
      type: DataTypes.INTEGER({ length: 11 }).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: "입장 로그 번호",
    },
    l_s_no: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "매장 번호",
    },
    l_u_no: {
      type: DataTypes.TINYINT({ length: 11 }),
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
    l_adult: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "어른수",
    },
    l_child: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "아이수",
    },
    l_type: {
      type: DataTypes.ENUM("in", "outpart", "outall"),
      allowNull: false,
      defaultValue: "in",
      comment: "in: 입장, outpart: 일부퇴장, outall: 전체퇴장",
    },
    l_use_coupon_count: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      defaultValue: 0,
      comment: "사용된 정기권 수",
    },
    l_use_min: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "사용 시간",
    },
    l_over_min: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "초과 시간",
    },
    l_before_min: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "입장 시 선택된 시간",
    },
    l_before_name: {
      type: DataTypes.STRING(22),
      allowNull: false,
      comment: "입장 시 선택된 시간명",
    },
    l_child_name: {
      type: DataTypes.STRING(22),
      allowNull: false,
      comment: "대표 아이 이름",
    },
    l_reg_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "로그 등록일",
    },
  },
  {
    sequelize,
    modelName: "log_visit",
    tableName: "log_visit",
    timestamps: false,
    indexes: [
      { name: "sum_index", fields: ["l_s_no", "l_type", "l_adult", "l_child", "l_reg_date"] },
      { name: "l_u_no", fields: ["l_u_no"] },
      { name: "l_r_no", fields: ["l_r_no"] },
      { name: "l_su_no", fields: ["l_su_no"] },
      { name: "l_s_no", fields: ["l_s_no"] },
      { name: "l_reg_date", fields: ["l_reg_date"] },
    ],
  },
);

export default LogVisits;
