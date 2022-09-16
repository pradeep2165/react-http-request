import React, { Component } from "react";
import axios from "axios";
export class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }
  changeHandeler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandeler = (e) => {
    e.preventDefault();
    console.log(this);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandeler}>
          <div>
            <input type="text" name="userId" value={userId} onChange={this.changeHandeler} placeholder="userid" />
          </div>
          <div>
            <input type="text" name="title" value={title} placeholder="title" onChange={this.changeHandeler} />
          </div>
          <div>
            <input type="text" name="body" value={body} placeholder="body" onChange={this.changeHandeler} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
