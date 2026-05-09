import * as yup from "yup";

export function makeContactValidationSchema(trans: {
  name: string;
  surname: string;
  emailInvalid: string;
  emailRequired: string;
  message: string;
  subject: string;
}) {
  return yup.object().shape({
    name: yup.string().min(2, trans.name).required(trans.name),
    surname: yup.string().min(2, trans.surname).required(trans.surname),
    email: yup
      .string()
      .email(trans.emailInvalid)
      .required(trans.emailRequired),
    message: yup.string().min(10, trans.message).required(trans.message),
    subject: yup.string().min(3, trans.subject).required(trans.subject),
  });
}
