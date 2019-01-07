import axios from "axios";
import { ThunkAction } from "redux-thunk";

import { loginRequest, getUser } from "./requests";
import IToken from "../../../data/Token";
import IUser from "../../../data/User";
import ILoginCredentials from "../../../data/LoginCredential";
import { IState } from "../../../shared/store";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const REDIRECT_HOME = "REDIRECT_HOME";

export interface ILogin {
  type: typeof LOGIN;
}

export interface ILoginSuccess {
  type: typeof LOGIN_SUCCESS;
  token: IToken;
}

export interface ILoginFailure {
  type: typeof LOGIN_FAILURE;
  error: Error;
}

export interface IRedirectToHome {
  type: typeof REDIRECT_HOME;
}

type LoginActions = ILogin | ILoginSuccess | ILoginFailure;

export const login = (
  loginCredentials: ILoginCredentials
): ThunkAction<void, IState, void, LoginActions> => dispatch => {
  dispatch({
    type: LOGIN,
    loginCredentials
  });
  loginRequest(loginCredentials)
    .then((token: any) => {
      axios.defaults.headers.common.Authorization = token.id;
      localStorage.setItem("token", JSON.stringify(token));
      dispatch(loginSuccess(token));
    })
    .catch((err: any) => dispatch(loginFailure(err)));
};

export const loginSuccess = (
  token: IToken
): ThunkAction<void, IState, void, ILoginSuccess> => dispatch => {
  dispatch({
    type: LOGIN_SUCCESS,
    token
  });
  dispatch(getCurrentUser(token.userId));
};

export const loginFailure = (error: Error): ILoginFailure => ({
  type: LOGIN_FAILURE,
  error
});

// Logout Action
export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export interface Logout {
  type: typeof LOGOUT;
}

export interface LogoutSuccess {
  type: typeof LOGOUT_SUCCESS;
}

export interface LogoutFailure {
  type: typeof LOGOUT_FAILURE;
  error: Error;
}

type LogoutActions = Logout | LogoutSuccess;

export const logout = (): ThunkAction<
  void,
  IState,
  void,
  LogoutActions
> => dispatch => {
  dispatch({
    type: LOGOUT
  });
  axios.defaults.headers.common.Authorization = null;
  localStorage.setItem("token", "");
  dispatch(logoutSuccess());
};

export const logoutSuccess = (): ThunkAction<
  void,
  IState,
  void,
  LogoutSuccess
> => dispatch => {
  dispatch({
    type: LOGOUT_SUCCESS
  });
};

// Get Current User
export const GET_CURRENT_USER = "GET_CURRENT_USER";
export const GET_CURRENT_USER_SUCCESS = "GET_CURRENT_USER_SUCCESS";
export const GET_CURRENT_USER_FAILURE = "GET_CURRENT_USER_FAILURE";

export interface IgetCurrentUser {
  type: typeof GET_CURRENT_USER;
}

export interface IgetCurrentUserSuccess {
  type: typeof GET_CURRENT_USER_SUCCESS;
  user: IUser;
}

export interface IgetCurrentUserFailure {
  type: typeof GET_CURRENT_USER_FAILURE;
  error: Error;
}

type getCurrentUser =
  | IgetCurrentUser
  | IgetCurrentUserSuccess
  | IgetCurrentUserFailure;

export const getCurrentUser = (
  id: number
): ThunkAction<void, IState, void, getCurrentUser> => dispatch => {
  dispatch({
    type: GET_CURRENT_USER
  });
  getUser(id)
    .then((user: IUser) => dispatch(getCurrentUserSuccess(user)))
    .catch((err: Error) => dispatch(getCurrentUserFailure(err)));
};

export const getCurrentUserSuccess = (
  user: IUser
): ThunkAction<void, IState, void, getCurrentUser> => dispatch => {
  dispatch({
    type: GET_CURRENT_USER_SUCCESS,
    user
  });
};
export const getCurrentUserFailure = (
  error: Error
): ThunkAction<void, IState, void, getCurrentUser> => dispatch => {
  dispatch({
    type: GET_CURRENT_USER_FAILURE,
    error
  });
};

export type Redirect = IRedirectToHome;

import { resetPasswordRequest } from "./requests";
import IResetPasswordCredentials from "../../../data/ResetPassword";

export const RESETPASSWORD = "RESETPASSWORD";
export const RESETPASSWORD_SUCCESS = "RESETPASSWORD_SUCCESS";
export const RESETPASSWORD_FAILURE = "RESETPASSWORD_FAILURE";

export interface IResetPassword {
  type: typeof RESETPASSWORD;
}

export interface IResetPasswordSuccess {
  type: typeof RESETPASSWORD_SUCCESS;
}

export interface IResetPasswordFailure {
  type: typeof RESETPASSWORD_FAILURE;
  error: Error;
}

type ResetPasswordActions =
  | IResetPassword
  | IResetPasswordSuccess
  | IResetPasswordFailure;

export const ResetPassword = (
  resetPasswordCredentials: IResetPasswordCredentials
): ThunkAction<void, IState, void, ResetPasswordActions> => dispatch => {
  dispatch({
    type: RESETPASSWORD,
    resetPasswordCredentials
  });
  resetPasswordRequest(resetPasswordCredentials)
    .then(() => {
      dispatch(resetPasswordSuccess());
    })
    .catch((err: any) => dispatch(resetPasswordFailure(err)));
};

export const resetPasswordSuccess = (): ThunkAction<
  void,
  IState,
  void,
  IResetPasswordSuccess
> => dispatch => {
  dispatch({
    type: RESETPASSWORD_SUCCESS
  });
};

export const resetPasswordFailure = (error: Error): IResetPasswordFailure => ({
  type: RESETPASSWORD_FAILURE,
  error
});

export type All =
  | LoginActions
  | LogoutActions
  | getCurrentUser
  | ResetPasswordActions;
