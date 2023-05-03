import { Box } from "@mui/material";
import { HomeCarousel } from "./Carousel";
import { X1Academy } from "./X1Academy";

export const HomeBody = () => {
  return (
    <>
      <Box sx={{ marginTop: 10 }}>
        <HomeCarousel />
        <X1Academy />
      </Box>
    </>
  );
};
