interface StatusType {
  code: number;
  name: string;
  defaultMessage?: string;
}

class HttpStatus {
  public enabled: StatusType[];
  public disabled: StatusType[];
  public statusCode = {
    ok: 200,
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    internalServerError: 500,
    notImplemented: 501,
  };

  constructor() {
    this.enabled = [
      { code: 200, name: "ok" },
      { code: 400, name: "badRequest", defaultMessage: "잘못된 요청입니다." },
      { code: 401, name: "unauthorized", defaultMessage: "해당 API의 접근할 권한이 없습니다." },
      { code: 403, name: "forbidden", defaultMessage: "해당 API의 접근이 금지되었습니다." },
      { code: 404, name: "notFound", defaultMessage: "해당 API가 존재하지 않습니다." },
      { code: 500, name: "internalServerError", defaultMessage: "서버 오류가 발생했습니다." },
      { code: 501, name: "notImplemented", defaultMessage: "해당 API는 구현 예정입니다." },
      {
        code: 503,
        name: "serviceUnavailable",
        defaultMessage: "일시적인 서버 오류가 발생했습니다.",
      },
    ];
    this.disabled = [
      { code: 201, name: "created" },
      { code: 202, name: "accepted" },
      { code: 204, name: "noContent" },
      { code: 410, name: "gone", defaultMessage: "해당 API를 더 이상 지원하지 않습니다." },
    ];
  }
  is1xx = (code: number) => Math.floor(code / 100) === 1;
  is2xx = (code: number) => Math.floor(code / 100) === 2;
  is3xx = (code: number) => Math.floor(code / 100) === 3;
  is4xx = (code: number) => Math.floor(code / 100) === 4;
  is5xx = (code: number) => Math.floor(code / 100) === 5;
}

const httpStatus = new HttpStatus();

export default httpStatus;
