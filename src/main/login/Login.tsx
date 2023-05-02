export const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>로그인</h2>
        <label htmlFor="id">아이디</label>
        <input type="text" id="id" name="id" required />
        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" name="password" required />
        <div className="checkbox-container">
          <input type="checkbox" id="save-id" name="save-id" />
          <label htmlFor="save-id">아이디 저장</label>
        </div>
        <button
          type="submit"
          style={{ backgroundColor: "#e118a9", color: "white" }}
        >
          로그인
        </button>
      </form>
      <div className="login-footer">
        <a href="#">회원가입</a>
        <a href="#">ID/PW 찾기</a>
      </div>
    </div>
  );
};
