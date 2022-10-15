import styled from "styled-components";
const Wrapper = styled.div`
  display: block;
  width: 100%;
  box-shadow: var(--shadow-1);
  padding: 0.5em;
  text-align: center;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.uiColor};

  border: 1px solid ${(props) => props.theme.uiColor3};
  border-radius: var(--borderRadius);
  :hover {
    background: ${(props) => props.theme.uiColor3};
  }

  .options {
    margin-top: 12px;
    display: flex;
    align-content: center;
    font-size: 0.75em;
  }

  .product-name {
  }

  .delete {
    background: none;
    border: none;
    color: red;
  }

  .quantity {
    padding: 5px;
    margin: 0;
  }

  .details {
    display: flex;
    justify-content: right;
    color: ${(props) => props.theme.primary};
  }

  .price {
  }

  @media (min-width: 992px) {
    .body {
      display: grid;
      grid-template-columns: max-content 1fr;
      height: 4rem;
    }

    .content-box {
      height: 60px;
      flex-direction: column;
      -webkit-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-justify-content: flex-start;
      justify-content: flex-start;
      -webkit-align-content: space-between;
      align-content: space-between;
      text-align: left;
    }

    .thumbnail {
      margin-right: 0.25rem;
    }

    .product-name {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      padding: 0;
      height: calc(2em * var(--line-height));
    }

    .show-sidebar {
      margin-right: 0;
    }
  }
`;
export default Wrapper;
