import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  overflow: hidden;
  z-index: 3;
  .subTotal {
    color: var(--primary-500);
  }

  .checkout {
    border-radius: 0 !important;
    width: 9em;
    margin: 0;
  }

  @media (min-width: 992px) {
    display: block;
    min-height: calc(100vh - var(--header-height));

    .sidebar-container {
      background: var(--white);
      margin-left: 0;
      transition: var(--transition) 0.1ms;
      width: 0px;
    }
    .show-sidebar {
      visibility: visible;
      width: 250px;
      font-size: 1rem;
    }
    .content {
      background: var(--ui-color);
      width: var(--shopping-width);
      position: fixed;
      height: 100vh;
      flex-direction: column;
      display: flex;
      box-shadow: var(--shadow-1);
    }
    .top {
      padding: 1em;
      text-align: center;
      box-shadow: var(--shadow-1);
    }
    .top div {
      text-align: center;
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
      display: flex;
      justify-content: center;
      box-shadow: var(--shadow-1);
    }
    .sidebar-btn {
    }
  }
`;
export default Wrapper;
