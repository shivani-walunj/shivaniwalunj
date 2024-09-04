import React, { Component } from "react";
import "./panda.png";

export default class App extends Component {
  render() {
    return (
      <div>
        <p>First React Test Case</p>
        <img src="./panda.png" alt="cute-img" title="cute panda" />
        <input
          type="text"
          placeholder="Enter UserName"
          name="userName"
          id="userId"
        />
      </div>
    );
  }
}
