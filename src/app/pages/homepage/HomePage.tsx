import Button from "../../components/shared/button/Button";
import { useAuth } from "../../hooks/useAuth";
import { removeUser } from "../../store/slices/user-slices";
import { useAppDispatch } from "../../hooks/redux-hooks";
import "./HomePage.scss";

const Homepage = () => {
  const dispatch = useAppDispatch();
  const { email } = useAuth();

  return (
    <div className="home-component">
      <div className="home-content">
        Hello, {email}!
        <Button
          onClick={() => dispatch(removeUser())}
          children={"Log out!"}
          title={"Log out!"}
        />
      </div>
    </div>
  );
};

export default Homepage;
