import { useDispatch } from "react-redux";
import Button from "../../components/shared/button/Button";
import { useAuth } from "../../hooks/useAuth";
import { removeUser } from "../../store/slices/user-slices";

const Homepage = () => {
  const dispatch = useDispatch();
  const { email } = useAuth();

  return (
    <>
      Hello, {email}!
      <Button
        onClick={() => dispatch(removeUser())}
        children={"Log out!"}
        title={"Log out!"}
      />
    </>
  );
};

export default Homepage;
