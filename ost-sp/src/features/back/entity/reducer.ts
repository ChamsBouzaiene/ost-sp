import { Reducer } from "redux";
import * as Actions from "./actions";

const entity: Reducer<any, Actions.All> = (state = [], action) => {
  switch (action.type) {
    case Actions.GET_ALL_ENTITYS_SUCCESS:
      return { ...state, entities: action.entity };
  }
  return state;
};

export default entity;
