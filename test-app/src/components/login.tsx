import React, { Component } from "react";
import { AuthService } from "../services/AuthService";

type LoginProps = {
  authService: AuthService;
};

type LoginState = {
  username: string;
  password: string;
};

export default class Login extends Component<LoginProps, LoginState> {
  state: LoginState = {
    username: "",
    password: "",
  };

  private setUsername(e: { target: HTMLInputElement }) {
    this.setState({ username: e.target.value });
  }

  private async handleSubmit(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    const result = await this.props.authService.login(
      this.state.username,
      this.state.password
    );
    console.log(result);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.username}
          onChange={(e) => {
            this.setUsername(e);
          }}
        ></input>
        <input
          type="password"
          value={this.state.password}
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
        ></input>
        <button
          onClick={(e) => {
            this.handleSubmit(e);
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}
