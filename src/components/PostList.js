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
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({ errorMsg: "Error retreiving data" });
      });
  }
  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        Post list
        {posts.length ? posts.map((post) => <div key={post.id}>{post.title}</div>) : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
