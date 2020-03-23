import { DataTypes, Model } from "sequelize";
import pool from ".";
import Users from "./users";
import Shops from "./shops";
import ShopUsers from "./shopusers";
import UserGifts from "./usergifts";

const sequelize = pool.sequelize;

class LogStampGift extends Model {}

LogStampGift.init(
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
    l_type: {
      type: DataTypes.ENUM("add", "cancel"),
      allowNull: false,
      defaultValue: "add",
      comment: "add : 스탬프 쿠폰 발행, cancel : 취소(현재 사용하지 않음)",
    },
    l_ug_no: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "회원 쿠폰 번호",
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
  },
  {
    sequelize,
    tableName: "log_stamp_gift",
    modelName: "log_stamp_gift",
    timestamps: false,
    indexes: [
      { name: "l_s_no", fields: ["l_s_no"] },
      { name: "l_u_no", fields: ["l_u_no"] },
      { name: "l_r_no", fields: ["l_r_no"] },
    ],
  },
);

LogStampGift.belongsTo(Users, { foreignKey: "l_u_no", targetKey: "u_no" });
LogStampGift.belongsTo(Shops, { foreignKey: "l_s_no", targetKey: "s_no" });
LogStampGift.belongsTo(ShopUsers, { foreignKey: "l_su_no", targetKey: "su_no" });
LogStampGift.belongsTo(UserGifts, { foreignKey: "l_ug_no", targetKey: "ug_no" });

export default LogStampGift;
