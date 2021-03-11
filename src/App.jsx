import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Blog from './blog';
import Home from './home';
import Impressum from './impressum';
import Datenschutz from './datenschutz';
import Tagesablauf from './tagesablauf';
import About from './about';

function App() {

  return (
    <Router>

      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
        <Route path="/tagesablauf" component={Tagesablauf} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/datenschutz" component={Datenschutz} />
        
      </Switch>

      <Footer />

    </Router>   
  );
}

export default App;
