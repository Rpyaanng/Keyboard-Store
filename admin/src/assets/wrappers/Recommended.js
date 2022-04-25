import styled from "styled-components";

const Wrapper = styled.section`
  .product-list {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  @media (min-width: 992px) {
    .product-list {
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-auto-rows: minmax(100px, auto);
      grid-gap: 10px;
    }
  }
`;
export default Wrapper;
