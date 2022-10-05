import styled from "styled-components";

const Wrapper = styled.div`
  display: none;
  border: 1px whitesmoke;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);

    .body {
      display: flex;
      flex-direction: row;
    }
    .thumbnail {
      margin-left: 0.5rem;
      margin-right: 1rem;
    }
    .product-image {
      border: 1px solid #ddd; /* Gray border */
      border-radius: 4px; /* Rounded border */
      width: 48px; /* Set a small width */
      height: 48px; /* Set a small width */
    }
    .product-name {
      margin: 0;
    }
    .quantity-input {
      background: none;
      color: var(--textColor);
      width: 3rem;
      margin-left: 1rem;
    }
    .show-sidebar {
      margin-right: 0;
    }
    header {
      padding-left: 0;
      width: 100%;
      height: 6rem;
      display: flex;
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
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: var(--transition);
    }
    .nav-link:hover {
      background: var(--grey-50);
      padding-left: 3rem;
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

    .options {
      display: flex;
      justify-content: right;
    }

    .options button {
      background: none;
      border: none;
    }

    .delete {
      color: red;
    }
  }
`;
export default Wrapper;
