import express from "express";
import { success } from "../cores/result.core";
class ApiController {
  public index = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      next(success.ok("hello world3"));
    } catch (e) {
      next(e);
    }
  };

  public authTest = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      next(success.ok("auth ok"));
    } catch (e) {
      next(e);
    }
  };
}

const apiController: ApiController = new ApiController();
export default apiController;
