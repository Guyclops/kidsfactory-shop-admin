import { error } from "../cores/result";
import httpStatus from "../configs/httpStatus";

const { statusCode } = httpStatus;

const result = {
  json: {
    notFound: (req, res, next) => {
      next(error.notFound?.());
    },
    result: (data, req, res, next) => {
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
