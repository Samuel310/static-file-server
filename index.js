const express = require("express");
const path = require("path");
const serveIndex = require("serve-index");

const app = express();
const port = 3000;

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} request to ${req.url}`);
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  console.log("---");
  next();
});

const wellKnownPath = path.join(__dirname, ".well-known");
app.use(
  "/.well-known",
  express.static(wellKnownPath),
  serveIndex(wellKnownPath),
);

app.use(
  "/.well-known/apple-app-site-association",
  express.static(
    path.join(__dirname, "./.well-known/apple-app-site-association.json"),
  ),
);

const publicPath = path.join(__dirname, "public");
app.use("/public", express.static(publicPath), serveIndex(publicPath));

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
