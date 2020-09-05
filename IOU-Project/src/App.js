import React from 'react';
// react router allows matching a specific route to a specific component for that page
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './components/homepage';
import SignIn from './components/signin';
import SignUp from './components/signup';
import Footer from './components/footer';
import "./Style.css";

// react will render the component based on the path/route specified
function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar/>
        <br/>
        <Route path='/' exact component={HomePage}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/' component={Footer}/>
      </div>
    </Router>
  );
}

export default App;
