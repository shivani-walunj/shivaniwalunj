import React, { Component } from "react";

export default class List extends Component {
  render() {
    return (
      <div>
        <div>
          <input type="text" placeholder="task 1" />
          <button>delete</button>
        </div>
        <div>
          <button>Remove All</button>
        </div>
      </div>
    );
  }
}
