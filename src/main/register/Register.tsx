import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import { useState } from "react";
import { LocalStorageController } from "../../util/LocalStorageController";
import { FormDataType } from "./type/FormDataType.type";
import React from "react";

export const Register = () => {
  const navigate = useNavigate();

  const [isUserNameValid, setIsUserNameValid] = useState(false);
  const [isUserIdValid, setIsUserIdValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordCheckValid, setIsPasswordCheckValid] = useState(false);

  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "userName":
        setUserName(value);
        setIsUserNameValid(Boolean(value));
        break;
      case "userId":
        setUserId(value);
        setIsUserIdValid(Boolean(value));
        break;
      case "password":
        setPassword(value);
        setIsPasswordValid(Boolean(value));
        break;
      case "passwordCheck":
        setPasswordCheck(value);
        setIsPasswordCheckValid(value === password);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const userName = formData.get("userName")?.toString() || "";
    const userId = formData.get("userId")?.toString() || "";
    const password = formData.get("password")?.toString() || "";
    const passwordCheck = formData.get("passwordCheck")?.toString() || "";

    if (
      isUserNameValid &&
      isUserIdValid &&
      isPasswordValid &&
      isPasswordCheckValid
    ) {
      // console.log("check");
      let n_id: number = 0;
      let point: string = "50000";

      let userData: FormDataType = {
        id: n_id.toString(),
        userName: userName,
        userId: userId,
        password: password,
        userPoint: point,
      };

      let userList: FormDataType[] =
        LocalStorageController.getLocalStorageList<FormDataType[]>(
          "userList"
        ) ?? [];

      if (userList.length > 0) {
        n_id = parseInt(userList[userList.length - 1].id) + 1;
        userData.id = n_id.toString();
      }

      userList.push(userData);
      LocalStorageController.saveLocalStorage<FormDataType[]>(
        "userList",
        userList
      );

      navigate("/login");
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
          회원가입
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="userName"
                required
                fullWidth
                id="userName"
                label="성명"
                autoFocus
                // value={userName}
                onChange={handleInputChange}
                error={!isUserNameValid}
                helperText={isUserNameValid ? "" : "필수 입력 항목입니다."}
              />
            </Grid>
            <Grid item xs={12} container spacing={2} alignItems="center">
              <Grid item xs={9}>
                <TextField
                  required
                  fullWidth
                  id="userId"
                  label="아이디"
                  name="userId"
                  // value={userId}
                  onChange={handleInputChange}
                  error={!isUserIdValid}
                  helperText={isUserIdValid ? "" : "필수 입력 항목입니다."}
                />
              </Grid>
              <Grid item xs={3}>
                <Button variant="contained">중복확인</Button>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="비밀번호"
                type="password"
                id="password"
                // value={password}
                onChange={handleInputChange}
                error={!isPasswordValid}
                helperText={isPasswordValid ? "" : "필수 입력 항목입니다."}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="passwordCheck"
                label="비밀번호 확인"
                type="password"
                id="passwordCheck"
                // value={passwordValid}
                onChange={handleInputChange}
                error={!isPasswordCheckValid}
                helperText={isPasswordCheckValid ? "" : "필수 입력 항목입니다."}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="약관 동의"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            확인
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              {<Link to="/login">이미 계정이 있다면?! 로그인 하러 가기</Link>}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
