import { DataTypes, Model } from "sequelize";
import pool from ".";
import Shops from "./shops";
import Users from "./users";

const sequelize = pool.sequelize;

class Rooms extends Model {}

Rooms.init(
  {
    r_no: {
      type: DataTypes.INTEGER({ length: 11 }).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: "룸 번호",
    },
    r_s_no: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "매장 번호",
    },
    r_u_no: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "회원 번호",
    },
    r_adult: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "입장 중 어른수",
    },
    r_child: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "입장 중 아이수",
    },
    r_before_min: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "선택한 시간",
    },
    r_before_name: {
      type: DataTypes.STRING(22),
      allowNull: false,
      comment: "선택한 시간명",
    },
    r_in_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "입장 시간",
    },
    r_out_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "퇴장 시간",
    },
    r_use_min: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "사용 시간",
    },
    r_memo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "메모",
    },
    r_child_name: {
      type: DataTypes.STRING(22),
      allowNull: false,
      comment: "아이 이름",
    },
    r_child_index: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
      defaultValue: 0,
      comment: "아이 번호",
    },
    r_enable: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
      defaultValue: 1,
      comment: "1: 입장, 0: 퇴장",
    },
  },
  {
    sequelize,
    modelName: "rooms",
    tableName: "rooms",
    timestamps: false,
    indexes: [
      { name: "r_s_no", fields: ["r_s_no"] },
      { name: "r_u_no", fields: ["r_u_no"] },
      { name: "r_enable", fields: ["r_enable"] },
    ],
  },
);

Rooms.belongsTo(Shops, { foreignKey: "r_s_no", targetKey: "s_no", as: "shop" });
Rooms.belongsTo(Users, { foreignKey: "r_u_no", targetKey: "u_no", as: "user" });

export default Rooms;
