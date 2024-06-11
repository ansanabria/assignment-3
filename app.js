const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/users", (_, res) => {
  res.sendFile(path.join(__dirname, "views", "users.html"));
});

const PORT = 8080;
app.listen(PORT);
