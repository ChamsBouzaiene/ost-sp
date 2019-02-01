import * as React from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Row
} from "reactstrap";
import "./application.css";
import { StatelessComponent } from "react";
import { API_URL } from "src/data/Api";
import IQuestion from "src/data/Question";
import { Link } from "react-router-dom";

type Props = TOwnProps;

interface TOwnProps {
  questions: IQuestion[];
  handleUserInput: (e: any) => void;
  handleSubmit: (url: string, state: object, userId: string) => void;
  handleSelect: (e: any) => void;
  userId: any;
  state: any;
  handleNoOption: (value: any) => void;
}

const Application: StatelessComponent<Props> = ({
  questions,
  handleUserInput,
  handleSelect,
  handleSubmit,
  userId,
  state,
  handleNoOption
}) => (
  <div className="app d-flex flex-row align-items-center my-register-row">
    <Container className="application-container">
      <Row className="justify-content-center application-row">
        <Col md="12" lg="12" xl="12">
          <Card>
            <CardBody className="p-4">
              <Form>
                <h1>Application</h1>
                <p className="text-muted">Answer this questions</p>
                {questions &&
                  questions
                    .filter(({ id }) => id > 17)
                    .map(({ id, question }) => {
                      if (!question.includes("video")) {
                        return (
                          <React.Fragment>
                            <p key={id}>{`${id}-${question}`}</p>
                            <InputGroup className="mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="fas fa-university" />
                                </InputGroupText>
                              </InputGroupAddon>

                              <Input
                                type="select"
                                name={id.toString() + " optionstester"}
                                id="levelOfstudies"
                                placeholder="majors"
                                onChange={e => handleSelect(e)}
                                autoComplete="major"
                              >
                                {["No", "Yes"].map((el, id) => (
                                  <option key={id}>{el}</option>
                                ))}
                              </Input>
                            </InputGroup>
                            {state[`${id} optionstester`] === "Yes" ? (
                              <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="far fa-lightbulb" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  type="textarea"
                                  placeholder="Answer...."
                                  autoComplete="questionOne"
                                  name={id.toString()}
                                  onChange={e => handleUserInput(e)}
                                />
                              </InputGroup>
                            ) : null}
                          </React.Fragment>
                        );
                      }
                      return null;
                    })}
                <Row>
                  <Col md="8" lg="8" xl="8">
                    <span>
                      Before submitting your application check the boxes below:{" "}
                    </span>
                    <label className="container">
                      You are currently a student in Tunisia(Undergraduate,
                      graduate, PHD.)
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                    <label className="container">
                      You are available in all key date listed above.
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                    <label className="container">
                      I hereby certify that all the information given in this
                      application is true.
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                    {/* <InputGroupText>
                      <Input
                        addon={true}
                        type="checkbox"
                        value={"ttttttttttttttt"}
                      />
                      
                    </InputGroupText> */}
                  </Col>
                </Row>
                <Link to="/">
                  <Button
                    className="submit-btn"
                    type="button"
                    onClick={() => handleSubmit(API_URL, state, userId)}
                  >
                    Submit Application
                  </Button>
                </Link>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Application;
