import { PASSWORD_REQUIREMENTS } from "@/constants/regex";
import * as yup from "yup";

export const schema = yup
  .object({
    email: yup.string().email("Email not found").required("Email is required"),
    name: yup.string().required("Name is required"),
    password: yup
      .string()
      .min(8, "password must have at least 8 characters")
      .max(15, "maximum of 15 characters is allowed")
      .required("This field is required")
      .matches(PASSWORD_REQUIREMENTS, {
        message:
          "Your password must include at least 1 uppercase letter, 1 lowercase letter, 1 special character (@$!%*?&), and 1 number.",
      }),
    confirmPassword: yup
      .string()
      .required("This field is required")
      .oneOf([yup.ref("password")], "Your passwords do not match."),
  })
  .required();
