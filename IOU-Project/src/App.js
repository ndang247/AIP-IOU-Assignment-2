import React from 'react';
// react router allows matching a specific route to a specific component for that page
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './components/homepage';
import Leaderboard from './components/leaderboard';
import SignUp from './components/signup';
import SignIn from './components/signin';
import Footer from './components/footer';
import AddPublicRequest from './components/addpublicrequest';
import AddViewFavour from './components/addandviewfavour';
import "./Style.css";

axios.defaults.withCredentials = true

// react will render the component based on the path/route specified
class App {

  constructor(props) {
    this.state = {isLoggedIn: false};
  }

  setLoggedIn() {
    this.setState({isLoggedIn: true});
  }

  render() {
    return (
        <Router>
          <Navbar/>
          <br/>
          <Route path='/' exact component={HomePage}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/signin' component={() => 
            <SignIn isLoggedIn={this.state.isLoggedIn} setLoggedIn={() => this.setLoggedIn()}/>
          }/>
          <Route path='/leaderboard' component={Leaderboard}/>
          <Route path='/addpublicrequests' component={AddPublicRequest}/>
          <Route path='/addandviewfavour' component={AddViewFavour}/>
          <Footer/>
      </Router>
    );
  }
}

export default App;
