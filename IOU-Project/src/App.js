import React from 'react';
// react router allows matching a specific route to a specific component for that page
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './components/homepage';
import Leaderboard from './components/leaderboard';
import SignUp from './components/signup';
import SignIn from './components/signin';
import Footer from './components/footer';
import AddRequest from './components/addrequest';
import "./Style.css";

// react will render the component based on the path/route specified
function App() {
  return (
    <Router>
        <Navbar/>
        <br/>
        <Route path='/' exact component={HomePage}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/leaderboard' component={Leaderboard}/>
        <Route path='/addrequest' component={AddRequest}/>
        <Footer/>
    </Router>
  );
}

export default App;
