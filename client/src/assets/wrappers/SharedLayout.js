import styled from "styled-components";

const Wrapper = styled.main`
  .container {
    max-width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    margin: 0;
    padding: 0;
  }

  .main-content {
    margin-top: var(--nav-height-mobile);
  }

  .dashboard-page {
  }

  @media (min-width: 992px) {
    .container {
      grid-template-columns: auto 1fr auto;
    }

    .main-content {
      margin-top: 0;
    }

    .dashboard-page {
    }
  }
`;
export default Wrapper;
