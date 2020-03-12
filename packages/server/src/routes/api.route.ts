import express from "express";
import apiController from "../controllers/api.controller";

class ApiRoute {
  public apiRouter: express.Router = express.Router();

  constructor() {
    this.router();
  }

  public router() {
    this.apiRouter.get("/", apiController.index);
    this.apiRouter.post("/signIn", apiController.postSignIn);
  }
}

const apiRoute: ApiRoute = new ApiRoute();

export default apiRoute;
