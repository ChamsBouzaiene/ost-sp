import * as yup from "yup";
import { isRequired } from "./errors";

export const validationSchema = yup.object().shape({
  DateOfBirth: yup.string().required(isRequired("Date Of Birth")),
  gender: yup.string().required(isRequired("Gender")),
  nationality: yup.string().required(isRequired("Nationality")),
  address: yup.string().required(isRequired("address")),
  phoneNumber: yup.string().required(isRequired("phoneNumber")),
  university: yup.string().required(isRequired("university"))
});

interface ITeamCredentials {
  university: string;

  DateOfBirth: string;
  gender: string;
  nationality: string;
  address: string;
  phoneNumber: string;
  step: number;
}

export default ITeamCredentials;
