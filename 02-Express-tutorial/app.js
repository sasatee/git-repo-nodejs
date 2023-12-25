const http = require("http");
const { readFileSync } = require("fs");

const HomePage = readFileSync("./navbar-app/index.html");
const HomeStyles = readFileSync("./navbar-app/styles.css");
const HomeImage = readFileSync("./navbar-app/logo.svg");
const HomeJavascript = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);
  //home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(HomePage);
    res.end();
    // about poge
  } else {
    if (url === "/about") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>about page</h1>");
      res.end();
      // styles
    } else if (url === "/styles.css") {
      res.writeHead(200, { "content-type": "text/css" });
      res.write(HomeStyles);
      res.end();
      //imagw ==> logo
    } else if (url === "/logo.svg") {
      res.writeHead(200, { "content-type": "image/svg+xml" });
      res.write(HomeImage);
      res.end();
      //javascript
    } else if (url === "/browser-app.js") {
      res.writeHead(200, { "content-type": "text/javascript" });
      res.write(HomeJavascript);
      res.end();

      //404
    } else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1>about page is not found </h1>");
      res.end();
    }
  }
});
server.listen(5000);
