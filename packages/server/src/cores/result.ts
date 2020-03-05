import httpStatus from "../configs/httpStatus";

export interface Success {
  type?: string;
  code: number;
  message?: string;
  object?: any;
}

export interface Err {
  type?: string;
  code: number;
  status: string;
  message: string;
  custom: boolean;
}

interface SuccessType {
  ok?: Function;
}

interface ErrorType {
  badRequest?: Function;
  unauthorized?: Function;
  forbidden?: Function;
  notFound?: Function;
  internalServerError?: Function;
  notImplemented?: Function;
  serviceUnavailable?: Function;
}

class Result {
  public success: SuccessType = {};
  public error: ErrorType = {};

  constructor() {
    httpStatus.enabled.map(item => {
      const { code, name, defaultMessage } = item;
      if (httpStatus.is2xx(code)) {
        this.success[name] = (obj: any = null) => this.customSuccess(code, obj);
      } else if (httpStatus.is4xx(code) || httpStatus.is5xx(code)) {
        this.error[name] = (message: string) =>
          this.customError(code, name, message ? message : defaultMessage);
      }
    });
  }

  customSuccess = (code: number, obj?: any) => {
    const success: Success = {
      type: "Success",
      code,
      object: obj,
    };
    return success;
  };

  customError = (code: number, status: string, message = "") => {
    const err: Err = {
      type: "Error",
      code,
      status,
      message,
      custom: true,
    };
    return err;
  };
}

const result = new Result();

export const success = result.success;
export const error = result.error;
