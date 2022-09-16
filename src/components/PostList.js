import React, { Component } from "react";
import axios from "axios";
class PostList extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  render() {
    return <div>Post list</div>;
  }
}

export default PostList;
