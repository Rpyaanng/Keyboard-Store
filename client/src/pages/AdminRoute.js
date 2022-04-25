import { useAppContext } from "../context/appContext";
import { Navigate } from "react-router-dom";
const AdminRoute = ({ children }) => {
  const { user } = useAppContext();
  if (user.role !== "admin") {
    return <Navigate to="/register" />;
  }
  return children;
};
export default AdminRoute;
