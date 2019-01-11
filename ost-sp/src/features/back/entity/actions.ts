import { ThunkAction } from "redux-thunk";
import { getAll } from "./requests";
import Entity from "../../../data/Entity";
import { IState } from "../../../shared/store";

export const GET_ALL_ENTITYS = "GET_ALL_ENTITYS";
export const GET_ALL_ENTITYS_SUCCESS = "GET_ALL_ENTITYS_SUCCESS";
export const GET_ALL_ENTITYS_FAILURE = " GET_ALL_ENTITYS_FAILURE";

export interface IGetAllEntitys {
  type: typeof GET_ALL_ENTITYS;
}

export interface IGetAllEntitysSuccess {
  type: typeof GET_ALL_ENTITYS_SUCCESS;
  entity: Entity;
}

export interface IGetAllEntitysFailure {
  type: typeof GET_ALL_ENTITYS_FAILURE;
  error: Error;
}

export type GetAllEntitysActions =
  | IGetAllEntitys
  | IGetAllEntitysSuccess
  | IGetAllEntitysFailure;

export const getAllEntitys = (
  entity: string
): ThunkAction<void, IState, void, GetAllEntitysActions> => dispatch => {
  dispatch({
    type: GET_ALL_ENTITYS,
    entity
  });
  getAll(entity)
    .then((Entity: Entity) => {
      dispatch(getAllEntitysSuccess(Entity));
    })
    .catch((err: any) => dispatch(getAllEntitysFailure(err)));
};

export const getAllEntitysSuccess = (
  entity: Entity
): ThunkAction<void, IState, void, IGetAllEntitysSuccess> => dispatch => {
  dispatch({
    type: GET_ALL_ENTITYS_SUCCESS,
    entity
  });
};

export const getAllEntitysFailure = (error: Error): IGetAllEntitysFailure => ({
  type: GET_ALL_ENTITYS_FAILURE,
  error
});

export type All = GetAllEntitysActions;
