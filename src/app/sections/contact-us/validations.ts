import * as yup from "yup";

export const validations = yup.object().shape({
  name: yup
    .string()
    .min(2, "El nombre es obligatorio")
    .required("El nombre es obligatorio"),
  surname: yup
    .string()
    .min(2, "El apellido es obligatorio")
    .required("El apellido es obligatorio"),
  email: yup
    .string()
    .email("Introduce un correo electrónico válido")
    .required("Introduce un correo electrónico válido"),
  message: yup
    .string()
    .min(10, "El mensaje es obligatorio")
    .required("El mensaje es obligatorio"),
  subject: yup
    .string()
    .min(3, "El asunto es obligatorio")
    .required("El asunto es obligatorio"),
});
