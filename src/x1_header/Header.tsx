import { useEffect, useState } from "react";
import imgLogo from "../../src/images/logo_x1.png";
import FaceIcon from "@mui/icons-material/Face";
import PaidIcon from "@mui/icons-material/Paid";
import { Link, useNavigate } from "react-router-dom";
import "../headerStyle.css";
import { SessionStorageController } from "../util/SessionStorageController";
import { FormDataType } from "../main/register/type/FormDataType";

const sessionStorageController = new SessionStorageController();
export const Header_X1 = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const loginUser =
      sessionStorageController.getSessionStorage<FormDataType>("loginUser");

    if (loginUser.id) {
      setIsLoggedIn(true);
      setUserName(loginUser.userName);
    } else {
      setIsLoggedIn(false);
      setUserName("");
    }
  }, []);

  return (
    <>
      <header>
        <div className="logo">
          <Link to="/home">
            <img src={imgLogo} className="" alt="logo"></img>
          </Link>
        </div>
        <div className="buttons">
          {isLoggedIn ? (
            <>
              <span style={{}}>{userName}님</span>
              <button
                className="logout-btn"
                onClick={() => {
                  sessionStorage.removeItem("loginUser");
                  setIsLoggedIn(false);
                  navigate("/home");
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

          <Link to="/myPage">
            <FaceIcon style={{ fill: "#e118a9" }}></FaceIcon>
          </Link>

          <PaidIcon style={{ fill: "#e118a9", marginLeft: "5px" }}></PaidIcon>
        </div>
      </header>
    </>
  );
};
