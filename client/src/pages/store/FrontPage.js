import { Featured, Recommended } from "../../components";
import { useEffect } from "react";
const FrontPage = () => {
  useEffect(() => {
    document.title = "FrontPage";
  }, []);
  return (
    <div>
      <Featured />
      <Recommended />
    </div>
  );
};
export default FrontPage;
