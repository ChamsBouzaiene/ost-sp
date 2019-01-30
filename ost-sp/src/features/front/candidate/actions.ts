import { ThunkAction } from "redux-thunk";
import { updateOne, submitVideoReq } from "./requests";
import IProfileCredentials from "../../../data/ProfileCredential";
import { IState } from "../../../shared/store";
import MoreInfo from "src/data/MoreInfo";
import YoutubeStep from "src/data/VideoStep";
import { push, RouterAction } from "react-router-redux";

export const SUBMIT_VIDEO = "SUBMIT_VIDEO";
export const SUBMIT_VIDEO_SUCCESS = "SUBMIT_VIDEO_SUCCESS";
export const SUBMIT_VIDEO_FAILURE = " SUBMIT_VIDEO_FAILURE";

export interface ISubmitVideo {
  type: typeof SUBMIT_VIDEO;
}

export interface ISubmitVideoSuccess {
  type: typeof SUBMIT_VIDEO_SUCCESS;
}

export interface ISubmitVideoFailure {
  type: typeof SUBMIT_VIDEO_FAILURE;
  error: Error;
}

export type SubmitVideoActions =
  | ISubmitVideo
  | ISubmitVideoSuccess
  | ISubmitVideoFailure;

export const submitVideo = (
  youtubeLink: YoutubeStep
): ThunkAction<void, IState, void, SubmitVideoActions> => dispatch => {
  dispatch({
    type: SUBMIT_VIDEO,
    youtubeLink
  });
  submitVideoReq(youtubeLink)
    .then(() => {
      dispatch(submitVideoSuccess());
    })
    .catch((err: any) => dispatch(submitVideoFailure(err)));
};

export const submitVideoSuccess = (): ThunkAction<
  void,
  IState,
  void,
  ISubmitVideoSuccess | RouterAction
> => dispatch => {
  dispatch({
    type: SUBMIT_VIDEO_SUCCESS
  });
  dispatch(push("/application/confirmed"));
};

export const submitVideoFailure = (error: Error): ISubmitVideoFailure => ({
  type: SUBMIT_VIDEO_FAILURE,
  error
});

// Submit Video as answer for 4 questions

export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAILURE = " UPDATE_PROFILE_FAILURE";

export interface IUpdateProfile {
  type: typeof UPDATE_PROFILE;
}

export interface IUpdateProfileSuccess {
  type: typeof UPDATE_PROFILE_SUCCESS;
}

export interface IUpdateProfileFailure {
  type: typeof UPDATE_PROFILE_FAILURE;
  error: Error;
}

export type UpdateProfilActions =
  | IUpdateProfile
  | IUpdateProfileSuccess
  | IUpdateProfileFailure;

export const updateProfile = (
  profileCredentials: IProfileCredentials | MoreInfo,
  id: number
): ThunkAction<void, IState, void, UpdateProfilActions> => dispatch => {
  dispatch({
    type: UPDATE_PROFILE,
    profileCredentials,
    id
  });
  updateOne(profileCredentials, id)
    .then(() => {
      dispatch(updateProfileSuccess());
    })
    .catch((err: any) => dispatch(updateProfileFailure(err)));
};

export const updateProfileSuccess = (): ThunkAction<
  void,
  IState,
  void,
  IUpdateProfileSuccess
> => dispatch => {
  dispatch({
    type: UPDATE_PROFILE_SUCCESS
  });
};

export const updateProfileFailure = (error: Error): IUpdateProfileFailure => ({
  type: UPDATE_PROFILE_FAILURE,
  error
});

export type All = UpdateProfilActions | SubmitVideoActions;
