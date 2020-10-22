
import React from 'react';
// react router allows matching a specific route to a specific component for that page
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './components/homepage';
import Leaderboard from './components/leaderboard';
import SignUp from './components/signup';
import SignIn from './components/signin';
import AddPublicRequest from './components/addpublicrequest';
import AddViewFavour from './components/addandviewfavour';
import AddViewDebt from './components/addandviewdebt';
import GainReward from './components/gainreward';
import PayFavour from './components/payfavour';
import "./Style.css";
import axios from "axios"

axios.defaults.withCredentials = true;
// react will render the component based on the path/route specified
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.PrivateRoute = this.PrivateRoute.bind(this);
  }
  setLoggedIn() {
    this.setState({ isLoggedIn: true });
  }
  setLoggedOut() {
    this.setState({ isLoggedIn: false });
  }

  PrivateRoute({ component: Component, ...rest }) { return (
    <Route {...rest} render={(props) => (
      this.state.isLoggedIn === true
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/signin',
            state: { from: props.location }
          }} />
    )} />
  )} 
    
  render() {
    return (
      <Router>
        <Navbar {...this.props} isLoggedIn={this.state.isLoggedIn} setLoggedIn={() => this.setLoggedIn()} setLoggedOut={() => this.setLoggedOut()}/>
        <br />
        <Route path='/' exact component={(props) =>
        <HomePage {...props} isLoggedIn={this.state.isLoggedIn} setLoggedIn={() => this.setLoggedIn()} setLoggedOut={() => this.setLoggedOut()} />
      } />
        <Route path='/signup' component={(props) =>
          <SignUp {...props} isLoggedIn={this.state.isLoggedIn} setLoggedIn={() => this.setLoggedIn()} setLoggedOut={() => this.setLoggedOut()} />
        } />
        <Route path='/signin' component={(props) =>
          <SignIn {...props} isLoggedn={this.state.isLoggedIn} setLoggedIn={() => this.setLoggedIn()} setLoggedOut={() => this.setLoggedOut()} />
        } />
        <Route  path='/leaderboard' component={Leaderboard} />
        <this.PrivateRoute  path='/addpublicrequests' component={(props) => 
        <AddPublicRequest {...props} isLoggedIn={this.state.isLoggedIn} setLoggedIn={() => this.setLoggedIn()} setLoggedOut={() => this.setLoggedOut()}/>} />

        <this.PrivateRoute  path='/addandviewfavour' component={(props) => 
        <AddViewFavour {...props} isLoggedIn={this.state.isLoggedIn} setLoggedIn={() => this.setLoggedIn()} setLoggedOut={() => this.setLoggedOut()}/>} />

        <this.PrivateRoute  path='/addandviewdebt' component={(props) => 
        <AddViewDebt {...props} isLoggedIn={this.state.isLoggedIn} setLoggedIn={() => this.setLoggedIn()} setLoggedOut={() => this.setLoggedOut()}/>} />

        <this.PrivateRoute  path='/gainreward' component={(props) => 
        <GainReward {...props} isLoggedIn={this.state.isLoggedIn} setLoggedIn={() => this.setLoggedIn()} setLoggedOut={() => this.setLoggedOut()}/>} />


      </Router>
    );
  }
}
export default App;



