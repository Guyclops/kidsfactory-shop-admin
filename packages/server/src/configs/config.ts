import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || "3000";

interface Config {
  port?: string;
}

const config: Config = {
  port,
};

export default config;
