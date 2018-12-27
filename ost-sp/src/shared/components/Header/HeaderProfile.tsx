import * as React from "react";
import { AppHeaderDropdown } from "@coreui/react";
import { DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { MapStateToProps, connect, MapDispatchToProps } from "react-redux";
import { IState } from "src/shared/store";
import * as Actions from "../../../features/front/auth/actions";
import { ThunkDispatch } from "redux-thunk";

interface DispatchProps {
  onDidMount: (id: number) => void;
  logout: () => void;
}

type Props = DispatchProps & TStateProps;

class HeaderProfile extends React.Component<Props> {
  componentDidMount() {
    this.props.onDidMount(this.props.userId);
  }
  render() {
    return (
      <AppHeaderDropdown direction="down">
        <DropdownToggle nav={true}>
          <i className="fa fa-user" /> {this.props.userEmail}
        </DropdownToggle>
        <DropdownMenu right={true} style={{ right: "auto" }}>
          <DropdownItem header={true} tag="div" className="text-center">
            <strong>Account</strong>
          </DropdownItem>
          <DropdownItem onClick={() => console.log("sdfsd")}>
            <i className="fa fa-user" /> Profile
          </DropdownItem>
          <DropdownItem onClick={() => this.props.logout()}>
            <i className="fa fa-lock" /> Logout
          </DropdownItem>
        </DropdownMenu>
      </AppHeaderDropdown>
    );
  }
}

interface TOwnProps {}
interface TStateProps {
  userId: number;
  userEmail?: string;
}
const MapStateToProp: MapStateToProps<TStateProps, TOwnProps, IState> = (
  state: IState
) => ({
  userId: state.auth.userId,
  userEmail: (state.auth.currentuser || {}).email
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, TOwnProps> = (
  dispatch: ThunkDispatch<IState, void, Actions.All>
) => ({
  onDidMount: (id: number) => {
    dispatch(Actions.getCurrentUser(id));
  },
  logout: () => {
    dispatch(Actions.logout());
  }
});

export default connect(
  MapStateToProp,
  mapDispatchToProps
)(HeaderProfile);
