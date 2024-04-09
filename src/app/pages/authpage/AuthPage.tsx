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

const Authpage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/home");
      })
      .catch(console.error);
  };

  return (
    <div className="auth-component">
      <div className="auth-content">
        <TextLSemibold className="auth-title">Authorization</TextLSemibold>
        <Input
          title="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <Input
          title="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
          type="password"
        />
        <Button
          onClick={() => handleLogin(email, pass)}
          children={"Sign in"}
          title={"Sign in"}
          className="auth-button"
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
