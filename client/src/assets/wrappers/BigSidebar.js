import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  z-index: 2;
  box-shadow: var(--shadow-1);
  background: ${(props) => props.theme.uiColor};

  .sidebar-container {
    height: 100%;
    margin-left: 0;
    width: 70px;
    transition: var(--transition) 0.1ms;
  }

  .show-sidebar {
    width: 250px;
    font-size: 1rem;
  }

  .content {
    background: var(--ui-color);
    width: inherit;
    position: fixed;
    flex-flow: column;
    flex-direction: column;
    align-items: stretch;
    display: flex;
    height: 100vh;
  }
  .top,
  .bottom,
  .middle {
  }

  .middle {
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }

  header {
    justify-content: center;
    height: var(--nav-height);
    display: flex;
  }
  .toggle-btn {
    background: transparent;
    border: none;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }

  .nav-link {
    display: flex;
    color: var(--grey-500);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }

  .logo-text {
    font-size: 1rem;
    width: 0;
    opacity: 0;
    transition: var(--transition);
  }

  .show-sidebar .logo-text {
    width: 3rem;

    transition: var(--transition) 0.1ms;
    overflow: visible;
    opacity: 100%;
  }

  .nav-link .icon {
    width: -webkit-fill-available;
    justify-content: center;
    margin: 0;
  }

  .nav-link:hover {
    background: var(--grey-50);
    padding-left: 2.5rem;
    color: var(--grey-900);
  }
  .nav-link:hover .icon {
    color: var(--primary-500);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    transition: var(--transition);
    color: ${(props) => props.theme.text};
  }
  .theme {
  }

  .active {
    color: var(--grey-900);
  }
  .active .icon {
    color: ${(props) => props.theme.primary};
  }
  .bottom {
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    margin-bottom: 1em;
    align-items: center;
  }

  .theme {
    margin: 0;
  }
  .sidebar-btn {
  }

  @media (min-width: 992px) {
    display: block;

    margin-top: var(--header-height);
    min-height: calc(100vh - var(--header-height));
  }
`;
export default Wrapper;
