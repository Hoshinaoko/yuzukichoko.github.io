const express = require("express");
const path = require("path");

const web = express();

web.set("view engine", "pug");
web.set("views", path.join(__dirname, "JS"));

// rount
web.get("/", (req, res) => {
  res.status(200), render("base");
});
