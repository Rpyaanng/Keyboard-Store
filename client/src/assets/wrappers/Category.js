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
    grid-template-columns: 1fr 1fr;
    row-gap: 1px;
    gap: 1px;
  }

  .pagination {
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.primary};
  }

  @media (min-width: 992px) {
    .products {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      row-gap: 1rem;
      gap: 0.5rem;
    }
  }
`;

export default Wrapper;
