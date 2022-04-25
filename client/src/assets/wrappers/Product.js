import styled from "styled-components";

const Wrapper = styled.div`
  flex: 0 0 auto;
  margin: 0.5rem;

  .card-img {
    overflow: hidden;
  }

  @media (min-width: 992px) {
    .product-list {
      display: flex;
      margin: 0 auto;
      span,
      img {
        margin: auto;
      }
    }
  }
`;
export default Wrapper;
