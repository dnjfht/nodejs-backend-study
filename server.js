const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  // writeHead는 한 번만 호출되어야 하며 end()가 호출되기 전에 호출되어야 한다.
  // status와 response headers를 Client에 보낸다.
  res.writeHead(200, {
    // "Content-Type": "text/plain",

    // Javascript object를 보내려면?
    "Content-Type": "application/json",
  });
  // 데이터가 로드되었음을 Server에 알림
  res.end(
    JSON.stringify({
      a: "a",
      b: "b",
    })
  );
});

// port 수신
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
