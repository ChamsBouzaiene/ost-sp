import * as React from "react";
import { AppHeaderDropdown } from "@coreui/react";
import { DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { MapStateToProps, connect } from "react-redux";
import { IState } from "src/shared/store";

class HeaderProfile extends React.Component {
  render() {
    return (
      <AppHeaderDropdown direction="down">
        <DropdownToggle nav={true}>
          <i className="fa fa-user" /> Chamsddine Bouzaiene
        </DropdownToggle>
        <DropdownMenu right={true} style={{ right: "auto" }}>
          <DropdownItem header={true} tag="div" className="text-center">
            <strong>Account</strong>
          </DropdownItem>
          <DropdownItem>
            <i className="fa fa-user" /> Profile
          </DropdownItem>
          <DropdownItem>
            <i className="fa fa-lock" /> Logout
          </DropdownItem>
        </DropdownMenu>
      </AppHeaderDropdown>
    );
  }
}

interface TOwnProps {}
interface TStateProps {}
const MapStateToProp: MapStateToProps<TStateProps, TOwnProps, IState> = (
  state: IState
) => ({
  currentUser: state.auth
});

export default connect(
  MapStateToProp,
  null
)(HeaderProfile);
