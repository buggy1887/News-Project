import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import News from "./components/news/news.component";
import PostNews from "./components/newPost/postNews.components";

import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" exact="true">
        <News />
      </Route>
      <Route path="/newpost" exact="true">
        <PostNews />
      </Route>
    </Router>
  );
}

export default App;
