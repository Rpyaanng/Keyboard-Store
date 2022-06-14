import { useParams } from "react-router-dom";

const Category = () => {
  const { category } = useParams();
  return <h3>{category}</h3>;
};
export default Category;
