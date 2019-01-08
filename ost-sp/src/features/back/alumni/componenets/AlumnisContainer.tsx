import * as React from "react";
import { Component } from "react";
import Alumnis from "./Alumnis";
interface OwnState {}
//type MyProps = {};
type MyState = OwnState;

class AlumnisContainer extends Component<{}, MyState> {
  render() {
    return <Alumnis />;
  }
}

export default AlumnisContainer;
