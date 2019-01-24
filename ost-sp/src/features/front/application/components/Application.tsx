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
  userId: any;
  state: any;
}

const Application: StatelessComponent<Props> = ({
  questions,
  handleUserInput,
  handleSubmit,
  userId,
  state
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
                  questions.map(({ id, question }) => (
                    <React.Fragment>
                      <p key={id}>{question}</p>
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
                    </React.Fragment>
                  ))}
                <Row>
                  <Col md="6" lg="6" xl="6">
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
                <Link to="/application/confirmed">
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
