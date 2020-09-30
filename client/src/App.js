import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact/contact";
import Navbar from "./components/Navbar/index";

function App() {
  return (
    <Router>
    <div>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Contact} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
