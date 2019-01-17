import { ThunkAction } from "redux-thunk";
import { getAll, getOne } from "./requests";
import Entity from "../../../data/Entity";
import { IState } from "../../../shared/store";

//Get Entity

export const GET_ENTITY = "GET_ENTITY";
export const GET_ENTITY_SUCCESS = "GET_ENTITY_SUCCESS";
export const GET_ENTITY_FAILURE = " GET_ENTITY_FAILURE";

export interface IGetEntity {
  type: typeof GET_ENTITY;
}

export interface IGetEntitySuccess {
  type: typeof GET_ENTITY_SUCCESS;
  entity: Entity;
}

export interface IGetEntityFailure {
  type: typeof GET_ENTITY_FAILURE;
  error: Error;
}

export type GetEntityActions =
  | IGetEntity
  | IGetEntitySuccess
  | IGetEntityFailure;

export const getEntity = (
  entity: string,
  id: string
): ThunkAction<void, IState, void, GetEntityActions> => dispatch => {
  dispatch({
    type: GET_ENTITY,
    entity
  });
  getOne(entity, id)
    .then((Entity: Entity) => {
      dispatch(getEntitySuccess(Entity));
    })
    .catch((err: any) => dispatch(getEntityFailure(err)));
};

export const getEntitySuccess = (
  entity: Entity
): ThunkAction<void, IState, void, IGetEntitySuccess> => dispatch => {
  dispatch({
    type: GET_ENTITY_SUCCESS,
    entity
  });
};

export const getEntityFailure = (error: Error): IGetEntityFailure => ({
  type: GET_ENTITY_FAILURE,
  error
});

//Get All Entities

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

export type All = GetAllEntitysActions | GetEntityActions;
