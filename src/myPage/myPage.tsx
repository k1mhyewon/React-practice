import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

export const MyPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const loginUserData = location.state.userData;

  useEffect(() => {
    if (!loginUserData) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div className="myPage-top" style={{ marginTop: "10%" }}>
        <div className="left" style={{ float: "left" }}>
          <img src="//img.x1.co.kr/x1/images/mypage/img_top.jpg" alt="" />
        </div>
        <ul className="right" style={{ float: "right", borderBottom: "none" }}>
          <li style={{ listStyle: "none" }}>
            <img
              src="//img.x1.co.kr/x1/images/mypage/img_top_customer.gif"
              alt=""
            />
          </li>
        </ul>
      </div>
      <Box>
        <Grid
          container
          spacing={2}
          sx={{
            margin: "20% 0 3% 0",
            // width: "80%",
          }}
        >
          <Grid
            item
            xs={2}
            sx={{
              border: "1px solid gray",
              textAlign: "center",
              padding: "0 1% 1% 0",
            }}
          >
            유료서비스 현황
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              border: "1px solid gray",
              textAlign: "center",
              padding: "0 1% 1% 0",
            }}
          >
            별사탕 현황
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              border: "1px solid gray",
              textAlign: "center",
              padding: "0 1% 1% 0",
            }}
          >
            <Link to="point" state={{ userData: loginUserData }}>
              포인트 현황
            </Link>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              border: "1px solid gray",
              textAlign: "center",
              padding: "0 1% 1% 0",
            }}
          >
            쿠폰 현황
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              border: "1px solid gray",
              textAlign: "center",
              padding: "0 1% 1% 0",
            }}
          >
            <Link to="userInfo" state={{ userData: loginUserData }}>
              회원정보
            </Link>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              border: "1px solid gray",
              textAlign: "center",
              padding: "0 1% 1% 0",
            }}
          >
            <Link to="deleteAccount" state={{ userData: loginUserData }}>
              회원탈퇴
            </Link>
          </Grid>
        </Grid>
        <Outlet />
      </Box>
    </>
  );
};
