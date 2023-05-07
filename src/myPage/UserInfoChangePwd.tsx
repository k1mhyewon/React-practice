import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { FormDataType } from "../main/register/type/FormDataType.type";
import { useEffect, useState } from "react";
import { LocalStorageController } from "../util/LocalStorageController";
import { SessionStorageController } from "../util/SessionStorageController";

type UserInfoChangePwdProps = {
  loginUserData: FormDataType;
};

const sessionStorageController = new SessionStorageController();

export const UserInfoChangePwd = (props: UserInfoChangePwdProps) => {
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "password":
        setPassword(value);
        break;
      case "passwordCheck":
        setPasswordCheck(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (password !== passwordCheck) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
  }, [password, passwordCheck]);

  const handleConfirmButtonClick = () => {
    const isConfirmed = window.confirm("비밀번호를 변경하시겠습니까?");
    if (isConfirmed) {
      const userData =
        LocalStorageController.getLocalStorageList<FormDataType[]>("userList");

      const updatedUsers = userData.map((user) => {
        if (user.userId === props.loginUserData.userId) {
          return {
            ...user,
            password: password,
          };
        }
        return user;
      });
      LocalStorageController.saveLocalStorage("userList", updatedUsers);

      const updatedLoginUserData: FormDataType = {
        ...props.loginUserData,
        password: password,
      };

      sessionStorageController.saveSessionStorage(
        "loginUser",
        updatedLoginUserData
      );

      // window.location.reload();

      window.alert("비밀번호가 변경되었습니다.");
    } else {
      window.alert("비밀번호 변경이 취소되었습니다.");
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            비밀번호 변경
          </Typography>
          <Box>
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="비밀번호"
              name="password"
              type="password"
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="passwordCheck"
              label="비밀번호 확인"
              type="password"
              id="passwordCheck"
              onChange={handleInputChange}
              error={!isPasswordValid}
              helperText={
                isPasswordValid ? "" : "비밀번호가 일치하지 않습니다."
              }
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#e118a9" }}
              onClick={handleConfirmButtonClick}
            >
              확인
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
