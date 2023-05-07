import { Box } from "@mui/material";
import { HomeCarousel } from "./Carousel";
import { X1Academy } from "./X1Academy";

export const HomeBody = () => {
  return (
    <>
      <Box sx={{ marginTop: 10 }}>
        <img src="https://www.x1.co.kr/attachfile/2022/03/60a4bf89-d47d-4fd6-984f-e5b2739df330.png" />
        {/* <HomeCarousel /> */}
        <X1Academy />
      </Box>
    </>
  );
};
