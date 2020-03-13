import express from "express";
import result from "./middlewares/result.middleware";
import apiRoute from "./routes/api.route";
import morgan from "morgan";
import config from "./configs/config";
import moment from "moment-timezone";
import pool from "./models";

moment.tz.setDefault(config.timezone);
morgan.token("date", () => moment().format("YYYY-MM-DD HH:mm:ss"));
pool.connectionTest();

class App {
  public application: express.Application;

  constructor() {
    this.application = express();
    this.application.use(express.json());
    this.application.use(express.urlencoded({ extended: false }));
    this.application.use(morgan(config.middleware.morgan));
    this.application.use(apiRoute.apiRouter);
    this.application.use(result[config.middleware.result].notFound);
    this.application.use(result[config.middleware.result].result);
  }
}

export default App;
