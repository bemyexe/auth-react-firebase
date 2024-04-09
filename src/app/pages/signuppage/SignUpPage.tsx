import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/shared/input/Input";
import { useState } from "react";
import Button from "../../components/shared/button/Button";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/slices/user-slices";
import {
  TextLLight,
  TextLSemibold,
} from "../../components/shared/typography/Typography";
import { useAppDispatch } from "../../hooks/redux-hooks";
import "./SignUp.scss";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
    <div className="signup-component">
      <div className="signup-content">
        <TextLSemibold className="signup-title">Sign up!</TextLSemibold>
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
          className="signup-button"
          onClick={() => handleRegister(email, pass)}
          children={"Sign up"}
          title={"title2"}
        />
        <TextLLight className="signup-question ">
          Already have an account?
        </TextLLight>
        <Button
          className="signup-button"
          styleType="transparent"
          title={"Sign in!"}
          onClick={() => {}}
          children={<Link to="/auth">Sign in!</Link>}
        />
      </div>
    </div>
  );
};

export default SignUp;
