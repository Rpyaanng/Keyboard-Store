import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: left;

  .title-div {
    background: ${(props) => props.theme.primary};
    border-radius: var(--borderRadius) var(--borderRadius) 0 0;
    padding: 0.45rem;
    /* box-shadow: var(--shadow-4); */
  }
  span {
    text-transform: capitalize;
    font-size: 1.25rem;
    color: var(--black);
    font-weight: bold;
    letter-spacing: 0.24rem;
  }

  @media (min-width: 992px) {
    justify-content: left;
  }
`;

export default Wrapper;
