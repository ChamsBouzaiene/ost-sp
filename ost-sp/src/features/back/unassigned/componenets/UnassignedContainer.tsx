import * as React from "react";
import { Component } from "react";
import Unassigned from "./Unassigned";
interface OwnState {}
//type MyProps = {};
type MyState = OwnState;

class UnassignedContainer extends Component<{}, MyState> {
  render() {
    return <Unassigned />;
  }
}

export default UnassignedContainer;
