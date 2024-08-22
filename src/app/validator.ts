import * as yup from "yup";

export const bodyValidator = yup.object().shape({
  date: yup.date(),
});
