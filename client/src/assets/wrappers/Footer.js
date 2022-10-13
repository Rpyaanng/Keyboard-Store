import styled from "styled-components";

const Wrapper = styled.footer`
  display: none;
  position: none;
  bottom: 0px;

  svg {
    height: 48px;
    width: 48px;
  }

  .logo {
    /* fill: ${(props) => props.theme.text}; */
  }

  @media (min-width: 992px) {
    display: block;

    margin-top: 2rem;
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.uiColor};
    padding-top: 2rem;
    padding-bottom: 5rem;
    .icons svg {
      font-size: 3rem;
    }
    .content {
      margin-top: 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr 2fr;
      gap: 1rem;
    }
  }
`;

export default Wrapper;
