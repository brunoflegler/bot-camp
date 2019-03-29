import React, { Fragment } from "react";

import GlobalStyle from "./styles/global";

import Home from "./pages/home";

// import { Container } from './styles';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Home />
  </Fragment>
);

export default App;
