import express from "express";
import result from "./middlewares/result";

class App {
  public application: express.Application;

  constructor() {
    this.application = express();
    this.application.get("/", (req, res, next) => {
      res.send("hello world");
    });

    this.application.use(result.json.notFound);
    this.application.use(result.json.result);
  }
}

export default App;
