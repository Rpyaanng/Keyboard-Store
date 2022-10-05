import { useEffect } from "react";
import { useLocation } from "react-router";
import { useAppContext } from "../context/appContext";

const CheckMainPage = (props) => {
  const { setMainPage } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    setMainPage(location.pathname === "/");
  }, [location.pathname, setMainPage]);

  return <>{props.children}</>;
};

export default CheckMainPage;
