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
    <Container>
      <Row className="justify-content-center">
        <Col md="9" lg="7" xl="6">
          <Card className="mx-4">
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
                          type="text"
                          placeholder="Answer...."
                          autoComplete="questionOne"
                          name={id.toString()}
                          onChange={e => handleUserInput(e)}
                        />
                      </InputGroup>
                    </React.Fragment>
                  ))}
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
