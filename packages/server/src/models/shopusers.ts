import { DataTypes, Model } from "sequelize";
import pool from ".";
import Shops from "./shops";
import Users from "./users";

const sequelize = pool.sequelize;

class ShopUsers extends Model {}

ShopUsers.init(
  {
    su_no: {
      type: DataTypes.INTEGER({ length: 11 }).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: "매장 회원 번호",
    },
    su_s_no: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "매장 번호",
    },
    su_u_no: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "회원 번호",
    },
    su_coupon: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "정기권 수",
    },
    su_stamp: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "스탬프 수",
    },
    su_memo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "기록",
    },
    su_is_show_memo: {
      type: DataTypes.ENUM("on", "off"),
      allowNull: false,
      defaultValue: "off",
      comment: "기록 숨김 여부",
    },
    su_name: {
      type: DataTypes.STRING(22),
      allowNull: false,
      comment: "부모 이름",
    },
    su_child_name: {
      type: DataTypes.STRING(22),
      allowNull: false,
      comment: "아이이름 1",
    },
    su_child_name2: {
      type: DataTypes.STRING(22),
      allowNull: false,
      comment: "아이이름 2",
    },
    su_child_name3: {
      type: DataTypes.STRING(22),
      allowNull: false,
      comment: "아이이름 3",
    },
    su_birth: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "아이생일 1",
    },
    su_birth2: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "아이생일 2",
    },
    su_birth3: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "아이생일 3",
    },
    su_is_sms: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
      defaultValue: 1,
      comment: "문자 수신 여부",
    },
    su_last_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "마지막 입장일",
    },
    su_last_child: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
      defaultValue: 0,
      comment: "마지막 아이 선택 번호",
    },
    su_nosms_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "마지막 수신 거부 날짜",
    },
    su_status_term1: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      defaultValue: 0,
      comment: "시설물 이용 약관 동의 여부",
    },
    su_reg_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "가입일",
    },
    su_term1: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "시설물 이용 약관",
    },
    su_reg_term1_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: "약관 동의일",
    },
    su_visit_count: {
      type: DataTypes.INTEGER({ length: 11 }).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "누적 방문일",
    },
    su_quote: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      comment: "나만의 메모",
    },
    su_stare: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
      defaultValue: 0,
      comment: "좋아요 표시",
    },
  },
  {
    sequelize,
    modelName: "shop_users",
    tableName: "shop_users",
    timestamps: false,
    indexes: [
      { name: "su_s_no", fields: ["su_s_no", "su_u_no"] },
      { name: "su_u_no", fields: ["su_u_no"] },
      { name: "su_visit_count", fields: ["su_visit_count"] },
      { name: "su_s_stamp_voucher", fields: ["su_s_no", "su_u_no", "su_stamp", "su_coupon"] },
    ],
  },
);

ShopUsers.belongsTo(Shops, { foreignKey: "su_s_no", targetKey: "s_no", as: "shop" });
ShopUsers.belongsTo(Users, { foreignKey: "su_u_no", targetKey: "u_no", as: "user" });

export default ShopUsers;
