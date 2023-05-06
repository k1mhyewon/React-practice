import "./App.css";
import { Header_X1 } from "./x1_header/Header";
import { NavMenu } from "./x1_header/NavMenu";
import { Login } from "./main/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeBody } from "./main/home/HomeBody";
import { Register } from "./main/register/Register";
import { MyPage } from "./myPage/myPage";
import { MyPoint } from "./myPage/MyPoint";
import { UserInfo } from "./myPage/UserInfo";

function App() {
  return (
    <BrowserRouter>
      <Header_X1 />
      <NavMenu />
      <Routes>
        <Route path="/" element={<HomeBody />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myPage" element={<MyPage />}>
          <Route path="point" element={<MyPoint />} />
          <Route path="userInfo" element={<UserInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
