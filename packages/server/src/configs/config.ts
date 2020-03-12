import dotenv from "dotenv";

dotenv.config();

interface Config {
  port?: string;
  jwt?: any;
  middleware?: { result?: string; morgan?: string };
  timezone?: string;
}

const config: Config = {
  port: process.env.PORT || "3000",
  jwt: {
    key: process.env.JWT_KEY,
  },
  middleware: {
    result: "json",
    morgan: ":date[iso][:status][:method] :url :response-time ms :res[content-length] bytes",
  },
  timezone: "Asia/Seoul",
};

export default config;
