import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  justify-content: center;
  align-items: center;

  .logo {
    max-width: 100%;
    height: min-content;
    width: 42px;
    fill: ${(props) => props.theme.primary};
    transition: var(--transition);
    margin-bottom: 0.8rem;
  }
  .text {
    font-family: var(--logo-font);
    letter-spacing: 2px;
    margin: 0;
    margin-left: 0.5rem;

    .matcha {
      color: ${(props) => props.theme.primary};
    }
  }
`;

export default Wrapper;
