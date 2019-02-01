import axios from "axios";
import IloginCredentials from "../../../data/LoginCredential";
import { API_URL } from "../../../data/Api";
import IToken from "../../../data/Token";
import IUser from "src/data/User";
import IResetPassword from "../../../data/ResetPassword";

export const loginRequest = (
  credientials: IloginCredentials
): Promise<IToken> => {
  return axios
    .post(`${API_URL}/admins/login`, credientials)
    .then(res => res.data);
};
export const getUser = (id: number): Promise<IUser> => {
  console.log(
    axios.defaults.headers.common.Authorization,
    "getUser Header axios"
  );
  return axios.get(`${API_URL}/admins/${id}`).then(res => res.data);
};

export const resetPasswordRequest = ({
  password: newPassword
}: IResetPassword) => {
  return axios
    .post(`${API_URL}/admins/reset-password`, {
      newPassword
    })
    .then(res => res.data);
};
