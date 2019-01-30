import ISelector from "src/data/Selector";
import Axios from "axios";
import { API_URL } from "src/data/Api";

export const addSelector = (selector: ISelector) => {
  return Axios.post(`${API_URL}/admins/addAdmin`, selector).then(
    res => res.data
  );
};
