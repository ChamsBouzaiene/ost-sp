import axios from "axios"
import { ThunkAction } from "redux-thunk"

import { loginRequest } from "./requests"
import IToken from '../../../data/Token'
import ILoginCredentials from '../../../data/LoginCredential'
import { IState } from "../../../shared/store"




export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const REDIRECT_HOME = 'REDIRECT_HOME'

export interface ILogin {
    type : typeof LOGIN
}

export interface ILoginSuccess {
    type : typeof LOGIN_SUCCESS,
    token : IToken
}

export interface ILoginFailure {
    type: typeof LOGIN_FAILURE
    error : Error
}

export interface IRedirectToHome {
    type: typeof REDIRECT_HOME    
}

type LoginActions = ILogin | ILoginSuccess | ILoginFailure

export const login = (
    loginCredentials : ILoginCredentials
): ThunkAction<void, IState, void, LoginActions> => ( dispatch ) => {
    dispatch({
        type : LOGIN,
        loginCredentials
    })
    loginRequest(loginCredentials)
        .then((token:any )  => {
            axios.defaults.headers.common.Authorization = token.id
            localStorage.setItem('token' , JSON.stringify(token))
            dispatch(loginSuccess(token))
        })
        .catch((err:any ) => dispatch(loginFailure(err)))

}

export const loginSuccess = (
    token: IToken
) : ThunkAction<void, IState, void, ILoginSuccess> => dispatch => {
    dispatch({
        type : LOGIN_SUCCESS,
        token
    })
}

export const loginFailure = 
    (error: Error) : ILoginFailure => 
    ({
        type : LOGIN_FAILURE,
        error
    })

export type All = LoginActions
export type Redirect = IRedirectToHome
