import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: left;
  border-radius: var(--border-radius);

  span {
    text-transform: capitalize;
    font-size: 1.25rem;
    color: ${(props) => props.theme.primary};
    font-weight: 300;
  }

  @media (min-width: 992px) {
    justify-content: left;
    width: unset;
  }
`;

export default Wrapper;
