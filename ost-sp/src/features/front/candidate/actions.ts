import { ThunkAction } from "redux-thunk";
import { updateOne } from "./requests";
import IProfileCredentials from "../../../data/ProfileCredential";
import { IState } from "../../../shared/store";

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
  profileCredentials: IProfileCredentials,
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
