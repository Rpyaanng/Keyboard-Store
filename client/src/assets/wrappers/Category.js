import styled from "styled-components";

const Wrapper = styled.main`
  margin-top: 2rem;

  .section {
    border-radius: var(--borderRadius);
    /* background: ${(props) => props.theme.uiColor}; */
    padding: 1rem;
  }

  .products {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: var(--product-gap-mobile);
    gap: var(--product-gap-mobile);
    padding: 1rem;
    background-color: ${(props) => props.theme.uiColor3};
    box-shadow: var(--shadow-1);
    border-radius: var(--borderRadius);
  }

  .pagination {
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.primary};
  }

  @media (min-width: 992px) {
    .products {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      row-gap: 1rem;
      gap: 0.5rem;
    }
  }
`;

export default Wrapper;
