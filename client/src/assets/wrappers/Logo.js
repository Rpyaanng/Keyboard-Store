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
    width: 32px;
    fill: var(--primary-500);
  }
  .text {
    font-family: var(--logo-font);
    margin: 0;
  }
`;

export default Wrapper;
