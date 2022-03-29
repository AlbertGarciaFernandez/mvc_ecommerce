import * as Yup from "yup";

const signInSchema = Yup.object().shape({
  password: Yup.string()
    .min(3, "The password is too short")
    .max(20, "The password is too long"),
  email: Yup.string().email("This must be a valid email address"),
});

export default signInSchema;