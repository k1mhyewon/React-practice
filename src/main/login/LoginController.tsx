import { LocalStorageController } from "../../util/LocalStorageController";
import { FormDataType } from "../register/type/FormDataType.type";
import { SessionStorageController } from "../../util/SessionStorageController";

const sessionStorageController = new SessionStorageController();
export class LoginController {
  // 로그인 버튼 누르고 나서 id와 pw가 일치하는 user가 존재하는지 확인
  userExistCheck(userId: string, password: string): FormDataType | null {
    let userList: FormDataType[] =
      LocalStorageController.getLocalStorageList<FormDataType[]>("userList") ??
      [];

    const foundData = userList.find(
      (data) => data.userId === userId && data.password === password
    );
    if (foundData) {
      return foundData;
    } else {
      return null;
    }
  }

  // 존재하는 user라면 sessionStorage에 로그인 회원정보 넣어주기
  saveUserToSession(user: FormDataType) {
    sessionStorageController.saveSessionStorage<FormDataType>(
      "loginUser",
      user
    );
  }

  isUserSaveSucceed(user: FormDataType): boolean {
    let result = false;
    let sessionUser: FormDataType =
      sessionStorageController.getSessionStorage<FormDataType>("loginUser");

    if (user.id === sessionUser.id) {
      result = true;
    }

    return result;
  }
}
