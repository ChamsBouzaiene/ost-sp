import * as React from "react";

import { Component } from "react";
import { Fragment } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RouterAction, push } from "react-router-redux";
import Axios from "axios";
import { API_URL } from "src/data/Api";

interface ForgotMyPasswordProps {
  onDidMount: () => void;
}

class Verify extends Component<ForgotMyPasswordProps> {
  componentDidMount() {
    setTimeout(this.props.onDidMount, 10000);

    const initAuth = () => {
      let savedToken;
      try {
        savedToken = JSON.parse(localStorage.getItem("token") as any);
      } catch (err) {
        savedToken = null;
      }
      return Promise.resolve(savedToken || {});
    };
    initAuth().then(savedToken =>
      Axios.post(`${API_URL}/assesments/applied`, {
        email: savedToken.id
      })
    );
    initAuth().then(savedToken =>
      Axios.patch(`${API_URL}/candidates/${savedToken.userId}`, {
        submited: true
      })
    );
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
