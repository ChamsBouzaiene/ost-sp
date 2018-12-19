import axios from "axios"
import IloginCredentials from "../../../data/LoginCredential"
import { API_URL } from "../../../data/Api"
import IToken from '../../../data/Token'


export const loginRequest = (credientials : IloginCredentials) : Promise<IToken> => {
    return axios
    .post(`${API_URL}/candidates/login`, credientials)
    .then(res => res.data)
}