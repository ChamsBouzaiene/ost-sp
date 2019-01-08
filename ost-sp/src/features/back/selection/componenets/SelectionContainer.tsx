import * as React from "react";
import { Component } from "react";
import Selection from "./Selection";
interface OwnState {}
//type MyProps = {};
type MyState = OwnState;

class SelectionContainer extends Component<{}, MyState> {
  render() {
    return <Selection />;
  }
}

export default SelectionContainer;
