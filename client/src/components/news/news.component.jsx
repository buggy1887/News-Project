import React from "react";
import { Component } from "react";
import "./news.styles.css";

class News extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    fetch("/api/news")
      .then((res) => res.json())
      .then((news) =>
        this.setState({ news }, () => console.log("news fetched:", news))
      );
  }

  render() {
    return (
      <div>
        <ul className="card-container">
          {this.state.news.map((news) => (
            <li className="card" key={news.id}>
              <h2>{news.title}</h2> <br />
              <img src="news.img" alt="" />
              <p>{news.text}</p>
              <p>{news.author}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default News;
