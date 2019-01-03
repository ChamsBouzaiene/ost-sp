import * as React from "react";
import Application from "./Application";
//import Test from "./Test";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import * as Actions from "../actions";
import IQuestion from "src/data/Question";
import { IState } from "src/shared/store";
import { ThunkDispatch } from "redux-thunk";
import axios from "axios";

interface DispatchProps {
  onDidMount: () => IQuestion[] | void;
}

type Props = DispatchProps & TOwnProps;

class ApplicationContainer extends React.Component<Props> {
  state = {};
  handleUserInput = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  handleSubmit = (url: string, state: object, userId: string) => {
    const NewData = Object.keys(state).map(key => {
      return [Number(key), state[key]];
    });
    NewData.map((entity: any) =>
      axios
        .post(`${url}/answers`, {
          answer: entity[1],
          assessmentId: entity[0],
          candidateId: userId
        })
        .then(res => console.log("data", res.data))
        .catch(err => console.log("err", err))
    );
  };

  componentWillMount() {
    this.props.onDidMount();
  }
  render() {
    return (
      <div>
        <Application
          questions={this.props.questions}
          handleUserInput={this.handleUserInput}
          handleSubmit={this.handleSubmit}
          userId={this.props.userId}
          state={this.state}
        />
      </div>
    );
  }
}
export interface TOwnProps {
  questions: IQuestion[];
  handleUserInput: (e: any) => void;
  handleSubmit: (url: string, state: object, userId: string) => void;
  userId: any;
  state: any;
}

interface TStateProps {}
const mapStateToProps: MapStateToProps<TStateProps, TOwnProps, IState> = (
  state: IState
) => ({
  questions: state.questions,
  userId: state.auth.userId
});
const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (
  dispatch: ThunkDispatch<IState, void, Actions.QuestionsActions>
) => ({
  onDidMount: () => {
    dispatch(Actions.getQuestions());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationContainer);
