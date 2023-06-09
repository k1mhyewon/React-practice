import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { LoginController } from "./LoginController";
import { FormDataType } from "../register/type/FormDataType.type";
import { SessionStorageController } from "../../util/SessionStorageController";
// import { Redirect } from "react-router-dom";

const loginController = new LoginController();
const sessionStorageController = new SessionStorageController();

export const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loginUser =
      sessionStorageController.getSessionStorage<FormDataType>("loginUser");
    if (loginUser.id) {
      navigate("/");
    }
  }, []);

  const [isUserIdValid, setIsUserIdValid] = React.useState(false); // input id 입력값의 유효성을 나타내는 상태 변수 설정
  const [isPasswordValid, setIsPasswordValid] = React.useState(false); // input pwd 입력값의 유효성을 나타내는 상태 변수 설정
  const [idIdSaveChecked, setIsIdSaveChecked] = React.useState(false); // 아이디 저장 체크박스의 체크상태를 나타내는 상태 변수 설정

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "userId") {
      setUserId(value);
      setIsUserIdValid(Boolean(value));
    } else if (name === "password") {
      setPassword(value);
      setIsPasswordValid(Boolean(value));
    }
  };

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsIdSaveChecked(event.target.checked);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userId = data.get("userId") as string;
    const password = data.get("password") as string;
    // data.get() 메서드는 반환 값이 string | null 이므로, 강제 형변환을 통해 string 타입으로 지정해준다.

    const user: FormDataType | null = loginController.userExistCheck(
      userId,
      password
    );

    if (user) {
      loginController.saveUserToSession(user); // 로그인 유저정보 세션에 저장
      const bool = loginController.isUserSaveSucceed(user); // 세션에 잘 저장됐는지 확인
      if (bool) {
        navigate("/");
        window.location.reload();
      }
    } else {
      alert("존재하지 않는 회원입니다.");
    }
  };

  return (
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
            onChange={handleInputChange}
            autoFocus
            error={!isUserIdValid}
            helperText={isUserIdValid ? "" : "아이디를 입력해주세요."}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            onChange={handleInputChange}
            error={!isPasswordValid}
            helperText={isPasswordValid ? "" : "비밀번호를 입력해주세요."}
          />
          <FormControlLabel
            control={
              <Checkbox
                value="idSave"
                checked={idIdSaveChecked}
                onChange={handleCheckChange}
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
            <Grid item>{<Link to="/register">회원가입 하러 가기</Link>}</Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    // </ThemeProvider>
  );
};
