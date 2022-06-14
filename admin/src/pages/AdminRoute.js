import { useAppContext } from "../context/appContext";
import { Navigate } from "react-router-dom";
const AdminRoute = ({ children }) => {
  const { user, logoutUser } = useAppContext();
  if (user.role !== "admin") {
    logoutUser();
    return <Navigate to="/register" />;
  }
  return children;
};
export default AdminRoute;
