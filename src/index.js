import React from "react";
import ReactDOM from "react-dom";
import { Home, Comic } from "./pages/index";
import { Header } from "./components/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            {" "}
            <Home></Home>
          </Route>
          <Route exact path="/:id" component={Comic}></Route>
        </Switch>
      </Router>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
