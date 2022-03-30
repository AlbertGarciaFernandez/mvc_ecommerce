import * as Yup from "yup";

const addEmployeeSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("The name is required")
    .min(2, "This name is too short!")
    .max(50, "This name is too long!")
    .matches(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/, "Only letters accepted"),
  email: Yup.string()
    .email("This must be a valid email address")
    .required("The email is required"),
  profileImage: Yup.string().url("This must be a valid link"),
});

export default addEmployeeSchema;