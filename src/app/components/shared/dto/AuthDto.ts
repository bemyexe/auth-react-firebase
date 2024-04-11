import * as Yup from "yup";

export const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Обязательное поле")
    .email("Введите верный email"),
  password: Yup.string()
    .required("Обязательное поле")
    .min(6, "Пароль должен содержать минимум 6 символов"),
});
