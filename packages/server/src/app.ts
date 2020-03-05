import express from "express";

class App {
  public application: express.Application;

  constructor() {
    this.application = express();
    this.application.get("/", (req, res, next) => {
      res.send("hello world");
    });
  }
}

export default App;
