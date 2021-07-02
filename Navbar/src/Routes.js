import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import FeedBack from "./components/Feedback"

function Routes() {
  return (
    <Router>
      <div className="route">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/services" exact>
            <Services />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/feedback" exact>
            <FeedBack />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
