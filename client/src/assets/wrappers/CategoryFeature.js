import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  background: ${(props) => props.theme.uiColor};
  .products {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 1px;
    gap: 1px;
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }

  @media (min-width: 992px) {
    .products {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      row-gap: 1rem;
      gap: 1rem;
    }
  }
`;
export default Wrapper;
