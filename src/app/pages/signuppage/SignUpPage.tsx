import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <h1>sign up</h1>
      already have acc?
      <Link to="/auth">Sign in!</Link>{" "}
    </>
  );
};

export default SignUp;
