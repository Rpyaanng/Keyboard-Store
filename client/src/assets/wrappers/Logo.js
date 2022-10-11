import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  justify-content: center;
  align-items: center;

  .logo {
    max-width: 100%;
    width: 42px;
    fill: var(--primary-500);
  }
  .text {
    margin: 0;
  }
`;

export default Wrapper;
