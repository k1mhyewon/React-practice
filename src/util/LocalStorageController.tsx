import { isArray } from "util";
import { FormDataType } from "../main/register/type/FormDataType";

export class LocalStorageController {
  // LocalStorage 얻어옴
  static getLocalStorageList<T>(name: string): T {
    let localList = localStorage.getItem(name);

    return localList != null ? (JSON.parse(localList) as T) : ([] as T);
  }

  // localStorage에 저장
  static saveLocalStorage<T>(name: string, item: T): void {
    localStorage.setItem(name, JSON.stringify(item));
  }
}
