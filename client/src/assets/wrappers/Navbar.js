import styled from "styled-components";

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  background: var(--ui-color);
  .logo {
    display: flex;
    align-items: center;
    width: 250px;
    display: none;
  }
  .nav-center {
    display: flex;

    align-items: center;
    justify-content: space-between;
  }

  .left,
  .middle .right {
    display: flex;
  }

  .middle {
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

  .btn-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
  .main-input {
    width: 15rem;
  }

  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 100%;
    }
    .sidebar-btn {
      display: none;
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
      width: 50rem;
      height: 3rem;
    }
    .right {
      display: flex;
    }
  }
`;
export default Wrapper;
