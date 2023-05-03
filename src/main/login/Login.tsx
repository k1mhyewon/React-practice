import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const theme = createTheme();

export const Login = () => {
  const [isIdValid, setIsIdValid] = React.useState(false); // input id 입력값의 유효성을 나타내는 상태 변수 설정
  const [isPwdValid, setIsPwdValid] = React.useState(false); // input pwd 입력값의 유효성을 나타내는 상태 변수 설정
  const [isChecked, setIsChecked] = React.useState(false); // 아이디 저장 체크박스의 체크상태를 나타내는 상태 변수 설정

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userId = data.get("userId") as string;
    const password = data.get("password") as string;
    // data.get() 메서드는 반환 값이 string | null 이므로, 강제 형변환을 통해 string 타입으로 지정해준다.

    // 아이디 비밀번호 input 입력 상태 체크
    if (userId === "" && password !== "") {
      setIsIdValid(false);
      setIsPwdValid(true);
    } else if (userId !== "" && password === "") {
      setIsIdValid(true);
      setIsPwdValid(false);
    } else {
      setIsIdValid(true);
      setIsPwdValid(true);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    // <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 22,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="userId"
            label="아이디"
            name="userId"
            // autoComplete="userId"
            autoFocus
            error={!isIdValid}
            helperText={isIdValid ? "" : "아이디를 입력해주세요."}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
            error={!isPwdValid}
            helperText={isPwdValid ? "" : "비밀번호를 입력해주세요."}
          />
          <FormControlLabel
            control={
              <Checkbox
                value="idRemember"
                checked={isChecked}
                onChange={handleChange}
              />
            }
            label="아이디 저장"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            로그인
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                  비밀번호 찾기
                </Link> */}
            </Grid>
            <Grid item>
              {<Link to="/register">계정이 없다면?! 회원가입 하러 가기</Link>}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    // </ThemeProvider>
  );
};
