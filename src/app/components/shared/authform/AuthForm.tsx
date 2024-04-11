import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/redux-hooks";
import { useFormik } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../../store/slices/user-slices";
import { LoginValidationSchema } from "../dto/AuthDto";
import Input from "../input/Input";
import { TextLLight } from "../typography/Typography";
import Button from "../button/Button";
import "./AuthForm.scss";

const AuthForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        setError("");
        const auth = getAuth();
        const res = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        dispatch(
          setUser({
            email: res.user.email,
            id: res.user.uid,
            token: res.user.refreshToken,
          })
        );
        navigate("/home");
      } catch {
        setError("Неверный логин или пароль");
      } finally {
        setLoading(false);
      }
    },
    validationSchema: LoginValidationSchema,
    validateOnChange: true,
  });

  return (
    <>
      <Input
        title="Email Address"
        value={values.email}
        onChange={(e) => handleChange("email")(e)}
        placeholder="email"
      />
      {errors.email && (
        <TextLLight className="errors-text">{errors.email}</TextLLight>
      )}
      <Input
        title="Password"
        value={values.password}
        onChange={(e) => handleChange("password")(e)}
        placeholder="password"
        type="password"
      />
      {errors.password && (
        <TextLLight className="errors-text">{errors.password}</TextLLight>
      )}
      <TextLLight className="errors-text">{error}</TextLLight>
      <Button
        onClick={() => handleSubmit()}
        children={"Sign in"}
        title={"Sign in"}
        className="auth-button"
        loading={loading}
      />
    </>
  );
};

export default AuthForm;
