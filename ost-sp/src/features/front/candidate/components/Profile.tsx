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
//import DropDown from "../../../../shared/components/DropDown";
//import AvatarUpload from "../../../../shared/components/AvatarUpload";
import { universities } from "../../../../data/Universities";
import { majors } from "../../../../data/Majors";
import { levelOfstudies } from "../../../../data/LevelOfstudies";
import Region from "../../../../data/Region";
import Label from "reactstrap/lib/Label";
import FormFeedback from "reactstrap/lib/FormFeedback";
import FormGroup from "reactstrap/lib/FormGroup";
import FormText from "reactstrap/lib/FormText";
import { API_URL } from "../../../../data/Api";
//import Label from "reactstrap/lib/Label";
import Axios from "axios";
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
    profileCredientials: IProfileCredentials,
    id: number
  ) => Promise<FormikErrors<FormikValues>> | void;
}

const fileUploadUrl = API_URL + "/attachements/container/upload ";

type Props = DispatchProps & TOwnProps & FormikProps<IProfileCredentials>;
const Profile: StatelessComponent<Props> = ({
  userId,
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
                    <i className="fab fa-facebook-f" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="facebook profile"
                  autoComplete="facebookLink"
                  name="facebookLink"
                  tag={Field}
                  invalid={Boolean(errors.facebookLink && touched.facebookLink)}
                  value={values.facebookLink}
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
                  name="major"
                  id="levelOfstudies"
                  placeholder="majors"
                  autoComplete="major"
                  invalid={Boolean(errors.major && touched.major)}
                  value={values.major}
                  onChange={handleChange}
                >
                  {majors.map(el => (
                    <option key={el.id}>{el.name}</option>
                  ))}
                </Input>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-user-tag" />
                  </InputGroupText>
                </InputGroupAddon>

                <Input
                  type="select"
                  name="levelOfstudies"
                  id="levelOfstudies"
                  placeholder="level Of studies"
                  autoComplete="levelOfstudies"
                  invalid={Boolean(
                    errors.levelOfstudies && touched.levelOfstudies
                  )}
                  value={values.levelOfstudies}
                  onChange={handleChange}
                >
                  {levelOfstudies.map(el => (
                    <option key={el.id}>{el.name}</option>
                  ))}
                </Input>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="far fa-map" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="select"
                  name="region"
                  id="region"
                  placeholder="region"
                  autoComplete="region"
                  invalid={Boolean(errors.region && touched.region)}
                  value={values.region}
                  onChange={handleChange}
                >
                  {Object.values(Region).map((el, i) => (
                    <option key={i}>{el}</option>
                  ))}
                </Input>
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
              <InputGroupText>
                <i className="fas fa-check-circle" />
                {" Write down your bio ? "}
              </InputGroupText>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend" />

                <Input
                  type="textarea"
                  name="bio"
                  id="bio"
                  placeholder="bio"
                  autoComplete="bio"
                  invalid={Boolean(errors.bio && touched.bio)}
                  value={values.bio}
                  onChange={handleChange}
                />
              </InputGroup>
              <InputGroupText>
                <i className="fas fa-check-circle" />
                {" Upload your resume ? "}
              </InputGroupText>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend" />

                <FormGroup>
                  <Label for="exampleFile">Resume</Label>
                  <Input
                    type="file"
                    placeholder="Resume"
                    autoComplete="Resume"
                    onChange={e => {
                      console.log((e as any).target.files[0]);

                      const file = (e as any).target.files[0];
                      const formData = new FormData();
                      formData.append("file", file);
                      const config = {
                        headers: {
                          "content-type": "multipart/form-data"
                        }
                      };
                      return Axios.post(fileUploadUrl, formData, config)
                        .then(res => res.data)
                        .then(data => data.result.files.file[0].name)
                        .then(fileName => {
                          Axios.patch(`${API_URL}/candidates/${userId}`, {
                            resume: fileName
                          });
                          console.log(fileName);
                        });
                    }}
                  />
                  <FormText color="muted">Upload your resmue ...</FormText>
                </FormGroup>
              </InputGroup>
              <InputGroupText>
                <i className="fas fa-check-circle" />
                {" Upload your picture ? "}
              </InputGroupText>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend" />

                <FormGroup>
                  <Label for="exampleFile">Avatar</Label>
                  <Input
                    type="file"
                    placeholder="avatar"
                    autoComplete="avatar"
                    onChange={e => {
                      console.log((e as any).target.files[0]);

                      const file = (e as any).target.files[0];
                      const formData = new FormData();
                      formData.append("file", file);
                      const config = {
                        headers: {
                          "content-type": "multipart/form-data"
                        }
                      };
                      return Axios.post(fileUploadUrl, formData, config)
                        .then(res => res.data)
                        .then(data => data.result.files.file[0].name)
                        .then(fileName => {
                          Axios.patch(`${API_URL}/candidates/${userId}`, {
                            avatar: fileName
                          });
                          console.log(fileName);
                        });
                    }}
                  />
                  <FormText color="muted">Upload a decent picture ...</FormText>
                </FormGroup>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-check-circle" />
                    {" You hold a valid passeport until september 2019? "}
                  </InputGroupText>
                </InputGroupAddon>

                <Input
                  type="select"
                  name="validPassport"
                  id="validPassport"
                  placeholder="validPassport"
                  autoComplete="validPassport"
                  invalid={Boolean(
                    errors.validPassport && touched.validPassport
                  )}
                  value={values.validPassport}
                  onChange={handleChange}
                >
                  You hold a valid passeport until september 2019?
                  {["Yes", "No"].map((el, i) => (
                    <option key={i}>{el}</option>
                  ))}
                </Input>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-check-circle" />
                    You hold a valid university registration certificate for
                    2019-2020?
                  </InputGroupText>
                </InputGroupAddon>

                <Input
                  type="select"
                  name="validUniCertificate"
                  id="validUniCertificate"
                  placeholder="validUniCertificate"
                  autoComplete="validUniCertificate"
                  invalid={Boolean(
                    errors.validUniCertificate && touched.validUniCertificate
                  )}
                  value={values.validUniCertificate}
                  onChange={handleChange}
                >
                  {["Yes", "No"].map((el, i) => (
                    <option key={i}>{el}</option>
                  ))}
                </Input>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="far fa-comment-dots" />
                    Insert recommendation code if applicable:
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="Recomendation Code"
                  autoComplete="recomendationCode"
                  name="recomendationCode"
                  tag={Field}
                  invalid={Boolean(
                    errors.recomendationCode && touched.recomendationCode
                  )}
                  value={values.recomendationCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputGroup>
              {/* <Input
                  type="text"
                  placeholder="University"
                  autoComplete="university"
                  name="university"
                  tag={Field}
                  invalid={Boolean(errors.university && touched.university)}
                  value={values.university}
                  onChange={handleChange}
                  onBlur={handleBlur}
                /> */}
              {/* <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-university" />
                  </InputGroupText>
                </InputGroupAddon>
                <DropDown
                  list={universities}
                  name={"university"}
                  value={values.university}
                  handleChange={handleChange}
                />
              </InputGroup> */}

              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText />
                </InputGroupAddon>
                <Label check={true}>
                  <Input
                    type="checkbox"
                    name="dates"
                    invalid={Boolean(errors.dates && touched.dates)}
                    onChange={handleChange}
                  />{" "}
                  You are available during all above mentioned dates
                </Label>
                <FormFeedback tooltip={true}>{errors.dates}</FormFeedback>
              </InputGroup>
              <Button type="submit" className="submit-form">
                Submit
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

interface TOwnProps {
  userId: number;
}

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
    recomendationCode: "",
    facebookLink: "",
    validUniCertificate: "",
    major: "Major",
    levelOfstudies: "Level Of Studies",
    validPassport: "",
    university: "university",
    region: "",

    bio: "",
    dates: false
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
