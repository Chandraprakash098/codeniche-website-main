import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }
  
  img {
    max-width: 100%;
    display: block;
  }
  
  ul, ol {
    list-style: none;
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.light};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
  
  /* Selection color */
  ::selection {
    background: ${({ theme }) => theme.colors.primary}40;
  }
`