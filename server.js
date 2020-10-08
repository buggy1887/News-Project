const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const news = require("./routes/api/news");

const app = express();

//adding body-parser middleware
app.use(bodyParser.json());

//configure mongo dB
const db = require("./config/keys").mongoURI;

//News model
const News = require("./models/News");

//connect to mongoDB

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongo-dB Connected..."))
  .catch((err) => console.log(err));

//API routes

//@route  GET api/news
//@desc   Get all news
//@access Public

app.get("/api/news", (req, res) => {
  News.find()
    .sort({ date: -1 })
    .then((news) => res.json(news));
});

//@route  POST api/news
//@desc   create news
//@access Public

app.post("/api/news", (req, res) => {
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

app.delete("/api/news/:id", async (req, res) => {
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

app.patch("/api/news/:id", async (req, res) => {
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

app.use("/api/news", news);

const port = 5000;

app.listen(port, () => console.log(`Server started on ${port}`));
