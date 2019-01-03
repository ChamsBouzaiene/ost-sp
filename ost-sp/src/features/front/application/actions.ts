// import axios from "axios";
import { ThunkAction } from "redux-thunk";

import { submitApplicationRequest, getQuestionsreq } from "./requests";
import IApplicationCredentials from "../../../data/ApplicationCredential";
import { IState } from "../../../shared/store";
import IQuestion from "../../../data/Question";
import { ActionCreator } from "redux";

export const SUBMIT_APPLICATION = "SUBMIT_APPLICATION";
export const SUBMIT_APPLICATION_SUCCESS = "SUBMIT_APPLICATION_SUCCESS";
export const SUBMIT_APPLICATION_FAILURE = "SUBMIT_APPLICATION_FAILURE";

export interface ISubmitApplicatopn {
  type: typeof SUBMIT_APPLICATION;
}

export interface ISubmitApplicatopnSuccess {
  type: typeof SUBMIT_APPLICATION_SUCCESS;
}

export interface ISubmitApplicatopnFailure {
  type: typeof SUBMIT_APPLICATION_FAILURE;
  error: Error;
}

export type ApplicationActions =
  | ISubmitApplicatopn
  | ISubmitApplicatopnSuccess
  | ISubmitApplicatopnFailure;

export const submitApplication = (
  ApplicationCredentials: IApplicationCredentials
): ThunkAction<void, IState, void, ApplicationActions> => dispatch => {
  dispatch({
    type: SUBMIT_APPLICATION,
    ApplicationCredentials
  });
  submitApplicationRequest(ApplicationCredentials)
    .then(() => {})
    .catch((err: any) => dispatch(submitApplicationFailure(err)));
};

export const submitApplicationSuccess = (): ThunkAction<
  void,
  IState,
  void,
  ISubmitApplicatopnSuccess
> => dispatch => {
  dispatch({
    type: SUBMIT_APPLICATION_SUCCESS
  });
};

export const submitApplicationFailure = (
  error: Error
): ISubmitApplicatopnFailure => ({
  type: SUBMIT_APPLICATION_FAILURE,
  error
});

export const GET_QUESTIONS = "GET_QUESTIONS";
export const GET_QUESTIONS_SUCCESS = "GET_QUESTIONS_SUCCESS";
export const GET_QUESTIONS_FAILURE = "GET_QUESTIONS_FAILURE";

export interface IGetQuestions {
  type: typeof GET_QUESTIONS;
}

export interface IGetQuestionsSuccess {
  type: typeof GET_QUESTIONS_SUCCESS;
  questions: IQuestion[];
}

export interface IGetQuestionsFailure {
  type: typeof GET_QUESTIONS_FAILURE;
  error: Error;
}

export type QuestionsActions =
  | IGetQuestions
  | IGetQuestionsSuccess
  | IGetQuestionsFailure;

export const getQuestions = (): ThunkAction<
  void,
  IState,
  void,
  QuestionsActions
> => dispatch => {
  dispatch({
    type: GET_QUESTIONS
  });
  getQuestionsreq()
    .then(questions => dispatch(getQuestionsSuccess(questions)))
    .catch((err: any) => dispatch(getQuestionsFailure(err)));
};
export const getQuestionsSuccess: ActionCreator<IGetQuestionsSuccess> = (
  questions: IQuestion[]
) => ({
  type: GET_QUESTIONS_SUCCESS,
  questions
});

export const getQuestionsFailure = (error: Error): IGetQuestionsFailure => ({
  type: GET_QUESTIONS_FAILURE,
  error
});

export type All = QuestionsActions | ApplicationActions;
