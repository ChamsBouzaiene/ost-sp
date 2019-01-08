import * as React from "react";
import { Component } from "react";
import Grades from "./Grades";
interface OwnState {}
//type MyProps = {};
type MyState = OwnState;

class GradesContainer extends Component<{}, MyState> {
  render() {
    return <Grades />;
  }
}

export default GradesContainer;
