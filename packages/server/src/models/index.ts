import { Sequelize } from "sequelize";
import config from "../configs/config";

const { type, database, replication } = config;

class Pool {
  public sequelize: Sequelize;

  constructor() {
    this.sequelize = new Sequelize(database.database, null, null, {
      dialect: "mysql",
      port: database.port,
      logging: type !== "production" ? console.log : false,
      dialectOptions: {
        dateStrings: true,
        typeCast: true,
        decimalNumbers: true,
      },
      timezone: "+09:00",
      pool: {
        max: database.connectionLimit,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      replication: {
        read: [
          { host: replication.host, username: replication.user, password: replication.password },
        ],
        write: { host: database.host, username: database.user, password: database.password },
      },
    });
  }

  connectionTest = async () => {
    try {
      await this.sequelize.authenticate();
      console.log("DATABASE CONNECTION SUCCESS");
    } catch (e) {
      console.log("DATABASE CONNECTION FAIL", e);
    }
  };
}

const pool: Pool = new Pool();

export default pool;
