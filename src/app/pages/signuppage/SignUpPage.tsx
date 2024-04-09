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
    <>
      <TextLSemibold>Sign up!</TextLSemibold>
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
      />
      <Button
        onClick={() => handleRegister(email, pass)}
        children={"Sign up"}
        title={"title2"}
      />
      <TextLLight>Already have an account?</TextLLight>
      <Button
        styleType="transparent"
        title={"Sign in!"}
        onClick={() => {}}
        children={<Link to="/auth">Sign in!</Link>}
      />
    </>
  );
};

export default SignUp;
