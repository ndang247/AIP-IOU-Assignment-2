import React from "react";
import { Link } from "react-router-dom";
import "../Style.css"

export default class SignIn extends React.Component {
    render() {
        return (
            <main>
                <div className='signin-box'>
                    <form className='form-sigin'>
                        <div>
                            <h1 className='signinTitle'>Sign in</h1>
                        </div>
                        <div>
                            <input type='email' id='inputEmail' className='form-control' placeholder='Email address' required='true' autoFocus='true'/>
                        </div>
                        <br></br>
                        <div>
                            <input type='password' id='inputPassword' className="form-control" placeholder="Password" required='true'/>
                        </div>
                        <br></br>
                        <div className='checkbox mb-3'>
                            <input type='checkbox' value='remember-me'/>
                            <label>Remember me</label>
                        </div>
                        <br></br>
                        <button className='btn btn-lg btn-primary btn-block' type='submit'>
                            Sign in
                        </button>
                        <br></br>
                        <br></br>
                        <Link to='/signup'>Are you new here? Sign up</Link>
                    </form>
                </div>
            </main>
        );
    }
}