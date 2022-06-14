import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  border: 1px solid var(--grey-300);
  .main-info {
    display: block;
    padding: 1rem;
  }

  .name {
    width: auto;
    margin: 0;
  }

  img {
    padding: 1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .price {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-500);
    margin: 0;
  }

  .rating {
    font-size: 1.8rem;
    color: var(yellow);
  }

  .imgContainer {
    //center image
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-radius: var(--borderRadius);

    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      border-radius: var(--borderRadius);
      opacity: 0.5;
      transition: var(--transition);

      &:hover {
        opacity: 0;
      }
    }

    @media (min-width: 992px) {
      .products {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1rem;
      }
    }
  }
`;

export default Wrapper;
