const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const newsCategories = require("./data/categories.json");
const news = require("./data/news.json");
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello News Dragon.");
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/categories", (req, res) => {
  res.send(newsCategories);
});

app.get("/news/:newsId", (req, res) => {
  const currentNewsId = req.params.newsId;
  const currentNews = news.find((n) => n._id === currentNewsId);
  res.send(currentNews);
});

app.get("/categories/:categoryId", (req, res) => {
  const newsCategoryId = req.params.categoryId;
  if (newsCategoryId === "0") {
    res.send(news);
  } else {
    const currentCategoryNews = news.filter(
      (n) => n.category_id === newsCategoryId
    );
    res.send(currentCategoryNews);
  }
});

app.listen(port, () => {
  console.log(`News Dragon Backend is running on ${port}`);
});
