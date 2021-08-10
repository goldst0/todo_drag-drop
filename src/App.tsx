import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Todo from "./components/todo";
import Header from "./components/header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Route exact path="/" component={Todo} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
