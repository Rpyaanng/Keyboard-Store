import styled from "styled-components";

const Wrapper = styled.main`
  overflow: hidden; // Keeps the navbar from scrolling
  background: ${(props) => props.theme.uiColor2};
  color: ${(props) => props.theme.text};

  /* .btn {
    background: ${(props) => props.theme.primary};
  } */

  .btn-invert {
    background-color: ${(props) => props.theme.uiColor};
    color: ${(props) => props.theme.text};
  }

  .container {
    max-width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 auto;
    padding: 0;
  }

  .main-content {
    max-width: 100vw;
  }

  .middle-content {
    margin-top: var(--nav-height-mobile);
    min-height: calc(100vh - var(--nav-height-mobile));
    background: ${(props) => props.theme.uiColor1};
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

    .middle-content {
      margin-top: 0;
      max-width: 1460px;
      margin: 0 auto;
      min-height: calc(100vh - var(--nav-height));
    }
  }
`;
export default Wrapper;
