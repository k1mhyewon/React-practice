import { useEffect, useState } from "react";
import { SessionStorageController } from "../util/SessionStorageController";
import { FormDataType } from "../main/register/type/FormDataType.type";
import { useLocation } from "react-router-dom";

const sessionStorageController = new SessionStorageController();

export const UserInfo = () => {
  const location = useLocation();
  const loginUserData = location.state.userData;

  const [password, setPassword] = useState<string>("");
  const [isValid, setIsValid] = useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmClick = () => {
    if (password === loginUserData.password) {
      setIsValid(true);
    }
  };

  return (
    <>
      <div>
        {isValid ? (
          <>
            <div>아이디: {loginUserData.userId}</div>
            <div>이름: {loginUserData.userName}</div>
            <div>포인트: {loginUserData.userPoint}P</div>
          </>
        ) : (
          <>
            <div>아이디: {loginUserData.userId}</div>
            <div>
              비밀번호:{" "}
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button onClick={handleConfirmClick}>확인</button>
          </>
        )}
      </div>
    </>
  );
};
