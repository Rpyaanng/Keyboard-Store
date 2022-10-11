import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 5rem;
  padding: 1rem 0rem 1rem 0rem;
  border-radius: var(--borderRadius);
  background: ${(props) => props.theme.uiColor};

  .carousel-root {
    display: grid;
    grid-template-columns: auto 1fr;
    overflow: hidden;
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
    margin: 2rem 3rem 2rem 3rem;
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
    }
    .thumbs.animated {
      margin: 0.5rem;
      display: flex;
      flex-direction: column;
      transform: none !important;
    }
  }
`;
export default Wrapper;
