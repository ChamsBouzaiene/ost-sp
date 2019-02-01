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
  <div className="app d-flex flex-row align-items-center">
    <Row className="justify-content-center application-row">
      <div className="application-container">
        <Col md="12" lg="12" xl="12">
          <Card>
            <CardBody className="p-4">
              <Form>
                <h1>Application</h1>
                <p className="text-muted">Answer this questions</p>
                {questions &&
                  questions
                    .filter(({ id }) => id < 17)
                    .map(({ id, question, recommandation, grade }) => {
                      if (true) {
                        return (
                          <React.Fragment>
                            <p key={id}>{`${id - 5}-${question}`}</p>

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
                            <span>Recommendation</span>
                            <p key={id}>{`${id - 5}-${recommandation}`}</p>
                            <span>{grade}</span>
                            <InputGroup className="mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="far fa-lightbulb" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                type="text"
                                placeholder="grade the candidate"
                              />
                            </InputGroup>
                          </React.Fragment>
                        );
                      }
                      return null;
                    })}

                <Link to="/">
                  <Button
                    className="submit-btn"
                    type="button"
                    onClick={() => handleSubmit(API_URL, state, userId)}
                  >
                    Submit Grades
                  </Button>
                </Link>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </div>
    </Row>
  </div>
);

export default Application;
