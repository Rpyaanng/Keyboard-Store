import styled from "styled-components";

const Wrapper = styled.section`
  .section {
    border-radius: var(--borderRadius);
    /* background: ${(props) => props.theme.uiColor}; */
    padding: 1rem;
  }
  .products {
    display: grid;
    grid-template-columns: auto;
    row-gap: var(--product-gap-mobile);
    gap: var(--product-gap-mobile);
  }
  @media (min-width: 992px) {
    .products {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      row-gap: var(--product-gap);
      gap: var(--product-gap);
    }
  }
`;
export default Wrapper;
