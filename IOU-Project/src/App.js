import React from 'react';
// react router allows matching a specific route to a specific component for that page
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "./Style.css";

// react will render the component based on the path/route specified
function App() {
  return (
    <Router>
      <Navbar/>
      <Route path='/' component={HomePage}/>
      <Route path='/signin' component={SignIn}/>
    </Router>
  );
}

export default App;
