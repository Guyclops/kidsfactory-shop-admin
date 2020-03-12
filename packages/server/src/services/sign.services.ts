import pool from "../models";

const { sequelize } = pool;

class SignService {
  async signIn(data: { id: string; password: string }) {
    const { id, password } = data;
    return await sequelize.query(
      {
        query: `SELECT * FROM shops WHERE s_id = ? AND s_pwd = PASSWORD(?)`,
        values: [id, password],
      },
      { raw: true, plain: true },
    );
  }
}

const signService = new SignService();
export default signService;
