import * as React from "react";
import { Component } from "react";
import Admins from "./Admins";
interface OwnState {}
//type MyProps = {};
type MyState = OwnState;

class AdminsContainer extends Component<{}, MyState> {
  render() {
    return <Admins />;
  }
}

export default AdminsContainer;
