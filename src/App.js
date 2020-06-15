import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cover from "./pages/Cover/index";
import About from "./pages/About";
import Design from "./pages/Design";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/mattdambra-react" component={Cover} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Design" component={Design} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
