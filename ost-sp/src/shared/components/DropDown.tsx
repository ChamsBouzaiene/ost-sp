import * as React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

interface State {
  dropdownOpen: boolean;
}
interface OwnProps {
  list?: any;
  name: string;
  tag?: any;
  value: string;
  handleChange: (e: any) => void;
}

type Props = OwnProps;

export default class DropDownComp extends React.Component<Props, State> {
  state = {
    dropdownOpen: false
  };

  toggle = () => {
    this.setState((prevState: any) => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  render() {
    const { name, tag, value, handleChange, list } = this.props;
    return (
      <Dropdown
        name={name}
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
        tag={tag}
      >
        <DropdownToggle caret={true}>{value} </DropdownToggle>
        <DropdownMenu onChange={(e: any) => console.log("tbadl")}>
          <DropdownItem header={true}>universities</DropdownItem>
          {list.map((el: any) => (
            <DropdownItem
              key={el.id}
              value={el.name}
              name={name}
              onClick={handleChange}
            >
              {el.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    );
  }
}
