import Product from "./Product";
import Wrapper from "../assets/wrappers/Recommended";

const Recommended = () => {
  return (
    <Wrapper>
      <h1>Recommended</h1>
      <div className="product-list container">
        <Product name="1" />
        <Product name="2" />
        <Product name="3" />
        <Product name="4" />
        <Product name="5" />
        <Product name="6" />
      </div>
    </Wrapper>
  );
};
export default Recommended;
