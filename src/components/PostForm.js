import React, { Component } from "react";

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
