import * as React from "react";
import { Component } from "react";
interface OwnState {}
//type MyProps = {};
type MyState = OwnState;

class Grades extends Component<{}, MyState> {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <h2>this is the Grading Dashboard</h2>
        </div>
      </div>
    );
  }
}

export default Grades;
