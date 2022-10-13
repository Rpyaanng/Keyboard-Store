import styled from "styled-components";

const Wrapper = styled.main`
  margin-top: 2rem;

  .quantity {
    margin: 0;
  }

  .details {
    margin-top: 2rem;
    display: flex;
    justify-content: right;
  }

  .delete {
    color: var(--red-dark);
    background: none;
    border: none;
  }

  .table {
    border: var(--borderRadius);
    overflow: hidden;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  table {
    border-spacing: 0 var(--product-gap);
    border-collapse: separate;
  }

  th {
    color: ${(props) => props.theme.text} !important;
  }

  tr {
    border-radius: var(--borderRadius);
    overflow: hidden;
    box-shadow: var(--shadow-1);
  }

  td:first-child {
    border-top-left-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
    overflow: hidden;
  }
  td:last-child {
    border-top-right-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
    overflow: hidden;
  }

  td {
    background: ${(props) => props.theme.uiColor};
    color: ${(props) => props.theme.text} !important;
    border-bottom: none;
  }

  .coupon {
    display: flex;
    justify-content: right;
  }

  .coupon-input {
    background: ${(props) => props.theme.uiColor2};
    border-radius: 0;
    border: ${(props) => props.theme.uiColor3} 1px solid;
    padding: 0.5rem;
    transition: var(--transition);
    color: ${(props) => props.theme.text};
  }

  .total {
    color: var(--red-dark);
  }

  .proceed {
    display: flex;
    justify-content: right;
  }

  .proceed button {
    width: 8rem;
  }

  .proceed button {
    width: 8rem;
  }

  .thumbnail {
    height: 42px;
    width: 42px;
  }

  td:has(.thumbnail) {
    padding: 0;
  }

  @media (min-width: 992px) {
    .thumbnail {
      height: 94px;
      width: 94px;
    }
  }
`;

export default Wrapper;
