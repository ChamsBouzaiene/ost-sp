import * as yup from "yup";
import { isRequired } from "./errors";

export const validationSchema = yup.object().shape({
  picture: yup.string().required(isRequired("picture")),
  firstName: yup.string().required(isRequired("firstName")),
  lastName: yup.string().required(isRequired("lastName")),
  age: yup.string().required(isRequired("age")),
  fieldofStudy: yup.string().required(isRequired("fieldofStudy")),
  university: yup.string().required(isRequired("university")),
  region: yup.string().required(isRequired("region"))
});

interface IProfileCredentials {
  picture: string;
  firstName: string;
  lastName: string;
  fieldofStudy: string;
  age: string;
  university: string;
  region: string;
}

export default IProfileCredentials;
