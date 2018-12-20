import { Reducer } from "redux";

import * as Actions from "./actions";

const initAuth = () => {
  let savedToken;
  try {
    savedToken = JSON.parse(localStorage.getItem("token") as any);
  } catch (err) {
    savedToken = null;
  }
  return savedToken || {};
};

const auth: Reducer<any, Actions.All> = (state = initAuth(), action) => {
  switch (action.type) {
    case Actions.LOGIN_SUCCESS:
      return action.token;
    case Actions.LOGOUT_SUCCESS:
      return {};
  }
  return state;
};

export default auth;
