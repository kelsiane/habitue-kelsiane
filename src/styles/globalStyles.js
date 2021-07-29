import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
    :root{
            --white: #ffffff;
            --dark-orange: #FF8F6A;
            --gradient-orange:linear-gradient(90deg, rgba(255,143,106,1) 9%, rgba(254,174,108,1) 62%);
            --orange: #FEAE6C;
            --black: #333940;
            --grey: #B4B4B4;
        }
        
        
html,body{
    min-height: 100vh;
}
        
    body{
        background: var(--white);
        color: var(--black);      
        height: 100vh;
    }
    body,input, button{
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
    }
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
    ul,li,ol{
        list-style: none;
    }
    `;
export default GlobalStyles;
