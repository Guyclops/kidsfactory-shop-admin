import { DataTypes, Model } from "sequelize";
import pool from ".";
import Shops from "./shops";
import Users from "./users";
import LogBuyCoupon from "./logbuycoupon";

const sequelize = pool.sequelize;

class ExpireDateCoupon extends Model {}

ExpireDateCoupon.init(
  {
    e_no: {
      type: DataTypes.INTEGER({ length: 11 }).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: "번호",
    },
    e_s_no: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "매장 번호",
    },
    e_u_no: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "회원 번호",
    },
    e_coupon: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "남은 정기권 수",
    },
    e_buy_l_no: {
      type: DataTypes.INTEGER({ length: 11 }),
      allowNull: false,
      comment: "정기권 구매 번호",
    },
    e_exp_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "정기권 만료일",
    },
    e_update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "만료일 수정일",
    },
    e_enable: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
      defaultValue: 1,
      comment: "사용 유무",
    },
  },
  {
    sequelize,
    tableName: "expire_date_coupon",
    modelName: "expire_date_coupon",
    timestamps: false,
  },
);

ExpireDateCoupon.belongsTo(Shops, { foreignKey: "e_s_no", targetKey: "s_no", as: "shop" });
ExpireDateCoupon.belongsTo(Users, { foreignKey: "e_u_no", targetKey: "u_no", as: "user" });
ExpireDateCoupon.belongsTo(LogBuyCoupon, {
  foreignKey: "l_buy_l_no",
  targetKey: "l_no",
  as: "log_buy_coupon",
});

export default ExpireDateCoupon;
