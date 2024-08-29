import * as yup from "yup";

export const schema = yup
  .object({
    email: yup.string().email("Email not found").required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();
