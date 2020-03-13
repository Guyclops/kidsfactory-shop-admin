import Rooms from "../models/rooms";

class RoomService {
  async getRooms(no) {
    return await Rooms.findAll({ where: { r_s_no: no, r_enable: 1 }, raw: true });
  }
}

const roomService = new RoomService();

export default roomService;
