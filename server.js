const http = require("http");
const port = 3000;
let dataObject = { a: "a", b: "b" };

const server = http.createServer((req, res) => {
  // writeHead는 한 번만 호출되어야 하며 end()가 호출되기 전에 호출되어야 한다.
  // status와 response headers를 Client에 보낸다.

  if (req.method === "POST" && req.url === "/home") {
    req.on("data", (data) => {
      console.log("data", data);
      // {c : "c"}
      const stringfiedData = data.toString();
      console.log("stringfiedData", stringfiedData);
      // Object.assign(target, source) => target에 source를 복사해서 넣는다. source의 기존 값은 변하지 않음.
      Object.assign(dataObject, JSON.parse(stringfiedData));
    });
  } else {
    if (req.url === "/home") {
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
    } else if (req.url === "/about") {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<body>");
      res.write("<h1>About Page</h1>");
      res.write("</body>");
      res.write("</html>");
      res.end();
    } else {
      res.statusCode = 404;
      res.end();
    }
  }
});

// port 수신
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
