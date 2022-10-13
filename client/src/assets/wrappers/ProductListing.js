import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: var(--borderRadius);
  border: ${(props) => props.theme.uiColor2} 1px solid;
  box-shadow: var(--shadow-1);
  background: ${(props) => props.theme.uiColor};

  */ .rating {
    display: none;
  }

  .main-info {
    padding: 0.5rem;
  }

  .main-details {
    min-height: 3rem;
  }

  .name {
    display: -webkit-box;
    max-width: 400px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .rating {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
