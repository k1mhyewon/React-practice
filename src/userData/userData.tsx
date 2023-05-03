type user = {
  name: string;
  userId: string;
  password: string;
  point: number;
};

export let userData: user[] = [
  { name: "김혜원", userId: "kimhyewon", password: "qwer1234", point: 10 },
  { name: "이머니", userId: "emoney", password: "qwer1234", point: 10 },
  { name: "관리자", userId: "admin", password: "qwer1234", point: 10 },
];
