import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FormDataType } from "../main/register/type/FormDataType.type";

type UserInfoValidCheckProps = {
  loginUserData: FormDataType;
  setIsValid: any;
};

export const UserInfoValidCheck = (props: UserInfoValidCheckProps) => {
  const [password, setPassword] = useState<string>("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmClick = () => {
    if (password === props.loginUserData.password) {
      props.setIsValid(true); // props로 전달받은 setIsValid를 호출해 부모 컴포넌트의 isValid 값을 변경한다.
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
            본인확인절차
          </Typography>
          <Box>
            <TextField
              margin="normal"
              fullWidth
              label="아이디"
              id="userId"
              value={props.loginUserData.userId}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#e118a9" }}
              onClick={handleConfirmClick}
            >
              확인
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
