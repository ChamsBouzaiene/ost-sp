import { MapStateToProps, connect } from "react-redux";
import { IState } from "../store";
import { StatelessComponent } from "react";

interface StateProps {
  isLoggedIn: boolean;
}

interface OwnProps {
  whenLoggedIn?: any;
  whenNotLoggedIn?: any;
}

type Props = StateProps & OwnProps;

const AuthorizeRaw: StatelessComponent<Props> = ({
  isLoggedIn,
  whenLoggedIn = null,
  whenNotLoggedIn = null
}) => {
  if (isLoggedIn) {
    return typeof whenLoggedIn === "function" ? whenLoggedIn() : whenLoggedIn;
  } else {
    return typeof whenNotLoggedIn === "function"
      ? whenNotLoggedIn()
      : whenNotLoggedIn;
  }
};

const mapStateToProps: MapStateToProps<
  StateProps,
  OwnProps,
  IState
> = state => ({ isLoggedIn: Boolean(Object.keys(state.auth).length) });

const Authorize = connect(mapStateToProps)(AuthorizeRaw);

export default Authorize;
