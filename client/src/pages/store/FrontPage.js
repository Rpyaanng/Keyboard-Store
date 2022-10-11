import { Featured, Recommended, CategoryFeature } from "../../components";
import { useEffect } from "react";
const FrontPage = () => {
  useEffect(() => {
    document.title = "FrontPage";
  }, []);
  return (
    <main className="">
      <Featured />
      <Recommended />
      <div className="">
        <CategoryFeature title={"keyboards"} category={"keyboards"} />
        <CategoryFeature title={"switches"} category={"switches"} />
        <CategoryFeature title={"deskmats"} category={"deskmats"} />
        <CategoryFeature title={"mice"} category={"mice"} />
      </div>
    </main>
  );
};
export default FrontPage;
