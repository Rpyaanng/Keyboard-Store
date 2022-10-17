import styled from "styled-components";

const Wrapper = styled.section`
  margin: 1rem;
  .carousel-root {
  }

  .hidden {
    display: none;
  }

  rect {
    clip-path: inherit;
  }

  .loading-div {
    min-width: 100%;
  }

  .loading-div-1 {
    background: ${(props) => props.theme.uiColor3};
    aspect-ratio: 27/9;
    padding: 1rem;
    border-radius: var(--borderRadius);

    overflow: hidden;
  }

  .loading-div-2 {
    margin-top: 1rem;
    padding: 0.5rem;
    background: ${(props) => props.theme.uiColor3};
    border-radius: var(--borderRadius);
    overflow: hidden;
    height: 100px;
  }

  .featured-img {
    border-radius: var(--borderRadius);
    overflow: hidden;
    min-width: 100%;
  }
  .thumbs-wrapper {
    display: none;
  }
  .thumb {
  }

  .thumb.selected {
    border: var(--blue-light) solid 3px !important;
  }

  .carousel-image {
  }

  .carousel.thumb {
    border: none;
  }

  .carousel-slider {
    background: ${(props) => props.theme.uiColor3};
    padding: 1rem;
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
      background: ${(props) => props.theme.uiColor3};
      height: 100%;
      border-radius: var(--borderRadius);
    }
    .carousel .thumbs-wrapper {
      display: flex;
      margin: 0;
      margin-top: 1rem;
      border-radius: var(--borderRadius);
      background: ${(props) => props.theme.uiColor3};
      /* box-shadow: var(--shadow-1); */
      padding: 0.5rem;
    }

    .thumbs.animated {
      margin: 0;
    }
  }
`;
export default Wrapper;
