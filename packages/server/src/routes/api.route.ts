import express from "express";
import apiController from "../controllers/api.controller";
import auth from "../middlewares/auth.middleware";

class ApiRoute {
  public apiRouter: express.Router = express.Router();

  constructor() {
    this.router();
  }

  public router() {
    this.apiRouter.get("/", apiController.index);
    this.apiRouter.get("/authTest", auth.verify, apiController.authTest);
    this.apiRouter.get("/shops", apiController.getShops);
  }
}

const apiRoute: ApiRoute = new ApiRoute();

export default apiRoute;
