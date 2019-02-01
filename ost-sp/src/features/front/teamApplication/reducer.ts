import { Reducer } from "redux";
import * as Actions from "./actions";
//import { keyBy } from "lodash";

const questions: Reducer<any, Actions.All> = (state = [], action) => {
  switch (action.type) {
    case Actions.GET_QUESTIONS_SUCCESS:
      return [...state, ...action.questions];
  }
  return state;
};

export default questions;
