import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

    body{

        background: ${({ theme }) => theme.body};
    }
    
    .ui-1 {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }
  
`;
