import dotenv from "dotenv";

dotenv.config();

interface Config {
  port?: string;
  jwt?: any;
  middleware?: object;
}

const config: Config = {
  port: process.env.PORT || "3000",
  jwt: {
    key: process.env.JWT_KEY,
  },
  middleware: {
    result: "json",
  },
};

export default config;
