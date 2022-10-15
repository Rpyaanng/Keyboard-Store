import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  height: var(--nav-height-mobile);
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100vw;
  box-shadow: var(--shadow-bottom);
  background: ${(props) => props.theme.uiColor};

  .nav-center {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;
  }

  .btn-container {
  }

  .left,
  .middle {
    display: flex;
    transition: var(--transition);
  }

  .right {
    display: none;
  }

  .left-1 {
    display: none;
  }

  .left-2 {
    transition: var(--transition);
    width: 0;
  }

  .left-2.not-main {
    transition: var(--transition);
    width: 2.5rem;
  }

  .left-2 button {
    padding: 1rem;
  }

  .middle {
    flex-grow: 1;
    transition: var(--transition);
  }
  .sidebar-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: ${(props) => props.theme.text};
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
    margin: 0;
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.uiColor};
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }

  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    width: 100%;
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    //letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  .logo-text {
    display: none;
    margin: 0;
  }

  .logo {
    cursor: pointer;
  }

  .back-arrow {
    background: none;
    border: none;
    color: ${(props) => props.theme.text};
  }

  .main-input {
    width: 100%;
    max-width: 45rem;
    background: ${(props) => props.theme.uiColor2};
    border-bottom-left-radius: var(--borderRadius);
    border-top-left-radius: var(--borderRadius);
    border: ${(props) => props.theme.uiColor3} 1px solid;

    padding: 0.5rem;
    transition: var(--transition);
    color: ${(props) => props.theme.text};
  }

  .search-div {
    margin-left: 1rem;
    margin-right: 1rem;
    width: 100%;
    max-width: 45rem;
    width: 100%;
  }

  .main-input:focus {
    /* margin-right: 1px; */

    /* border-radius: ; */
    outline: var(--blue-light) 1px solid;
    z-index: 1;
  }

  .search {
    display: none;
    border-radius: 0;
    border-bottom-right-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
    border: 0;
    width: 4rem;
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.uiColor3};
  }

  .navbar-button {
    background: none;
    border: none;
    color: ${(props) => props.theme.text};
    box-shadow: none;
    height: 100%;
  }

  .navbar-button:hover {
    background: none;
    border: 1px solid;
    color: ${(props) => props.theme.text};
  }

  .navbar-button:focus {
    background: none;
    border: 1px solid;
    color: ${(props) => props.theme.text};
  }

  .thumbnail-placeholder {
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.text};
  }

  .search-placeholder {
    display: grid;
    grid-template-columns: max-content 1fr;
    height: 4rem;
    width: 100%;

    padding: 0.5em;
    text-align: left;
    box-shadow: var(--shadow-1);

    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.uiColor};

    border: 1px solid ${(props) => props.theme.uiColor3};
    border-radius: var(--borderRadius);
  }

  .search-placeholder:hover {
    background: ${(props) => props.theme.uiColor3};
  }

  .name-placeholder {
    margin-left: 0.25rem;
    color: ${(props) => props.theme.text};
  }

  .details-placeholder {
    text-align: right;
    color: ${(props) => props.theme.primary};
  }

  @media (min-width: 992px) {
    width: unset;
    position: sticky;
    height: var(--nav-height);

    .left-1 {
      display: flex;
    }
    .left-2 {
      display: none;
    }

    .nav-center {
      width: 100%;
    }
    .sidebar-btn {
      display: none;
    }
    .btn-container {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .nav-center {
      padding: 1rem;
    }
    .logo {
      display: block;
    }
    .logo-text {
      display: block;
    }
    .main-input {
    }
    .search-div {
      margin-left: 5rem;
      margin-right: 0;
    }
    .right {
      display: flex;
    }
    .shopping-cart-notif {
      font-size: 0.75rem;
      font-weight: bold;
      height: 16px;
      width: 16px;
      padding: 0.1rem;
      color: var(--white);
      background: var(--red-dark);
      border-radius: 50%;
      text-align: center;
      position: relative;
      left: -1rem;
      top: 0.25rem;
    }
    .shopping-cart-notif:hover {
      -webkit-animation-name: twitch;
      -webkit-animation-duration: 0.25s;
      -webkit-animation-iteration-count: 1;
      -webkit-animation-timing-function: ease-in-out;
      -webkit-animation-fill-mode: forwards;
    }
    .search {
      display: block;
      margin-right: 5rem;
    }
  }
`;
export default Wrapper;
