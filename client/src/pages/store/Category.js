import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { SectionTitle, ProductListing } from "../../components";
import Wrapper from "../../assets/wrappers/Category";
import Axios from "axios";
import { useEffect } from "react";
import categories from "../../utils/categories";
import { Pagination } from "@mui/material";
import ProductlListingLoader from "../../components/ProductlListingLoader";

const Category = () => {
  const { category } = useParams();

  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const getProducts = async (page) => {
    setIsLoading(true);
    const response = await Axios.get(
      `/api/v1/products/category/${categories[category]}?limit=20&page=${page}`
    );
    const { products, totalPages } = response.data;
    setProducts(products);
    setIsLoading(false);
    setTotalPages(totalPages);
  };

  useEffect(() => {
    setProducts(null);
    getProducts(currentPage);
  }, [category, currentPage]);

  if (products == null) {
    return (
      <Wrapper>
        <div className="section">
          <SectionTitle title={category} />
          <div className="products">
            <ProductlListingLoader />
            <ProductlListingLoader />
            <ProductlListingLoader />
            <ProductlListingLoader />
            <ProductlListingLoader />
            <ProductlListingLoader />
            <ProductlListingLoader />
            <ProductlListingLoader />
            <ProductlListingLoader />
            <ProductlListingLoader />
          </div>
        </div>
      </Wrapper>
    );
  }

  return categories[category] ? (
    <Wrapper>
      <div className="section">
        <SectionTitle title={category} />
        <div className="products">
          {products.map((product) => (
            <ProductListing
              key={product._id}
              product={product}
              isLoading={isLoading}
            ></ProductListing>
          ))}
        </div>
      </div>

      {totalPages >= 1 && (
        <div className="pagination">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(e, page) => {
              setCurrentPage(page);
            }}
          />
        </div>
      )}
    </Wrapper>
  ) : (
    <Wrapper>
      <SectionTitle title="Looks like you're lost..." />
    </Wrapper>
  );
};
export default Category;
