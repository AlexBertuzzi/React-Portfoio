import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
              <Route exact path="/" component={AboutMe} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/portfolio" component={Portfolio} />  
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
