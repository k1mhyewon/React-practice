import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./userInfoStyle.css";
import { UserInfoValidCheck } from "./UserInfoValidCheck";
import { UserInfoChangePwd } from "./UserInfoChangePwd";

export const UserInfo = () => {
  const location = useLocation();
  const loginUserData = location.state.userData;

  const [isValid, setIsValid] = useState(false);

  return (
    <>
      <div>
        {isValid ? (
          <>
            <hr />
            <h3>회원 정보</h3>
            <div>
              <table className="member-info-table">
                <tbody>
                  <tr>
                    <td className="member-info-label">아이디</td>
                    <td className="member-info-value">
                      {loginUserData.userId}
                    </td>
                  </tr>
                  <tr>
                    <td className="member-info-label">이름</td>
                    <td className="member-info-value">
                      {loginUserData.userName}
                    </td>
                  </tr>
                  <tr>
                    <td className="member-info-label">포인트</td>
                    <td className="member-info-value">
                      {loginUserData.userPoint}P
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <UserInfoChangePwd loginUserData={loginUserData} />
            <hr />
          </>
        ) : (
          <>
            <UserInfoValidCheck
              loginUserData={loginUserData}
              setIsValid={setIsValid}
            />
          </>
        )}
      </div>
    </>
  );
};
