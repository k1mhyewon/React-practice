import "../headerStyle.css";
import { useEffect, useState } from "react";
import imgLogo from "../../src/images/logo_x1.png";
import FaceIcon from "@mui/icons-material/Face";
import PaidIcon from "@mui/icons-material/Paid";
import { Link, useNavigate } from "react-router-dom";
import { SessionStorageController } from "../util/SessionStorageController";
import { FormDataType } from "../main/register/type/FormDataType.type";

const sessionStorageController = new SessionStorageController();
export const Header_X1 = () => {
  const navigate = useNavigate();

  const [loginUserData, setLoginUserData] = useState<FormDataType | null>(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginUser =
      sessionStorageController.getSessionStorage<FormDataType>("loginUser");

    if (loginUser.id) {
      setIsLoggedIn(true);
      setLoginUserData(loginUser);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">
            <img src={imgLogo} className="" alt="logo"></img>
          </Link>
        </div>
        <div className="buttons">
          {isLoggedIn ? (
            <>
              <span style={{}}>{loginUserData!.userName}님&nbsp;|&nbsp;</span>
              <button
                className="logout-btn"
                onClick={() => {
                  sessionStorage.removeItem("loginUser");
                  setIsLoggedIn(false);
                  navigate("/");
                }}
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <button className="login-btn">
                <Link
                  to="/login"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  로그인
                </Link>
              </button>

              <button className="signup-btn">
                <Link
                  to="/register"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  회원가입
                </Link>
              </button>
            </>
          )}

          <Link to="/myPage" state={{ userData: loginUserData }}>
            <FaceIcon style={{ fill: "#e118a9" }}></FaceIcon>
          </Link>
          <Link to="/myPage/point" state={{ userData: loginUserData }}>
            <PaidIcon style={{ fill: "#e118a9", marginLeft: "5px" }}></PaidIcon>
          </Link>
        </div>
      </header>
    </>
  );
};
