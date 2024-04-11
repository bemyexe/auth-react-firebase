import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/shared/input/Input";
import { useState } from "react";
import Button from "../../components/shared/button/Button";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/slices/user-slices";
import {
  TextLLight,
  TextLSemibold,
} from "../../components/shared/typography/Typography";
import { useAppDispatch } from "../../hooks/redux-hooks";

import "./AuthPage.scss";
import { useFormik } from "formik";
import { LoginValidationSchema } from "../../components/shared/dto/AuthDto";

const Authpage = () => {
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
    <div className="auth-component">
      <div className="auth-content">
        <TextLSemibold className="auth-title">Authorization</TextLSemibold>
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
        <TextLLight className="auth-question">
          Don't have an account yet?
        </TextLLight>
        <Button
          styleType="transparent"
          onClick={() => {}}
          children={<Link to="/signup">Create Account</Link>}
          title="create account"
          className="auth-button"
        />
      </div>
    </div>
  );
};

export default Authpage;
