import { error } from "./result.core";

export function param(data, key, option = undefined) {
  if (data === null || data === undefined) throw error.badRequest(`파라미터 처리 오류입니다.`);
  if (Array.isArray(key)) {
    const errors = [];
    key.map(item => {
      if (data[item] === undefined) errors.push(item);
    });
    if (errors.length !== 0) {
      throw error.badRequest(
        `파라미터 처리 오류입니다. 해당 파라미터를 추가하여 요청해주세요(${JSON.stringify(
          errors,
        )})`,
      );
    } else {
      return data;
    }
  } else {
    if (data[key] === undefined) {
      if (option === undefined) {
        throw error.badRequest(
          `파라미터 처리 오류입니다. 해당 파라미터를 추가하여 요청해주세요(${key}).`,
        );
      } else if (typeof option === "function") {
        const value = option(data[key]);
        if (value === undefined) {
          throw error.badRequest(
            `파라미터 처리 오류입니다. 해당 파라미터를 추가하여 요청해주세요(${key}).`,
          );
        } else {
          return value;
        }
      } else {
        return option;
      }
    } else {
      if (typeof option === "function") {
        const value = option(data[key]);
        return value !== undefined ? value : data[key];
      }
    }
    return data[key];
  }
}
