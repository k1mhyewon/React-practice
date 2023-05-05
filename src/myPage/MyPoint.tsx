import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export const MyPoint = () => {
  return (
    <>
      <Box
        sx={{
          margin: "0 8%",
          width: "80%",
          border: "5px solid #e6e6e6",
          padding: "1% 1%",
        }}
      >
        <Typography>
          <Typography sx={{ display: "inline" }}>
            고객님께서는 포인트{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "20pt",
              fontWeight: "bold",
              color: "#e118a9",
              display: "inline",
            }}
          >
            55000 P
          </Typography>
          <Typography sx={{ display: "inline" }}>
            {" "}
            를 보유하고 있습니다.
          </Typography>
          <Typography>2023-06-16일 55000P가 소멸됩니다.</Typography>
        </Typography>
      </Box>
    </>
  );
};
