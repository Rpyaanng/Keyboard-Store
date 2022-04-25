import styled from "styled-components";

const Wrapper = styled.section`
  overflow: hidden;
  .dashboard {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 100vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr auto;
    }
    .dashboard-page {
      width: 80%;
    }
  }
`;
export default Wrapper;
