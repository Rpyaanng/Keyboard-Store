import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  background: ${(props) => props.theme.uiColor};

  .products {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1px;
    gap: 1px;
  }
  @media (min-width: 992px) {
    .products {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      row-gap: 1rem;
      gap: 1rem;
    }
  }
`;
export default Wrapper;
