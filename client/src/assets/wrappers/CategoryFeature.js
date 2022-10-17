import styled from "styled-components";

const Wrapper = styled.section`
  .section {
    /* border-radius: var(--borderRadius);
    background: ${(props) => props.theme.uiColor}; */
    padding: 1rem;
  }

  .products {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: var(--product-gap-mobile);
    gap: var(--product-gap-mobile);
    padding: 1rem 1rem 1rem 1rem;
    background-color: ${(props) => props.theme.uiColor3};
    box-shadow: var(--shadow-1);
    border-radius: var(--borderRadius);
    min-height: 250px;
  }

  .more {
    width: 100%;
    object-fit: cover;
  }

  .more img {
    color: var(--white);
    filter: blur(3px) brightness(85%);
  }

  .centered {
    /* top: 50%;
    left: 50%; */
    /* transform: translate(-50%, -50%); */
    /* color: white; */
    padding: 0.5rem;
  }

  .centered p {
    margin: 0;
  }

  .more-div {
    border: ${(props) => props.theme.uiColor2} 1px solid;
    box-shadow: var(--shadow-1);
    background: ${(props) => props.theme.uiColor};
  }

  @media (min-width: 992px) {
    .products {
      grid-template-columns: repeat(5, minmax(0, 1fr));
      row-gap: var(--product-gap);
      gap: var(--product-gap);
    }
  }
`;
export default Wrapper;
