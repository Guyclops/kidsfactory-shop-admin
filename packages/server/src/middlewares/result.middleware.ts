import { error } from "../cores/result.core";
import httpStatus from "../configs/httpStatus";
import { Request, Response, NextFunction } from "express";

const { statusCode } = httpStatus;

const result = {
  json: {
    notFound: (req: Request, res: Response, next: NextFunction) => {
      next(error.notFound());
    },
    result: (data: any, req: Request, res: Response, next: NextFunction) => {
      if (data?.type === "Success") {
        res.status(data.code).send(data.object);
      } else {
        let code = statusCode.internalServerError;
        let message = "";
        let custom = false;

        if (data?.type === "Error") {
          code = data.code || statusCode.internalServerError;
          custom = data.custom || false;
          message = data.message;
        } else {
          message = `${data}`;
        }
        res.status(code).send({ code, message, custom });
      }
    },
  },
};

export default result;
