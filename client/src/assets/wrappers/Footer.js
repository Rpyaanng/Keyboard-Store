import styled from "styled-components";

const Wrapper = styled.footer`
  display: none;
  @media (min-width: 992px) {
    display: block;
    color: white;
    margin-top: 2rem;
    background-color: var(--primary-500);
    padding-top: 5rem;
    padding-bottom: 5rem;
    .icons svg {
      font-size: 3rem;
    }
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr 2fr;
      gap: 1rem;
    }
  }
`;

export default Wrapper;
