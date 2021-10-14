import React from "react";
import ReactDOM from "react-dom";
import { Home } from "./pages/index";
import { Header } from "./components/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/">
            {" "}
            <Home></Home>
          </Route>
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
