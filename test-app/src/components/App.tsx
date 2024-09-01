import React, { Component } from "react";
import { User } from "../model/model";
import { AuthService } from "../services/AuthService";
import Login from "./login";

interface AppState {
  user: User | undefined;
}

export default class App extends Component<{}, AppState> {
  private authService: AuthService = new AuthService();
  render() {
    return (
      <div>
        <Login authService={this.authService}></Login>
      </div>
    );
  }
}
