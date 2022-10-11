import styled from "styled-components";

const Wrapper = styled.div`
  flex: 0 0 auto;
  margin: 0.5rem;

  .card-img {
    overflow: hidden;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }
  .card-img:hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
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
