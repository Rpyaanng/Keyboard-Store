import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { SectionTitle, ProductListing } from "../../components";
import Wrapper from "../../assets/wrappers/Category";
import Axios from "axios";
import { useEffect } from "react";
import { Pagination } from "@mui/material";

const Search = () => {
  const { query } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const getProducts = async (page) => {
    setIsLoading(true);
    const response = await Axios.get(
      `/api/v1/products/search/${query}?limit=20&page=${page}`
    );
    const { products, totalPages } = response.data;
    setProducts(products);
    setIsLoading(false);
    setTotalPages(totalPages);
  };

  useEffect(() => {
    getProducts(currentPage);
  }, [query, currentPage]);

  return (
    <Wrapper>
      <div className="section">
        <SectionTitle title={`Search results for \"${query}\".`} />
        <div className="products">
          {products.map((product) => (
            <ProductListing
              key={product._id}
              product={product}
              isLoading={isLoading}
            ></ProductListing>
          ))}
          {products.length === 0 && <p>No items were found.</p>}
        </div>
      </div>

      {totalPages > 1 && (
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
  );
};
export default Search;
