import * as yup from "yup";
import { isTooShort, isTooLong, isRequired, isMatched } from "./errors";

interface IResetPassword {
  password: string;
  confirmPassword: string;
}

export const validationSchema = yup.object().shape({
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

export default IResetPassword;
