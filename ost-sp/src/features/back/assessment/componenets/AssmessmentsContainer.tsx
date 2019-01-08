import * as React from "react";
import { Component } from "react";
import Assements from "./Assessments";
interface OwnState {}
//type MyProps = {};
type MyState = OwnState;

class AssementsContainer extends Component<{}, MyState> {
  render() {
    return <Assements />;
  }
}

export default AssementsContainer;
