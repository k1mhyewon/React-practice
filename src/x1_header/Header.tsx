import React, { useState } from "react";
import imgLogo from "../../src/images/logo_x1.png";
import FaceIcon from "@mui/icons-material/Face";
import PaidIcon from "@mui/icons-material/Paid";
import { MenuData } from "./interface/InterMenu";
import { Login } from "../main/login/Login";
import {
  Link,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "../headerStyle.css";

export const Header_X1 = () => {
  // const mouseEvent = (menuName: MenuList, bool: boolean) => {
  //   const change = { ...hide };
  //   change[menuList] = bool;
  //   setHide(change);
  // };

  // const handleLogin = () => {
  //   return <div>login ok</div>;
  // };

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="login" element={<Login />}>
  //       {/* <Route path="login" element={<Login />} /> */}
  //     </Route>
  //   )
  // );

  return (
    <>
      <header>
        <div className="logo">
          <Link to="/home">
            <img src={imgLogo} className="" alt="logo"></img>
          </Link>
        </div>
        <div className="buttons">
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
          <Link to="/myPage">
            <FaceIcon style={{ fill: "#e118a9", marginLeft: "8px" }}></FaceIcon>
          </Link>
          <PaidIcon style={{ fill: "#e118a9", marginLeft: "5px" }}></PaidIcon>
        </div>
      </header>
    </>
  );
};
