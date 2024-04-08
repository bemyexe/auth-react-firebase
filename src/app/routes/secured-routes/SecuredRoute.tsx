import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const SecuredRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuth } = useAuth();

  return isAuth ? children : <Navigate to="/auth" />;
};

export default SecuredRoute;
