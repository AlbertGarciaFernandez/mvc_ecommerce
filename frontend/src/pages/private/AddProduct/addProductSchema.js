import * as Yup from "yup";

const addProductSchema = Yup.object().shape({
  title: Yup.string()
    .required("The product name is required")
    .min(2, "This product name is too short!")
    .max(50, "This product name is too long!"),
  price: Yup.number()
    .required("The price is required")
    .lessThan(99999, "Price should be less than $99.999"),
  description: Yup.string()
    .required("The description is required")
    .min(10, "The description is too short!"),
  mainImage: Yup.string()
    .required("A main image is required")
    .min(10, "The URL is too short!"),
  otherImages: Yup.string().required("At least one extra image is required!"),
  starValue: Yup.number()
  .required("At least a star value should be specified!")
  .max(5.1, "This product name is too long!")
  ,
  unitsInStock: Yup.number()
    .required("A stock product should be specified!")
    .min(0, "There should be at least one unit in stock."),
});

export default addProductSchema;