import React from "react";
import "./App.css";
import { Header_X1 } from "./x1_header/Header";
import { NavMenu } from "./x1_header/NavMenu";
import { Login } from "./main/login/Login";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { HomeBody } from "./main/home/HomeBody";
import { Register } from "./main/register/Register";
import { MyPage } from "./myPage/myPage";

function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(

  //   )
  // )

  return (
    <BrowserRouter>
      <Header_X1 />
      <NavMenu />
      <Routes>
        <Route path="/home" element={<HomeBody />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
