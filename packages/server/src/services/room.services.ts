import table from "../models/table";

const { Rooms, Users, Shops } = table;

class RoomService {
  async getRooms(no) {
    return await Rooms.findAll({
      include: [
        {
          model: Users,
          as: "user",
          attributes: ["u_phone"],
        },
        {
          model: Shops,
          as: "shop",
          attributes: ["s_name"],
        },
      ],
      where: { r_s_no: no, r_enable: 1 },
    });
  }
}

const roomService = new RoomService();

export default roomService;
