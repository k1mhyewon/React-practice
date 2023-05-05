import { Box, Grid, Typography } from "@mui/material";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import { MyPoint } from "./MyPoint";

export const MyPage = () => {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          margin: "20% 8% 3% 8%",
          width: "80%",
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
          <Link to="point">포인트 현황</Link>
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
          회원정보
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
          상담내역
        </Grid>
      </Grid>
      <Outlet />
    </Box>
  );
};
