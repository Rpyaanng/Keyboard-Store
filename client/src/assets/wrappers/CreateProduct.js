import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);

  box-shadow: var(--shadow-2);
  font-family: "Roboto Condensed", sans-serif;
  .main {
  }

  .header {
    margin: 1rem 0;
    background-color: var(--grey-100);

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    span {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
  h3 {
    margin-top: 0;
  }
  .toggle-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .sun-editor {
    font-family: "Roboto Condensed", sans-serif;
  }

  .sun-editor-editable {
    font-family: "Roboto Condensed", sans-serif;
    font-size: var(--font-size-m);
  }

  .quantity-input {
    background: none;
    font-size: 24px;
    border: none;
    color: var(--textColor);
  }

  .carousel .thumbs-wrapper {
    margin: 0px;
    overflow: hidden;
  }
  .name-input {
    font-size: 36px;
    border: none;
    color: var(--textColor);
  }
  .price-input {
    color: var(--primary-500);
    font-size: 32px;
    border: none;
  }

  .form {
    box-shadow: none;
    max-width: 100%;
    margin: 0 auto;
    padding: 0;
  }

  .price {
    color: var(--primary-500);
  }

  .rating {
    font-size: 1.8rem;
    color: var(--yellow);
    fill: var(--yellow);
  }

  p {
    /* margin: 0;
    margin-top: 1rem;
    text-align: center; */
    max-width: 100%;
  }
  .btn {
    margin-top: 1rem;
  }
  .wrapper-class {
    padding: 1rem;
    border: 1px solid #ccc;
  }
  .editor-class {
    background-color: lightgray;
    padding: 1rem;
    border: 1px solid #ccc;
  }
  .toolbar-class {
    border: 1px solid #ccc;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
  .description-input {
    border: none;
    width: 100%;
    overflow-y: auto;
    height: unset;
    display: block;
    width: 100%;
    overflow: hidden;
    resize: none;
    min-height: 40px;
    line-height: 20px;
  }

  .description-input[contenteditable]:empty::before {
    content: "Description";
    color: gray;
  }

  .carousel-image-holder {
    height: 500px;
    width: 100%;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel-image {
    margin: 0 auto;
    max-height: 100%;
    max-width: 100%;
    height: 100%;
  }

  @media (min-width: 992px) {
    padding: 3rem 2rem 4rem;
    .main {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
  }
`;

export default Wrapper;
