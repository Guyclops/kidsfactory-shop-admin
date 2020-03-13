import Shops from "./shops";
import Rooms from "./rooms";
import Users from "./users";
import LogVisits from "./logvisit";

const table = {
  Shops,
  Rooms,
  Users,
  LogVisits,
};

Shops.hasMany(Rooms, { foreignKey: "r_s_no", sourceKey: "s_no", as: "room" });
Users.hasMany(Rooms, { foreignKey: "r_u_no", sourceKey: "u_no", as: "room" });
Rooms.belongsTo(Shops, { foreignKey: "r_s_no", targetKey: "s_no", as: "shop" });
Rooms.belongsTo(Users, { foreignKey: "r_u_no", targetKey: "u_no", as: "user" });

Shops.hasMany(LogVisits, { foreignKey: "l_s_no", sourceKey: "s_no", as: "log_visit" });
Users.hasMany(LogVisits, { foreignKey: "l_u_no", sourceKey: "u_no", as: "log_visit" });
Rooms.hasMany(LogVisits, { foreignKey: "l_r_no", sourceKey: "r_no", as: "log_visit" });
LogVisits.belongsTo(Shops, { foreignKey: "l_s_no", targetKey: "s_no", as: "shop" });
LogVisits.belongsTo(Users, { foreignKey: "l_u_no", targetKey: "u_no", as: "user" });
LogVisits.belongsTo(Rooms, { foreignKey: "l_r_no", targetKey: "r_no", as: "room" });

export default table;
