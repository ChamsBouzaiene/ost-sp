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
import MoreInfo, { validationSchema } from "../../../../data/MoreInfo";
import * as Actions from "../actions";
import { StatelessComponent } from "react";
import { ThunkDispatch } from "redux-thunk";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { withFormik, FormikValues, FormikErrors, FormikProps } from "formik";
import "./Profile.css";
//import DropDown from "../../../../shared/components/DropDown";
//import AvatarUpload from "../../../../shared/components/AvatarUpload";

import Label from "reactstrap/lib/Label";

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
    profileCredientials: MoreInfo,
    id: number
  ) => Promise<FormikErrors<FormikValues>> | void;
}

const fileUploadUrl = API_URL + "/attachements/container/upload ";

type Props = DispatchProps & TOwnProps & FormikProps<MoreInfo>;
const Profile: StatelessComponent<Props> = ({
  userId,
  values,
  handleChange,

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
              <p className="text-mute">
                please provide the following documents
              </p>
              <div className="avatar">
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="Card image cap"
                  className="avatar-img"
                />
              </div>

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
                  placeholder="bio..."
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
                {" Upload your CIN image ? "}
              </InputGroupText>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend" />

                <FormGroup>
                  <Label for="exampleFile">CIN</Label>
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
                            cinPicture: fileName
                          });
                          console.log(fileName);
                        });
                    }}
                  />
                  <FormText color="muted">Upload your Cin Picture ...</FormText>
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
    profileCredientials: MoreInfo,
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
  onSubmit: (MoreInfo: MoreInfo, id: number) => {
    dispatch(Actions.updateProfile(MoreInfo, id));
  }
});
const ProfileWithFormik = withFormik<FormikDispatchProps, MoreInfo>({
  validationSchema,
  mapPropsToValues: () => ({
    bio: "",
    step: 5
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
