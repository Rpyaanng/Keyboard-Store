import styled from "styled-components";

const Wrapper = styled.div`
  .rating {
    display: none;
  }

  .name {
    display: -webkit-box;
    max-width: 400px;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .price {
    color: var(--red-dark);
    margin: 0;
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
  }

  @media (min-width: 992px) {
    .name {
      display: -webkit-box;
      max-width: 400px;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .rating {
      display: flex;
      align-items: center;
      font-size: 1rem;
      color: var(yellow);
    }
  }
`;

export default Wrapper;
