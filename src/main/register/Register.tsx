import { useState } from "react";

interface SignupFormState {
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
}

export const Register = () => {
  const [formState, setFormState] = useState<SignupFormState>({
    id: "",
    password: "",
    passwordConfirm: "",
    name: "",
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "5px solid #e6e6e6;",
        marginTop: "10%",
      }}
    >
      <form>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>회원가입</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "20rem",
          }}
        >
          <label htmlFor="id">아이디</label>
          <div style={{ display: "flex" }}>
            <input
              type="text"
              name="id"
              id="id"
              value={formState.id}
              onChange={handleChange}
              style={{ marginRight: "0.5rem" }}
            />
            <button
              style={{
                backgroundColor: "gray",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              중복확인
            </button>
          </div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formState.password}
            onChange={handleChange}
          />
          <label htmlFor="passwordConfirm">비밀번호 확인</label>
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            value={formState.passwordConfirm}
            onChange={handleChange}
          />
          <label htmlFor="name">성명</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formState.name}
            onChange={handleChange}
          />
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}
          >
            <input
              type="checkbox"
              id="agree"
              checked={isChecked}
              onChange={handleCheck}
              style={{ marginRight: "0.5rem" }}
            />
            <label htmlFor="agree">모든 약관에 동의합니다.</label>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2rem",
              width: "100%",
            }}
          >
            <button
              style={{
                backgroundColor: "gray",
                color: "white",
                border: "none",
                borderRadius: "5px",
                width: "50px",
                height: "40px",
                marginTop: "10px",
              }}
            >
              취소
            </button>
            <button
              type="submit"
              style={{ backgroundColor: "#e118a9", color: "white" }}
              disabled={!isChecked}
              // onClick={handleSubmit}
            >
              확인
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
