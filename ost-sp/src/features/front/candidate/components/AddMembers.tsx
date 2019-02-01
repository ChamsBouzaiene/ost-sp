import * as React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import InputGroup from "reactstrap/lib/InputGroup";
import InputGroupAddon from "reactstrap/lib/InputGroupAddon";
import InputGroupText from "reactstrap/lib/InputGroupText";
import Input from "reactstrap/lib/Input";
import { universities } from "../../../../data/Universities";

interface State {}
interface Props {
  modal?: boolean;
  MemberName?: any;
  email?: any;
  gender?: any;
  nationality?: any;
  phoneNumber?: any;
  address?: any;
  university?: any;
  onAddTeamMember: (value: any) => void;
}
export default class AddMembers extends React.Component<Props, State> {
  state = {
    memebers: [],
    modal: false,
    MemberName: "",
    email: "",
    gender: "",
    nationality: "",
    phoneNumber: "",
    address: "",
    university: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleInput = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleAdd = (value: any) => {
    console.log(value);

    this.setState({
      memebers: this.state.memebers.concat(value)
    });
  };

  render() {
    return (
      <div>
        <div>
          <Button color="danger" onClick={this.toggle}>
            Add Member
          </Button>

          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Member info</ModalHeader>
            <ModalBody>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>@</InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="Member Name"
                  autoComplete="phoneNumber"
                  name="MemberName"
                  onChange={this.handleInput}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-university" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="Email"
                  autoComplete="phoneNumber"
                  name="email"
                  onChange={this.handleInput}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-university" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="Gender"
                  autoComplete="phoneNumber"
                  name="gender"
                  onChange={this.handleInput}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-university" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="Nationality"
                  autoComplete="phoneNumber"
                  name="nationality"
                  onChange={this.handleInput}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-university" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="Phone Number"
                  autoComplete="phoneNumber"
                  name="phoneNumber"
                  onChange={this.handleInput}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-university" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="Address"
                  autoComplete="phoneNumber"
                  name="address"
                  onChange={this.handleInput}
                />{" "}
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-university" />
                  </InputGroupText>
                </InputGroupAddon>

                <Input
                  type="select"
                  name="university"
                  id="university"
                  placeholder="University"
                  autoComplete="university"
                  onChange={this.handleInput}
                >
                  {universities.map(el => (
                    <option key={el.id}>{el.name}</option>
                  ))}
                </Input>
              </InputGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() => {
                  this.toggle();
                  this.handleAdd({
                    MemberName: this.state.MemberName,
                    email: this.state.email,
                    gender: this.state.gender,
                    nationality: this.state.nationality,
                    phoneNumber: this.state.phoneNumber,
                    address: this.state.address,
                    university: this.state.university
                  });
                  this.props.onAddTeamMember({
                    MemberName: this.state.MemberName,
                    email: this.state.email,
                    gender: this.state.gender,
                    nationality: this.state.nationality,
                    phoneNumber: this.state.phoneNumber,
                    address: this.state.address,
                    university: this.state.university
                  });
                }}
              >
                Add Member
              </Button>
              <Button
                color="secondary"
                onClick={() => {
                  this.toggle();
                }}
              >
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
          <div className="memebres-container">
            {this.state.memebers && (
              <h5>Team Members : {this.state.memebers.length}</h5>
            )}
            {this.state.memebers &&
              this.state.memebers.map((el: any, id) => (
                <span className="member" key={id}>
                  {el.MemberName}
                </span>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
