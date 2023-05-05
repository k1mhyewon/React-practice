import { isArray } from "util";
import { FormDataType } from "../main/register/type/FormDataType";

export class LocalStorageController {
  // LocalStorage 얻어옴
  static getLocalStorageList(): FormDataType[] {
    let userList = localStorage.getItem("userList");

    return userList != null ? (JSON.parse(userList) as FormDataType[]) : [];
  }

  // localStorage에 저장
  static saveLocalStorage(item: FormDataType[]): void {
    localStorage.setItem("userList", JSON.stringify(item));
  }
}
