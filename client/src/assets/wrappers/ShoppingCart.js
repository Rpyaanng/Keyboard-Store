import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;

  @media (min-width: 992px) {
    display: block;
    height: 100vh;
    margin-top: var(--header-height);
    min-height: calc(100vh - var(--header-height));
    font-size: 0rem;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--white);
      margin-left: 0;
      transition: var(--transition) 0.1ms;
      width: 0px;
    }
    .show-sidebar {
      width: 250px;
      font-size: 1rem;
    }
    .content {
      background: var(--ui-color);
      width: inherit;
      position: fixed;
      height: 100vh;
      flex-direction: column;
      display: flex;
    }
    .top {
    }
    .middle {
      flex-grow: 1;
      overflow-y: auto;
      overflow-x: hidden;
    }

    header {
      height: var(--nav-height);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1rem;
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
      padding-left: 2rem;
      text-transform: capitalize;
      transition: var(--transition);
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
      display: grid;
      place-items: center;
      transition: var(--transition);
    }
    .active {
      color: var(--grey-900);
    }
    .active .icon {
      color: var(--primary-500);
    }
    .bottom {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .sidebar-btn {
    }
  }
`;
export default Wrapper;
