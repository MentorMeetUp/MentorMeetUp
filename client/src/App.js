import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./pages/Form";
import Home from "./pages/Home";
import Results from "./pages/Results";
// import NoMatch from "./pages/NoMatch";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  </Router>;

export default App;