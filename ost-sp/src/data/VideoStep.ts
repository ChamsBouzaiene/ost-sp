import * as yup from "yup";
import { isRequired } from "./errors";

export const validationSchema = yup.object().shape({
  youtube: yup.string().required(isRequired("youtube"))
});

interface YoutubeStep {
  youtube: string;
  step: 6;
}

export default YoutubeStep;
