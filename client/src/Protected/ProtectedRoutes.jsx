import { useContext } from "react";
import { AuthContext } from "../Context/Auth";
import { Navigate } from "react-router-dom";
const Protected = ({ element }) => {
  const { auth } = useContext(AuthContext);

  if (!auth) {
    return <Navigate to={"/login"} />;
  }

  return element;
};

export default Protected;
