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
import IProfileCredentials, {
  validationSchema
} from "../../../../data/ProfileCredential";
import * as Actions from "../actions";
import { StatelessComponent } from "react";
import { ThunkDispatch } from "redux-thunk";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import {
  withFormik,
  FormikValues,
  FormikErrors,
  FormikProps,
  Field
} from "formik";
import "./Profile.css";
interface DispatchProps {
  onSubmit: (
    profileCredientials: IProfileCredentials,
    id: number
  ) => Promise<FormikErrors<FormikValues>> | void;
}
type Props = DispatchProps & FormikProps<IProfileCredentials>;
const Profile: StatelessComponent<Props> = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}) => (
  <div className="container-fluid my-register-row">
    <Row className="my-container-p">
      <Col md="5" lg="4" xl="5" className="my-col-form-quote">
        <h1 className="my-col-form-title">
          There are no secrets to{" "}
          <span className="succes text-focus-in">success...</span>
        </h1>
      </Col>
      <Col md="7" lg="7" xl="6">
        <Card className="mx-4 my-card-container">
          <CardBody className="p-4 my-card-body text-focus-in">
            <Form onSubmit={handleSubmit}>
              <p className="text-mute">Create your account</p>
              <div className="avatar">
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="Card image cap"
                  className="avatar-img"
                />
              </div>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-images" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="Picture"
                  autoComplete="picture"
                  name="picture"
                  tag={Field}
                  invalid={Boolean(errors.picture && touched.picture)}
                  value={values.picture}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-user" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="First Name"
                  autoComplete="firstName"
                  name="firstName"
                  tag={Field}
                  invalid={Boolean(errors.firstName && touched.firstName)}
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-user-tag" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="Last Name"
                  autoComplete="lastName"
                  name="lastName"
                  tag={Field}
                  invalid={Boolean(errors.lastName && touched.lastName)}
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="far fa-map" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="Region"
                  autoComplete="region"
                  name="region"
                  tag={Field}
                  invalid={Boolean(errors.region && touched.region)}
                  value={values.region}
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
                  type="text"
                  placeholder="University"
                  autoComplete="university"
                  name="university"
                  tag={Field}
                  invalid={Boolean(errors.university && touched.university)}
                  value={values.university}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-sort-numeric-down" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="age"
                  autoComplete="new-age"
                  name="age"
                  tag={Field}
                  invalid={Boolean(errors.age && touched.age)}
                  value={values.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputGroup>
              <InputGroup className="mb-4">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-user-graduate" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="field of Study"
                  autoComplete="fieldofStudy"
                  name="fieldofStudy"
                  tag={Field}
                  invalid={Boolean(errors.fieldofStudy && touched.fieldofStudy)}
                  value={values.fieldofStudy}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputGroup>
              <Button className="submit-form">Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

interface TOwnProps {}

interface TStateProps {}

interface FormikDispatchProps {
  userId: number;
  onSubmit: (
    profileCredientials: IProfileCredentials,
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
  onSubmit: (IProfileCredentials: IProfileCredentials, id: number) => {
    dispatch(Actions.updateProfile(IProfileCredentials, id));
  }
});
const ProfileWithFormik = withFormik<FormikDispatchProps, IProfileCredentials>({
  validationSchema,
  mapPropsToValues: () => ({
    picture: "",
    firstName: "",
    lastName: "",
    fieldofStudy: "",
    age: "",
    university: "",
    region: ""
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