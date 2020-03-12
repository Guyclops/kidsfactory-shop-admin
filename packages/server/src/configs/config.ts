import dotenv from "dotenv";
import querystring from "querystring";

dotenv.config();

interface Config {
  type?: string;
  port?: string;
  jwt?: any;
  middleware?: { result?: string; morgan?: string };
  timezone?: string;
  database?: {
    host?: string;
    port?: number;
    user?: string;
    database?: string;
    password?: string;
    name?: string;
    connectionLimit?: number;
  };
  replication?: {
    host?: string;
    port?: number;
    database?: string;
    user?: string;
    password?: string;
    name?: string;
    connectionLimit?: number;
  };
}

const database = querystring.parse(process.env.KF_DATABASE);
const repDatabase = querystring.parse(process.env.KF_REPLICA_DATABASE);

const config: Config = {
  type: process.env.NODE_SERVER_TYPE,
  port: process.env.NODE_SERVER_PORT || "3000",
  jwt: {
    key: process.env.JWT_KEY,
  },
  middleware: {
    result: "json",
    morgan: ":date[iso][:status][:method] :url :response-time ms :res[content-length] bytes",
  },
  timezone: "Asia/Seoul",
  database: {
    host: String(database.host),
    port: Number(database.port),
    database: String(database.database),
    user: String(database.user),
    password: String(database.password),
    connectionLimit: Number(database.connectionlimit),
  },
  replication: {
    host: String(repDatabase.host),
    port: Number(repDatabase.port),
    database: String(repDatabase.database),
    user: String(repDatabase.user),
    password: String(repDatabase.password),
    connectionLimit: Number(repDatabase.connectionlimit),
  },
};

export default config;
