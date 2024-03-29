import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }

  header {
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }
  .content {
    background: var(--white);
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--borderRadius);
    position: relative;
    display: flex;
    align-items: left;
    flex-direction: column;
  }
  .close-btn {
    top: 10px;
    right: 10px;
    background: transparent;
    border-color: transparent;
    color: var(--red-dark);
    cursor: pointer;
  }

  .links {
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.1);
    border-radius: var(--borderRadius);
    margin: 1rem 0 0 0;
    overflow-y: auto;
    height: 100%;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--grey-500);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
    border-bottom: 1px solid;
  }

  .nav-link:hover {
    color: var(--grey-900);
  }
  .nav-link:hover .icon {
    color: var(--primary-500);
  }
  .icon {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    transition: var(--transition);
    margin-left: 1rem;
  }

  .logo-text {
    font-size: 1rem;
    padding-left: 1rem;
  }
  .active {
    color: var(--grey-900);
  }
  .active .icon {
    color: var(--primary-500);
  }
`;
export default Wrapper;
