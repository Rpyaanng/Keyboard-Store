import styled from "styled-components";

const Wrapper = styled.div`
  /* The Modal (background) */
  .modal {
    display: "block";
    position: fixed; /* Stay in place */
    z-index: 1055; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }

  /* Modal Content/Box */
  .modal-content {
    z-index: 1056;
    /* background-color: #fefefe;
    margin: 15% auto; 
    padding: 20px;
    border: 1px solid #888;
    width: 80%; // Could be more or less, depending on screen size */
  }
`;

export default Wrapper;
