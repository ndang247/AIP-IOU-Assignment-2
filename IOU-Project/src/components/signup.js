import React from "react";
import "../Style.css"

export default class SignUp extends React.Component {
    render() {
        return (
            <body>
                <main>
                    <div className='signup-box'>
                        <form className='form-signup'>
                            <h1 className='signupTitle'>Sign up</h1>
                            <br></br>
                            <div>
                                <input type='text' id='input-fname' className='form-control' placeholder='Full Name' required='true' autoFocus='true'/>
                            </div>
                            <br></br>
                            <div>
                                <input type='email' id='inputEmail' className='form-control' placeholder='Email' required='true'/>
                            </div>
                            <br></br>
                            <div>
                                <input type='password' id='inputPassword' className='form-control' placeholder='Password' required='true'/>
                            </div>
                            <br></br>
                            <div>
                                <input type='password' id='confirmPassword' className='form-control' placeholder='Confirm password' required='true'/>
                            </div>
                            <br></br>
                            <div className='btn-signup'>
                                <button className='btn-signup'>Sign up</button>
                            </div>
                            
                        </form>
                    </div>
                </main>
            </body>
        );
    }
}