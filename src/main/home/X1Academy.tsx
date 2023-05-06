import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Card, CardActions, CardContent } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const X1Academy = () => {
  return (
    <Box sx={{ marginTop: 10 }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          {/* <Item>xs=4</Item> */}
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              {/* <Typography>Word of the Day</Typography> */}
              <img
                src="//img.x1.co.kr/x1/images/popup/home_bannerelskf99"
                className=""
                alt="logo"
              ></img>
            </CardContent>
            <CardActions>
              <Button size="small">자세히 보기</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <img
                src="//img.x1.co.kr/x1/images/popup/home_bannergaaaa11"
                className=""
                alt="logo"
              ></img>
            </CardContent>
            <CardActions>
              <Button size="small">자세히 보기</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <img
                src="//img.x1.co.kr/x1/images/popup/home_bannergaaaa11"
                className=""
                alt="logo"
              ></img>
            </CardContent>
            <CardActions>
              <Button size="small">자세히 보기</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
