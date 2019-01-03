import * as React from "react";

import { Component } from "react";
import { Fragment } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RouterAction, push } from "react-router-redux";

interface ForgotMyPasswordProps {
  onDidMount: () => void;
}

class Verify extends Component<ForgotMyPasswordProps> {
  componentDidMount() {
    setTimeout(this.props.onDidMount, 10000);
  }
  render() {
    return (
      <Fragment>
        <h2>
          Your Application has been submited, you will be redirected to home
          shortly
        </h2>
      </Fragment>
    );
  }
}

interface OwnDispatchProps {
  onDidMount: () => void;
}

interface State {}

interface OwnProps {}

const mapDispatchToProp: MapDispatchToProps<OwnDispatchProps, OwnProps> = (
  dispatch: ThunkDispatch<State, void, RouterAction>
) => ({
  onDidMount: () => {
    dispatch(push("/"));
  }
});

export default connect(
  null,
  mapDispatchToProp
)(Verify);
