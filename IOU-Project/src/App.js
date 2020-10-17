
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
import AddViewDebt from './components/addandviewdebt';
import "./Style.css";
import axios from "axios"
axios.defaults.withCredentials = true;
// react will render the component based on the path/route specified
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }
  setLoggedIn() {
    this.setState({ isLoggedIn: true });
  }
  setLoggedOut() {
    this.setState({ isLoggedIn: false });
  }
  render() {
    return (
      <Router>
        <Navbar isLoggedIn={this.state.isLoggedIn} />
        <br />
        <Route path='/' exact component={HomePage} />
        <Route path='/signup' component={(props) =>
          <SignUp {...props} abc={this.state.isLoggedIn} setLoggedIn={() => this.setLoggedIn()} setLoggedOut={() => this.setLoggedOut()} />
        } />
        <Route path='/signin' component={(props) =>
          <SignIn {...props} isLoggedn={this.state.isLoggedIn} setLoggedIn={() => this.setLoggedIn()} setLoggedOut={() => this.setLoggedOut()} />
        } />
        <Route path='/leaderboard' component={Leaderboard} />
        <Route path='/addpublicrequests' component={AddPublicRequest} />
        <Route path='/addandviewfavour' component={AddViewFavour} />
        <Route path='/addandviewdebt' component={AddViewDebt} />
        <Footer />
      </Router>
    );
  }
}
export default App;



