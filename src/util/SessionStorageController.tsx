import { FormDataType } from "../main/register/type/FormDataType.type";

export class SessionStorageController {
  // LocalStorage 얻어옴
  getSessionStorage<T>(name: string): T {
    let sessionList = sessionStorage.getItem(name);

    return sessionList ? (JSON.parse(sessionList) as T) : ([] as T);
  }

  // localStorage에 저장
  saveSessionStorage<T>(name: string, item: T): void {
    sessionStorage.setItem(name, JSON.stringify(item));
  }
}
