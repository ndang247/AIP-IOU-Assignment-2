import React from "react";
import { Link } from "react-router-dom";
import "../Style.css"

export default class SignIn extends React.Component {
    render() {
        return (
            <body>
                <main>
                    <div className='signin-box'>
                        <form className='form-signin'>  
                            <div>
                                <h1 className='signinTitle'>Sign in</h1>
                            </div>             
                            <div>  
                                <input type='email' id='inputEmail' className='form-control' placeholder='Email adress' required='true' autoFocus='true'/>
                            </div>
                            <br/>
                            <div>
                                <input type='password' id='inputPassword' className='form-control' placeholder='Password' required='true'/>
                            </div>
                            <br/>
                            <div className='checkbox mb-3'>
                                <label>
                                    <input type='checkbox' value='remember-me'/>
                                    <label> Remember me </label>
                                </label>
                            </div>
                            <br/>
                            <button className='btn btn-lg btn-primary btn-block' type='submit'>
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