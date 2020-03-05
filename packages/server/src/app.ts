import express from "express";
import result from "./middlewares/result.middleware";
import apiRoute from "./routes/api.route";

class App {
  public application: express.Application;

  constructor() {
    this.application = express();
    this.application.use(apiRoute.ApiRouter);

    this.application.use(result.json.notFound);
    this.application.use(result.json.result);
  }
}

export default App;
