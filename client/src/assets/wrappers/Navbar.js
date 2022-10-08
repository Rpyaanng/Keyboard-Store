import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  height: var(--nav-height-mobile);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100vw;
  box-shadow: var(--shadow-bottom);
  background: var(--ui-color);
  .logo {
    display: flex;
    align-items: center;
    width: 250px;
  }
  .nav-center {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;
  }

  .btn-container {
    display: none;
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
    color: var(--primary-500);
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
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--white);
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

  .back-arrow {
    background: none;
    border: none;
  }

  .main-input {
    margin: 0 5vw;
    width: 100%;
  }

  @media (min-width: 992px) {
    position: sticky;
    width: unset;
    top: 0;
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
      height: 3rem;
    }
    .right {
      display: flex;
    }
    .shopping-cart-notif {
      font-size: 1rem;
    }
  }
`;
export default Wrapper;
