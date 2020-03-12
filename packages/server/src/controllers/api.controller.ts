import { Request, Response, NextFunction } from "express";
import { success } from "../cores/result.core";
// import pool from '../models';
import table from "../models/table";
// const { sequelize } = pool;

class ApiController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      next(success.ok("hello world3"));
    } catch (e) {
      next(e);
    }
  };

  public authTest = (req: Request, res: Response, next: NextFunction) => {
    try {
      next(success.ok("auth ok"));
    } catch (e) {
      next(e);
    }
  };

  public getShops = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await table.Shops.findOne({ where: { s_no: 2 }, raw: true });
      next(success.ok(result));
    } catch (e) {
      next(e);
    }
  };
}

const apiController: ApiController = new ApiController();
export default apiController;
