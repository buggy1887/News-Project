const express = require("express");

const app = express.Router();

const News = require("../../models/News");

//API routes

//@route  GET api/news
//@desc   Get all news
//@access Public

app.get("/", (req, res) => {
  News.find()
    .sort({ date: -1 })
    .then((news) => res.json(news));
});

//@route  POST api/news
//@desc   create news
//@access Public

app.post("/", (req, res) => {
  const newNews = new News({
    title: req.body.title,
    text: req.body.text,
    author: req.body.author,
    img: req.body.img,
  });
  newNews.save().then((news) => res.json(news));
});

//@route  DELETE api/news/:id
//@desc   Delete News
//@access Public

app.delete("/:id", async (req, res) => {
  try {
    const deletedNews = await News.deleteOne({ _id: req.params.id });
    res.json(deletedNews);
  } catch (err) {
    res.json({ message: err });
  }
});

//@route  PATCH api/news/:id
//@desc   update News
//@access Public

app.patch("/:id", async (req, res) => {
  try {
    const updateNews = await News.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          text: req.body.text,
          author: req.body.author,
          img: req.body.img,
        },
      }
    );
    res.json(updateNews);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = app;
