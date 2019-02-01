import * as React from "react";
import Application from "./Application";
//import Test from "./Test";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import * as Actions from "../actions";
import IQuestion from "src/data/Question";
import { IState } from "src/shared/store";
import { ThunkDispatch } from "redux-thunk";
import axios from "axios";
import { API_URL } from "src/data/Api";

interface DispatchProps {
  onDidMount: () => IQuestion[] | void;
}

type Props = DispatchProps & TOwnProps;

class ApplicationContainer extends React.Component<Props> {
  state = {};
  handleNoOption = (value: any) => {
    this.setState({
      value: "No"
    });
  };
  handleSelect = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleUserInput = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  handleSubmit = (url: string, state: object, userId: string) => {
    const NewData = Object.keys(state).map(key => {
      if (key.includes("optionstester")) {
        return true;
      } else {
        return [Number(key), state[key]];
      }
    });
    console.log(NewData);
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
    axios.patch(`${API_URL}/candidates/${userId}`, { step: 4 });
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
          handleSelect={this.handleSelect}
          handleNoOption={this.handleNoOption}
        />
      </div>
    );
  }
}
export interface TOwnProps {
  questions: IQuestion[];
  handleUserInput: (e: any) => void;
  handleSelect: (e: any) => void;
  handleNoOption: (value: any) => void;
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
