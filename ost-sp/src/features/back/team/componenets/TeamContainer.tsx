import * as React from "react";
import { Component } from "react";
import Team from "./Team";
interface OwnState {}
//type MyProps = {};
type MyState = OwnState;

class TeamContainer extends Component<{}, MyState> {
  render() {
    return <Team />;
  }
}

export default TeamContainer;
