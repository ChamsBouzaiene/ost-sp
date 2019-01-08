import * as React from "react";
import { Component } from "react";
interface OwnState {}
//type MyProps = {};
type MyState = OwnState;

class Admins extends Component<{}, MyState> {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <h2>this is the Admins Dashboard</h2>
        </div>
      </div>
    );
  }
}

export default Admins;
