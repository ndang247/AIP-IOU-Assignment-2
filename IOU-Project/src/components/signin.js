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
    handleLogout = (event) => {
        axios.get('/logout');
        this.props.setLoggedOut();
    }
    handleSubmit = (event) => {
        axios.post('/auth/signin', {
            email: this.state.email,
            password: this.state.password
        })
            .then( (response) => {
                if (response.data.success === true) {
                    this.props.setLoggedIn();
                    this.props.history.push('/');
                }else{
                    alert("Wrong password or username");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        //alert(this.state.email)
        event.preventDefault();
    }
    render() {
        if(this.props.isLoggedn === true) {
            return (
                <body>
                <main>
                    <form>
                        <div>
                            <button className='btn btn-lg btn-primary btn-block' type='submit'
                                    onClick={this.handleLogout}>
                                Logout
                            </button>
                        </div>
                    </form>
                </main>
                </body>
            )
        }
        else {
            return (
                <body>
                <main>
                    <div className='signin-box'>
                        <form className='form-signin'>
                            <div>
                                <h1 className='signinTitle'>Sign in</h1>
                            </div>
                            <div>
                                <input type='email' id='inputEmail' className='form-control' placeholder='Email adress'
                                       required='true' autoFocus='true' name='email' onChange={this.handleChange}/>
                            </div>
                            <br/>
                            <div>
                                <input type='password' id='inputPassword' className='form-control'
                                       placeholder='Password' required='true' name='password'
                                       onChange={this.handleChange}/>
                            </div>
                            <br/>                            
                            <br/>
                            <button className='btn btn-lg btn-primary btn-block' type='submit'
                                    onClick={this.handleSubmit}>
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