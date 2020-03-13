import Shops from "./shops";
import Rooms from "./rooms";
import Users from "./users";

const table = {
  Shops,
  Rooms,
  Users,
};

Shops.hasMany(Rooms, { foreignKey: "r_s_no", sourceKey: "s_no", as: "shop" });
Users.hasMany(Rooms, { foreignKey: "r_u_no", sourceKey: "u_no", as: "user" });
Rooms.belongsTo(Shops, { foreignKey: "r_s_no", targetKey: "s_no", as: "shop" });
Rooms.belongsTo(Users, { foreignKey: "r_u_no", targetKey: "u_no", as: "user" });

export default table;
