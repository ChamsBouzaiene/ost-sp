import * as React from "react";
import { Component } from "react";
import Applications from "./Applications";
interface OwnState {}
//type MyProps = {};
type MyState = OwnState;

class ApplicationsContainer extends Component<{}, MyState> {
  render() {
    return <Applications />;
  }
}

export default ApplicationsContainer;
