import { Container, Paper } from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import Carousel from "react-material-ui-carousel";

const items: string[] = [
  "첫번째 글",
  "두번째 글",
  "세번째 글",
  "네번째 글",
  "다섯번째 글",
  "여섯번째 글",
];

export const HomeCarousel = () => {
  const groupedList = useMemo(() => {
    const groups: string[][] = [];
    for (let i = 0; i < items.length; i += 3) {
      groups.push(items.slice(i, i + 3));
    }
    return groups;
  }, []);

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSlideIndex((slideIndex + 1) % items.length);
    }, 3000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [slideIndex]);

  return (
    <>
      <Container sx={{ backgroundColor: "#fff7e6", height: "200px" }}>
        {groupedList.map((group, i) => (
          <Carousel index={i}>
            {group.map((item, j) => (
              <Paper key={j}>{item}</Paper>
            ))}
          </Carousel>
        ))}
      </Container>
    </>
  );
};
