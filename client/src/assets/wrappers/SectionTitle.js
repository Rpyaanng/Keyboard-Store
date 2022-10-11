import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;

  justify-content: center;
  border-radius: var(--border-radius);
  margin-bottom: 1rem;

  span {
    text-transform: capitalize;
    margin: 0.5rem;
    font-size: 2.5rem;
    color: var(--primary-500);
    font-weight: bold;
  }

  @media (min-width: 992px) {
    justify-content: left;
    width: unset;
  }
`;

export default Wrapper;
