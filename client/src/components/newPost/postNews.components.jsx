import React from "react";
import { Component } from "react";
import { postNews } from "../actions/newsActions";
import "./postNews.styles.css";

class PostNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      author: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }
  componentDidMount() {
    postNews().then((news) =>
      this.setState({ news }, () => console.log("news posted:", news))
    );
  }
  render() {
    return (
      <div>
        <container>
          <form onSubmit={this.handleSubmit}>
            <label>
              Title:
              <input
                className="title"
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Text:
              <input
                className="text"
                type="text"
                name="text"
                value={this.state.text}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Author:
              <input
                className="author"
                type="text"
                name="author"
                value={this.state.author}
                onChange={this.handleInputChange}
              />
            </label>
            <input className="button" type="submit" value="Submit" />
          </form>
        </container>
      </div>
    );
  }
}
export default PostNews;

// class News extends Component {
//   constructor() {
//     super();
//     this.state = {
//       news: [],
//     };
//   }

//   componentDidMount() {
//     fetchNews().then((news) =>
//       this.setState({ news }, () => console.log("news fetched:", news))
//     );
//   }

//   render() {
//     return (
//       <div>
//         <ul className="card-container">
//           {this.state.news.map((news) => (
//             <li className="card" key={news.id}>
//               <h2>{news.title}</h2> <br />
//               <img src="news.img" alt="" />
//               <p>{news.text}</p>
//               <p>{news.author}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default News;
