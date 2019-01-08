import * as React from "react";
import { Component } from "react";
import Main from "./Main";
interface OwnState {}
//type MyProps = {};
type MyState = OwnState;

class MainContainer extends Component<{}, MyState> {
  render() {
    return <Main />;
  }
}

export default MainContainer;
