import { Link } from "react-router-dom";
import Button from "../../components/shared/button/Button";

import {
  TextLLight,
  TextLSemibold,
} from "../../components/shared/typography/Typography";

import "./AuthPage.scss";

import AuthForm from "../../components/shared/authform/AuthForm";

const Authpage = () => {
  return (
    <div className="auth-component">
      <div className="auth-content">
        <TextLSemibold className="auth-title">Authorization</TextLSemibold>
        <AuthForm />
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
