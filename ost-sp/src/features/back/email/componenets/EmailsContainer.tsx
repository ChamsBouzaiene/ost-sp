import * as React from "react";
import { Component } from "react";
import Emails from "./Emails";
interface OwnState {}
//type MyProps = {};
type MyState = OwnState;

class EmailsContainer extends Component<{}, MyState> {
  render() {
    return <Emails />;
  }
}

export default EmailsContainer;
