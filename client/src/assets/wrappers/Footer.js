import styled from "styled-components";

const Wrapper = styled.footer`
  display: none;
  position: none;
  bottom: 0px;

  .logo {
    fill: ${(props) => props.theme.text};
  }

  @media (min-width: 992px) {
    display: block;

    margin-top: 2rem;
    background: ${(props) => props.theme.primary};
    padding-top: 2rem;
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
