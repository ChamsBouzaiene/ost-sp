import { API_URL } from "../../../data/Api";
import axios from "axios";
import IProfileCredentials from "../../../data/ProfileCredential";

export const updateOne = (profile: IProfileCredentials, id: number) =>
  axios.patch(`${API_URL}/candidates/${id}`, profile).then(res => res.data);
