import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./pages/Form";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import NoMatch from "./pages/NoMatch";
// import Wrapper from "./components/Wrapper";

const App = () =>
  <Router>
    <div>
      <Navbar />
      {/* <Wrapper> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home/:email?" component={Home} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/results/:skill" component={Results} />
          <Route exact path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      {/* </Wrapper> */}
    </div>
  </Router>;

export default App;