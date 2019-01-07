import * as React from "react";
import axios from "axios";
import ResetPassword from "./ResetPassword";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { IState } from "src/shared/store";
import { ThunkDispatch } from "redux-thunk";
import { RouterAction, push } from "react-router-redux";

type Props = TStateProps & OwnDispatchProps;
class ResetPasswordContainer extends React.Component<Props> {
  componentDidMount() {
    const tokenStr = window.location.href.split("=")[1];
    axios.defaults.headers.common.Authorization = tokenStr;
    console.log(tokenStr);
  }

  componentDidUpdate(prevProps: any) {
    // Typical usage (don't forget to compare props):
    if (this.props.hasSucceded !== prevProps.hasSucceded) {
      setTimeout(this.props.onDidMount, 2000);
      console.log(this.props.hasSucceded);
    }
  }
  render() {
    return <ResetPassword hasSucceded={this.props.hasSucceded} />;
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

interface TOwnProps {}
interface TStateProps {
  hasSucceded: string;
}

const mapStateToProp: MapStateToProps<TStateProps, TOwnProps, IState> = (
  state: IState
) => ({
  hasSucceded: state.auth.passwwordReset || {}
});

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(ResetPasswordContainer);
