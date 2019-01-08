import * as React from "react";
import { Component } from "react";
import Selectors from "./Selectors";
interface OwnState {}
//type MyProps = {};
type MyState = OwnState;

class SelectorsContainer extends Component<{}, MyState> {
  render() {
    return <Selectors />;
  }
}

export default SelectorsContainer;
