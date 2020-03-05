import express from "express";
import apiController from "../controllers/api.controller";
import auth from "../middlewares/auth.middleware";

class ApiRoute {
  public ApiRouter: express.Router = express.Router();

  constructor() {
    this.router();
  }

  public router() {
    this.ApiRouter.get("/", apiController.index);
    this.ApiRouter.get("/authTest", auth.verify, apiController.authTest);
  }
}

const apiRoute: ApiRoute = new ApiRoute();

export default apiRoute;
