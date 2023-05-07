import { Box, Button, Container, CssBaseline, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";

export const DeleteAccount = () => {
  const location = useLocation();
  const loginUserData = location.state.userData;

  const handleConfirmClick = () => {
    const isConfirmed = window.confirm("정말 탈퇴하시겠습니까?");

    if (isConfirmed) {
    }
  };

  return (
    <>
      <div>
        <div style={{ marginBottom: "20px" }}>
          회원탈퇴를 원하시면 아래의 내용을 반드시 확인하시기 바랍니다.
        </div>
        <div>
          - 회원탈퇴를 하시면 아이디는 즉시 탈퇴 처리되며, 해당 아이디에 대한
          회원정보 및 서비스 정보는 모두 삭제됩니다.
          <br />
          - 탈퇴한 아이디는 영구적으로 사용이 중지되며, 같은 아이디로 재가입이
          불가능 합니다.
          <br />
          - 회원탈퇴 후, 1주일 동안은 회원가입이 불가능합니다.
          <br />
          - 불량이용과 관련된 징계에 관한 기록은 일정기간 동안 삭제되지 않고
          보관됩니다.
          <br />
          - 게시물은 삭제되지 않으므로 삭제를 원하시는 경우에는 먼저 삭제를
          완료하신 후 탈퇴 하시기 바랍니다.
          <br />
          (탈퇴 후에는 회원정보 삭제로 인해 작성자 본인을 확인할 수 없으므로
          삭제 처리가 원천적으로 불가합니다)
          <br />
          - 토론실 : 게시물 및 댓글
          <br />- 기타 : 타인과 함께 사용하는 공적인 영역의 댓글
        </div>
      </div>
      <hr />
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
          <Box>
            <TextField
              margin="normal"
              fullWidth
              label="아이디"
              id="userId"
              value={loginUserData.userId}
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
              // value={password}
              // onChange={handlePasswordChange}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#e118a9" }}
              onClick={handleConfirmClick}
            >
              회원탈퇴
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
