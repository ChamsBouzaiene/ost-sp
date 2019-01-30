import * as yup from "yup";
import { isRequired } from "./errors";

export const validationSchema = yup.object().shape({
  bio: yup.string().required(isRequired("bio"))
});

interface MoreInfo {
  bio: string;
  step: number;
}

export default MoreInfo;
