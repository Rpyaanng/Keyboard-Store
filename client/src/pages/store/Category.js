import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { SectionTitle, ProductListing } from "../../components";
import Wrapper from "../../assets/wrappers/Category";
import Axios from "axios";
import { useEffect } from "react";
import categories from "../../utils/categories";

const Category = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    setIsLoading(true);
    const response = await Axios.get(
      `/api/v1/products/category/${categories[category]}?limit=20&page=1`
    );
    const { products } = response.data;
    setProducts(products);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [category]);

  return categories[category] ? (
    <Wrapper className="side-margin ui-1">
      <SectionTitle title={category} />
      <div className="products side-margin-web">
        {products.map((product) => (
          <ProductListing
            key={product._id}
            product={product}
            isLoading={isLoading}
          ></ProductListing>
        ))}
      </div>
    </Wrapper>
  ) : (
    <Wrapper className="side-padding">
      <SectionTitle title="Looks like you're lost..." />
    </Wrapper>
  );
};
export default Category;
