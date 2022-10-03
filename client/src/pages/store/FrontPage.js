import { Featured, Recommended } from "../../components";
import { useEffect } from "react";
const FrontPage = () => {
  useEffect(() => {
    document.title = "FrontPage";
  }, []);
  return (
    <div className="container">
      <Featured />
      <Recommended />
    </div>
  );
};
export default FrontPage;
