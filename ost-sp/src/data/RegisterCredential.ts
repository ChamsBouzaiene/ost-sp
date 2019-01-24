import * as yup from "yup";
import {
  isTooShort,
  isTooLong,
  isInvalid,
  isRequired,
  isMatched
} from "./errors";

export const validationSchema = yup.object().shape({
  Surname: yup.string().required(isRequired("Surname")),
  FamilyName: yup.string().required(isRequired("Family Name")),
  DateOfBirth: yup.string().required(isRequired("Date Of Birth")),
  gender: yup.string().required(isRequired("Gender")),
  nationality: yup.string().required(isRequired("Nationality")),
  address: yup.string().required(isRequired("address")),
  phoneNumber: yup.string().required(isRequired("phoneNumber")),
  email: yup
    .string()
    .min(3, isTooShort("Email"))
    .max(50, isTooLong("Email"))
    .email(isInvalid("Email"))
    .required(isRequired("Email")),
  cin: yup
    .string()
    .test("len", isInvalid("CIN"), val => val.length === 8)
    .required(isRequired("CIN")),
  password: yup
    .string()
    .min(8, isTooShort("Password"))
    .max(30, isTooLong("Password"))
    .required(isRequired("Password")),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(isMatched("Password"))
});

// interface Gender {
//   Male?: string;
//   Female?: string;
// }

interface IRegisterCredentials {
  Surname: string;
  FamilyName: string;
  DateOfBirth: string;
  gender: string;
  nationality: string;
  address: string;
  phoneNumber: string;
  email: string;
  cin: string;
  password: string;
  confirmPassword: string;
}

export default IRegisterCredentials;
