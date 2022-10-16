import styled from "styled-components";

const Wrapper = styled.section`
  margin: 1rem;
  .carousel-root {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--product-gap-mobile);
    padding: 0.5rem;
    background-color: ${(props) => props.theme.uiColor3};
    box-shadow: var(--shadow-1);
    border-radius: var(--borderRadius);
  }

  .featured-img {
    border-radius: var(--borderRadius);
    overflow: hidden;
  }
  .thumbs-wrapper {
    display: none;
  }
  .thumb {
    margin-bottom: 0.5rem;
  }

  .thumb.selected {
    border: var(--blue-light) solid 3px !important;
  }

  .animated {
    transform: none;
  }
  .carousel-image {
  }

  .carousel.thumb {
    border: none;
  }

  .carousel-slider {
  }
  @media (min-width: 992px) {
    .products {
    }
    .thumb {
      border-radius: var(--borderRadius);
      display: block;
    }
    .thumbs-wrapper {
      display: block;
      background: var(--ui-color);
      height: 100%;
      border-radius: var(--borderRadius);
    }
    .carousel .thumbs-wrapper {
      display: flex;
      margin: 0;
      margin-left: 1rem;
      border-radius: var(--borderRadius);
      background: ${(props) => props.theme.uiColor};
      /* box-shadow: var(--shadow-1); */
      padding: 0.5rem;
    }

    .thumbs.animated {
      margin: 0.5rem;
      display: flex;
      flex-direction: column;
      transform: none !important;
    }

    .thumbs-wrapper button {
      display: none;
    }
  }
`;
export default Wrapper;
