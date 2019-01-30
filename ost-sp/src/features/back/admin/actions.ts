import { ThunkAction } from "redux-thunk";
import { addSelector } from "./requests";
import { IState } from "../../../shared/store";
import ISelector from "src/data/Selector";

export const POST_SELECTOR = "POST_SELECTOR";
export const POST_SELECTOR_SUCCESS = "POST_SELECTOR_SUCCE";
export const POST_SELECTOR_FAILURE = "POST_SELECTOR_FAILURE";

export interface IAddSelector {
  type: typeof POST_SELECTOR;
}

export interface IAddSelectorSuccess {
  type: typeof POST_SELECTOR_SUCCESS;
  selector: ISelector;
}

export interface IAddSelectorFailure {
  type: typeof POST_SELECTOR_FAILURE;
  error: Error;
}

export type AddSelectorActions =
  | IAddSelector
  | IAddSelectorSuccess
  | IAddSelectorFailure;

export const postSelector = (
  selector: ISelector
): ThunkAction<void, IState, void, AddSelectorActions> => dispatch => {
  dispatch({
    type: POST_SELECTOR,
    selector
  });
  addSelector(selector)
    .then((selector: ISelector) => {
      dispatch(postSelectorSuccess(selector));
    })
    .catch((err: any) => dispatch(postSelectorFailure(err)));
};

export const postSelectorSuccess = (
  selector: ISelector
): ThunkAction<void, IState, void, IAddSelectorSuccess> => dispatch => {
  dispatch({
    type: POST_SELECTOR_SUCCESS,
    selector
  });
};

export const postSelectorFailure = (error: Error): IAddSelectorFailure => ({
  type: POST_SELECTOR_FAILURE,
  error
});

export type All = AddSelectorActions;
