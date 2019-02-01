import * as React from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Row
} from "reactstrap";
import { IState } from "src/shared/store";
import ITeamCredential, {
  validationSchema
} from "../../../../data/TeamCredential";
import * as Actions from "../actions";

import { ThunkDispatch } from "redux-thunk";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import AddMembers from "./AddMembers";
import {
  withFormik,
  FormikValues,
  FormikErrors,
  FormikProps,
  Field
} from "formik";
import "./Profile.css";
//import DropDown from "../../../../shared/components/DropDown";
//import AvatarUpload from "../../../../shared/components/AvatarUpload";
import { universities } from "../../../../data/Universities";
import Axios from "axios";
import { API_URL } from "src/data/Api";

//import Label from "reactstrap/lib/Label";
//import Media from "reactstrap/lib/Media";

//Convert Value C:\fakepath\20171120_180717.jpg to 20171120_180717.jpg
//So i can save it to the user and useit as a data source
// const getFileName = (value: any) => {
//   const fileName = value.split("\\")[value.split("\\").length - 1];
//   const fileSourceUrl =
//     API_URL + "/attachements/container/download/" + fileName;
//   console.log(fileName, fileSourceUrl);
//   return fileSourceUrl;
// };

interface DispatchProps {
  onSubmit: (
    profileCredientials: ITeamCredential,
    id: number
  ) => Promise<FormikErrors<FormikValues>> | void;
}

type Props = DispatchProps & TOwnProps & FormikProps<ITeamCredential>;
class Profile extends React.Component<Props> {
  state = {
    members: []
  };

  getMembers = (value: any) => {
    this.setState({
      members: this.state.members.concat(value)
    });
  };
  render() {
    const {
      values,
      handleChange,
      handleBlur,
      handleSubmit,
      touched,
      errors
    } = this.props;
    return (
      <div className="container-fluid my-register-row">
        <Row className="my-container-p">
          <Col md="5" lg="4" xl="5" className="my-col-form-quote">
            <h1 className="my-col-form-title">
              There are no secrets to{" "}
              <span className="succes text-focus-in">success...</span>
            </h1>
            <div className="team-desc">
              <span>Your Startup idea is at ideation / prototyping phase.</span>
              <span>At least 2 universities are represented in the team </span>
              <span>
                Your team is composed of interdisciplinary/ multi-skilled team
              </span>
              <span>You have at least 3 members</span>
              <span>
                You are willing to potentially bring other participants to your
                team.{" "}
              </span>
              <span>Only one person should apply in the name of the group</span>
            </div>
          </Col>
          <Col md="7" lg="7" xl="6">
            <Card className="mx-4 my-card-container">
              <CardBody className="p-4 my-card-body text-focus-in">
                <Form onSubmit={handleSubmit}>
                  <p className="text-mute">Create your account</p>
                  <div className="avatar">
                    <img
                      src="https://image.flaticon.com/icons/png/512/236/236822.png"
                      alt="Card image cap"
                      className="avatar-img"
                    />
                  </div>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="DateOfBirth"
                      autoComplete="DateOfBirth"
                      name="DateOfBirth"
                      tag={Field}
                      invalid={Boolean(
                        errors.DateOfBirth && touched.DateOfBirth
                      )}
                      value={values.DateOfBirth}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="Gender"
                      autoComplete="gender"
                      name="gender"
                      tag={Field}
                      invalid={Boolean(errors.gender && touched.gender)}
                      value={values.gender}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="Nationality"
                      autoComplete="Nationality"
                      name="nationality"
                      tag={Field}
                      invalid={Boolean(
                        errors.nationality && touched.nationality
                      )}
                      value={values.nationality}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="phone Number"
                      autoComplete="phoneNumber"
                      name="phoneNumber"
                      tag={Field}
                      invalid={Boolean(
                        errors.phoneNumber && touched.phoneNumber
                      )}
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="Address"
                      autoComplete="address"
                      name="address"
                      tag={Field}
                      invalid={Boolean(errors.address && touched.address)}
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
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
                      invalid={Boolean(errors.university && touched.university)}
                      value={values.university}
                      onChange={handleChange}
                    >
                      {universities.map(el => (
                        <option key={el.id}>{el.name}</option>
                      ))}
                    </Input>
                  </InputGroup>
                  <div className="add-memeber">
                    <AddMembers onAddTeamMember={this.getMembers} />
                    <Button
                      type="submit"
                      className="submit-form"
                      onClick={() =>
                        Axios.patch(
                          `${API_URL}/candidates/${this.props.userId}`,
                          {
                            teamMembers: JSON.stringify(this.state.members)
                          }
                        )
                      }
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

interface TOwnProps {
  userId: number;
}

interface TStateProps {}

interface FormikDispatchProps {
  userId: number;
  onSubmit: (
    profileCredientials: ITeamCredential,
    id: number
  ) => Promise<FormikErrors<FormikValues>> | void;
}

const mapStateToProp: MapStateToProps<TStateProps, TOwnProps, IState> = (
  state: IState
) => ({
  userId: state.auth.userId
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (
  dispatch: ThunkDispatch<IState, void, Actions.UpdateProfilActions>
) => ({
  onSubmit: (IProfileCredentials: ITeamCredential, id: number) => {
    dispatch(Actions.updateProfile(IProfileCredentials, id));
  }
});
const ProfileWithFormik = withFormik<FormikDispatchProps, ITeamCredential>({
  validationSchema,
  mapPropsToValues: () => ({
    university: "university",
    DateOfBirth: "",
    gender: "",
    nationality: "",
    phoneNumber: "",
    address: "",
    step: 3
  }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.onSubmit(values, props.userId);

    if (errors) {
      setErrors(errors);
    }
  }
})(Profile);

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(ProfileWithFormik);
