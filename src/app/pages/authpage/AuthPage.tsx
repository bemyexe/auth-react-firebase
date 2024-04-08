import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/shared/input/Input";
import { useState } from "react";
import Button from "../../components/shared/button/Button";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/slices/user-slices";
import classes from "./AuthPage.module.scss";
import {
  TextLLight,
  TextLSemibold,
} from "../../components/shared/typography/Typography";

const Authpage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = (email: any, password: any) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/home");
      })
      .catch(console.error);
  };

  return (
    <div className={classes.authContent}>
      <TextLSemibold>Auth</TextLSemibold>
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
      />
      <TextLLight>Don't have an account yet?</TextLLight>
      <Button
        styleType="transparent"
        onClick={() => {}}
        children={<Link to="/signup">Create Account</Link>}
        title="create account"
      />
    </div>
  );
};

export default Authpage;
