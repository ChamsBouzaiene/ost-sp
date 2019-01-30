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
import YoutubStep, { validationSchema } from "../../../../data/VideoStep";
import * as Actions from "../actions";
import { StatelessComponent } from "react";
import { ThunkDispatch } from "redux-thunk";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { withFormik, FormikValues, FormikErrors, FormikProps } from "formik";
import "./Profile.css";
import { API_URL } from "src/data/Api";
import Axios from "axios";
//import DropDown from "../../../../shared/components/DropDown";
//import AvatarUpload from "../../../../shared/components/AvatarUpload";

//import { API_URL } from "../../../../data/Api";

interface DispatchProps {
  onSubmit: (
    YoutubLink: YoutubStep
  ) => Promise<FormikErrors<FormikValues>> | void;
}

type Props = DispatchProps & TOwnProps & FormikProps<YoutubStep>;
const VideoStep: StatelessComponent<Props> = ({
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
              <p className="text-mute">Please provide the following material</p>
              <div className="avatar">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/complete-set-icons/512/video512x512.png"
                  alt="Card image cap"
                  className="avatar-img"
                />
              </div>
              <span>
                Put a link to a youtube video where you respond to the question:
                Why should we select you?
              </span>
              <InputGroupText>
                <i className="fas fa-check-circle" />
                {" Link to the youtbe video "}
              </InputGroupText>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend" />

                <Input
                  type="text"
                  name="youtube"
                  id="youtube"
                  placeholder="https://www.youtube.com/watch?v=tPkfMf-FFW"
                  autoComplete="youtube"
                  invalid={Boolean(errors.youtube && touched.youtube)}
                  value={values.youtube}
                  onChange={handleChange}
                />
              </InputGroup>
              <span>Description of this step : </span>
              <br />
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur porro, enim harum veritatis pariatur ab corrupti
                quaerat. Consequatur eum repudiandae aperiam. Quas magnam harum
                adipisci dolore odit consequatur earum ratione?{" "}
              </span>
              <br />
              <span>follow this link to get some more information : </span>
              <br />
              <a href="#">Link</a>
              <br />
              <Button
                type="submit"
                className="submit-form"
                onClick={() =>
                  Axios.patch(`${API_URL}/candidates/${userId}`, { step: 6 })
                }
              >
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
    YoutubLink: YoutubStep
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
  onSubmit: (YoutubLink: YoutubStep) => {
    dispatch(Actions.submitVideo(YoutubLink));
  }
});
const ProfileWithFormik = withFormik<FormikDispatchProps, YoutubStep>({
  validationSchema,
  mapPropsToValues: () => ({
    youtube: "",
    step: 6
  }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.onSubmit(values);

    if (errors) {
      setErrors(errors);
    }
  }
})(VideoStep);

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(ProfileWithFormik);
