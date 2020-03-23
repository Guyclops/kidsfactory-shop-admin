import { DataTypes, Model } from "sequelize";
import pool from ".";
import Shops from "./shops";

const sequelize = pool.sequelize;

class Gifts extends Model {}

Gifts.init(
  {
    g_no: {
      type: DataTypes.INTEGER({ length: 11 }).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: "번호",
    },
    g_s_no: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "매장 번호",
    },
    g_name: {
      type: DataTypes.STRING(36),
      allowNull: false,
      comment: "쿠폰 이름",
    },
    g_type: {
      type: DataTypes.ENUM("default", "stamp"),
      allowNull: false,
      defaultValue: "default",
      comment: "쿠폰 타입(default : 문자쿠폰, stamp :스탬프 쿠폰)",
    },
    g_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "시작일",
    },
    g_finish_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "종료일",
    },
    g_send_count: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "발급 수량",
    },
    g_reg_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "등록일",
    },
  },
  {
    sequelize,
    tableName: "gifts",
    modelName: "gifts",
    timestamps: false,
  },
);

Gifts.belongsTo(Shops, { foreignKey: "g_s_no", targetKey: "s_no" });

export default Gifts;
