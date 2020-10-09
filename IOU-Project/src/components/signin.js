import React from "react";
import { Link } from "react-router-dom";
import "../Style.css";
import axios from "axios";
export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        axios.post('http://localhost:8080/auth/signin',
            {
                email: this.state.email,
                password: this.state.password
            },
            {
                withCredentials: true
            }
        )
            .then(function (response) {
                console.log(response);
                this.props.setLoggedIn();

                if (response.login) {
                    this.props.history.push('/leaderboard')
                }

            })
            .catch(function (error) {
                console.log(error);
            });
        //alert(this.state.email)
        event.preventDefault();
    }
    render() {

        if (this.props.isLoggedIn) {
            return (
                <div> You've already logged in!</div>
            )
        } else {

            return (
                <body>
                    <main>
                        <div className='signin-box'>
                            <form className='form-signin'>  
                                <div>
                                    <h1 className='signinTitle'>Sign in</h1>
                                </div>             
                                <div>  
                                    <input type='email' id='inputEmail' className='form-control' placeholder='Email adress' required='true' autoFocus='true' name='email' onChange={this.handleChange}/>
                                </div>
                                <br/>
                                <div>
                                    <input type='password' id='inputPassword' className='form-control' placeholder='Password' required='true' name='password' onChange={this.handleChange}/>
                                </div>
                                <br/>
                                <div className='checkbox mb-3'>
                                    <label>
                                        <input type='checkbox' value='remember-me'/>
                                        <label> Remember me </label>
                                    </label>
                                </div>
                                <br/>
                                <button className='btn btn-lg btn-primary btn-block' type='submit' onClick={this.handleSubmit}>
                                    Sign in
                                </button>
                                <br/>
                                <br/>
                                <Link to='/signup'>Are you new here? Sign up</Link>
                            </form>
                        </div>
                    </main>
                </body>
            );
        }

    }
}