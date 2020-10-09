const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const newsRoute = require("./routes/api/news");
const authRoute = require("./routes/auth");

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

//Routes middleware
// connect to news routes
app.use("/api/news", newsRoute);

//connect to user routes
app.use("/api/user", authRoute);

const port = 5000;

app.listen(port, () => console.log(`Server started on ${port}`));
