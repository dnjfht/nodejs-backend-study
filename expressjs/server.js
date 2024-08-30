// Express 모듈 불러오기
const express = require("express");

// Constants
// Express Server를 위한 Port 설정.
const PORT = 3000;
// host 지정 => 생략 가능.
// const HOST = "0.0.0.0.";

// APP
// 새로운 Express 어플 생성
const app = express();
app.get("/", (req, res) => {
  // "/" 경로로 요청이 오면 Hello Word를 결과값으로 전달.
  res.send("Hello World");
});

// 해당 port와 host에서 HTTP Server를 시작.
app.listen(PORT);
console.log(`Running on port ${PORT}`);
