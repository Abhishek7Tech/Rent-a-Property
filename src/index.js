import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";


  const breakpoints = {
    
    sm: '0em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  }


const theme = extendTheme({ breakpoints });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Container maxW={"100%"} padding={0}>
        <App />
      </Container>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
