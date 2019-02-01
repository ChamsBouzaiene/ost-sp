import * as React from "react";

import { Component } from "react";
import { Fragment } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RouterAction, push } from "react-router-redux";
import "./confirm.css";
import Axios from "axios";
import { API_URL } from "src/data/Api";

interface ForgotMyPasswordProps {
  onDidMount: () => void;
}

type Props = ForgotMyPasswordProps & State;
class Verify extends Component<Props> {
  componentDidMount() {
    setTimeout(this.props.onDidMount, 4000);
    const initAuth = () => {
      let savedToken;
      try {
        savedToken = JSON.parse(localStorage.getItem("token") as any);
      } catch (err) {
        savedToken = null;
      }
      return Promise.resolve(savedToken || {});
    };
    //Send Email To candidate to tell him that the application is confirmed
    initAuth().then(savedToken => {
      console.log("id", savedToken);
      Axios.post(`${API_URL}/assesments/applied`, {
        id: savedToken.userId
      });
    });
    //Patch the atribute patch to true
    initAuth().then(savedToken =>
      Axios.patch(`${API_URL}/candidates/${savedToken.userId}`, {
        submited: true,
        step: 6
      })
    );
  }

  render() {
    return (
      <Fragment>
        <div className="confirm">
          <div className="confirm-card">
            <div className="confirm-img">
              <i className="far fa-check-circle" />
            </div>
            <div className="confirm-text">
              <span className="confirm-title">DONE</span>
              <span className="confirm-desc">
                You have completed the application proccess congrats
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

interface State {
  userEmail: any;
}

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
