import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    overflow-x: hidden;
    -webkit-font-smoothing: 'antialiased';
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  html {
  font-size: 16px;
}

  body, html {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  body, html, button, p, span {
    font-family: 'Red Hat Display', sans-serif;
  }

  a {
    text-decoration: none;
  }

  a, button {
    cursor: pointer;
  }

  button {
    border: none;
    background-color: transparent;
  }

  ul {
    list-style: none;
  }

  input[type="date"] { 
    font-family: 'Red Hat Display', sans-serif;

    &::-webkit-calendar-picker-indicator {
      background-image: url('data:image/svg+xml;charset=utf8,%3Csvg fill="white" fill-opacity=".54" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/%3E%3Cpath d="M0 0h24v24H0z" fill="none"/%3E%3C/svg%3E');
      cursor: pointer;
    }
  }

  .wrapper_center {
    padding-left: 1.5rem;
    padding-right: 1.5rem; 
    margin: 0 auto;
    width: 100%; 
    max-width: 64rem; 

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) { 
      max-width: 80rem; 
    }
  }

  .checkout .field {
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.white.light[400]};

  border-radius: 6px;
  padding: 0 16px;
  margin-top: 12px;
}

.checkout .field.is-onfocus {
  border-color: white;
}

.checkout .field.is-invalid {
  border-color: ${({ theme }) => theme.colors.primary.red};
}

.checkout .label .type {
  color: green;
}

.checkout.visa .label .type:before {
  content: "(visa)";
}

.checkout.mastercard .label .type:before {
  content: "(master card)";
}

.checkout.amex .label .type:before {
  content: "(american express)";
}

  .section_container {
    padding: 4rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
      padding: 2rem 2rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: 3rem 2rem;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding: 2rem 1.5rem;
      max-width: 64rem;
    }
  }
  .flex {
    display: 'flex'
  }
  
  .flex-1 {
    flex: 1;
  }

  .full {
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding: 2rem 0;
      max-width: 64rem;
    }
  }

  .section_buttons {
    display: flex;
    flex-direction: row;
    gap: 16px;
    width: 100%;
    max-width: 30rem;
    margin: 0 auto;
    padding: 80px 0 0px 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex-wrap: wrap;
      padding-top: 40px;
    }
  }


  .swiper-button-prev {
    left: 0 !important;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      left: 8px !important;
    }
  }

  .swiper-button-next {
    right: 0 !important;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      right: 8px !important;
    }
  }

  .swiper-button-next, .swiper-button-prev {
    color: ${({ theme }) => theme.colors.primary.gold} !important;
    background-color: #2E2941;
    border-radius: 50%;
    width: 34px !important;
    height: 34px !important;

    &:after {
      font-size: 16px !important
   
    }
  }

.swiper-wrapper-winners {
transition-timing-function: linear;
height: 40px;
}

.modal {  
  position: absolute;
  flex: 1;
  display: flex;
  flex-direction: column;
  top: 50%;

  height: 60%;
  left: 50%;
  padding: 42;
  border-radius: 24;
  border-color: transparent;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-color: #27075B;
  overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 0;
      display: none;
    }
}

`;

export default GlobalStyle;
