import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./home";
import Impressum from "./impressum";
import Datenschutz from "./datenschutz";
import Tagesablauf from "./tagesablauf";
import About from "./about";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/tagesablauf" component={Tagesablauf} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/datenschutz" component={Datenschutz} />
      </Switch>
      <Footer />
    </Router>
  );
}
