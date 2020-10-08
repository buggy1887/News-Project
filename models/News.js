const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const NewsSchema = new Schema([
  {
    title: {
      type: String,
    },
  },
  {
    text: {
      type: String,
    },
  },
  {
    author: {
      type: String,
    },
  },
  {
    img: {
      type: String,
    },
  },
  {
    date: {
      type: Date,
      default: Date.now,
    },
  },
]);

module.exports = News = mongoose.model("news", NewsSchema);
