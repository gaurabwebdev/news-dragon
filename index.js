const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const newsCategories = require("./data/categories.json");
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello News Dragon.");
});

app.get("/categories", (req, res) => {
  res.send(newsCategories);
});

app.listen(port, () => {
  console.log(`News Dragon Backend is running on ${port}`);
});
