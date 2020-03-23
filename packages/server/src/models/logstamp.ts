import { DataTypes, Model } from "sequelize";
import pool from ".";
import Shops from "./shops";
import Users from "./users";
import ShopUsers from "./shopusers";
import Rooms from "./rooms";

const sequelize = pool.sequelize;

class LogStamp extends Model {}

LogStamp.init(
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
    l_type: {
      type: DataTypes.ENUM("add", "cancel", "gift", "add_pad", "minus_pad"),
      allowNull: false,
      comment: "로그 타입",
    },
    l_stamp: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "스탬프 갯수",
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
    l_sort: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "스탬프 발행 내역 정렬 순서",
    },
  },
  {
    sequelize,
    tableName: "log_stamp",
    modelName: "log_stamp",
    timestamps: false,
    indexes: [
      { name: "l_s_no", fields: ["l_s_no"] },
      { name: "l_u_no", fields: ["l_u_no"] },
      { name: "l_r_no", fields: ["l_r_no"] },
    ],
  },
);

LogStamp.belongsTo(Shops, { foreignKey: "l_s_no", targetKey: "s_no" });
LogStamp.belongsTo(Users, { foreignKey: "l_u_no", targetKey: "u_no" });
LogStamp.belongsTo(ShopUsers, { foreignKey: "l_su_no", targetKey: "su_no" });
LogStamp.belongsTo(Rooms, { foreignKey: "l_r_no", targetKey: "r_no" });

export default LogStamp;
