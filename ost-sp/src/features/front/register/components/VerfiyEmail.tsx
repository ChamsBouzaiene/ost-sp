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
    setTimeout(this.props.onDidMount, 4000);
  }
  render() {
    return (
      <Fragment>
        <div className="confirm">
          <div className="confirm-card">
            <div className="confirm-img">
              <i className="far fa-envelope" />
            </div>
            <div className="confirm-text">
              <span className="confirm-title">DONE</span>
              <span className="confirm-desc">
                An Email has been sent to your email account Please Verify Your
                Email Acount{" "}
              </span>
              <span className="confirm-desc">
                You will be redirected to the login page shortly
              </span>
            </div>
            <div className="confirm-btn">
              <p>continue</p>
            </div>
          </div>
        </div>
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
    dispatch(push("/auth"));
  }
});

export default connect(
  null,
  mapDispatchToProp
)(Verify);
