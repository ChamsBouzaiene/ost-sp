import * as yup from "yup";
import { isRequired } from "./errors";

export const validationSchema = yup.object().shape({
  facebookLink: yup.string().required(isRequired("facebook Link")),
  major: yup.string().required(isRequired("Major")),
  levelOfstudies: yup.string().required(isRequired("Level of studies")),
  university: yup.string().required(isRequired("university")),
  region: yup.string().required(isRequired("region")),
  dates: yup.boolean().required(isRequired("dates")),
  validPassport: yup.string().required(isRequired("validPassport")),
  validUniCertificate: yup.string().required(isRequired("validUniCertificate")),
  DateOfBirth: yup.string().required(isRequired("Date Of Birth")),
  gender: yup.string().required(isRequired("Gender")),
  nationality: yup.string().required(isRequired("Nationality")),
  address: yup.string().required(isRequired("address")),
  phoneNumber: yup.string().required(isRequired("phoneNumber")),
  recomendationCode: yup.string()
});

interface IProfileCredentials {
  facebookLink: string;
  major: string;
  levelOfstudies: string;
  university: string;
  region: string;
  dates: boolean;
  validPassport: string;
  validUniCertificate: string;
  recomendationCode: string;
  DateOfBirth: string;
  gender: string;
  nationality: string;
  address: string;
  phoneNumber: string;
  step: number;
}

export default IProfileCredentials;
