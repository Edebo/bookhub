import * as yup from "yup";

let schema = yup.object().shape({
  publisherName: yup.string().required(),
  phoneNumber: yup
    .number()
    .required()
    .positive()
    .integer(),
  email: yup
    .string()
    .email()
    .required(),
  address: yup.string().required(),
  password:yup
.string()
.trim()
.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8}$/g , 'At least 1 lower case, 1 upppercase, 1 symbol')
.required();

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
});
