import React from "react";
import "../Style.css"

export default class SignUp extends React.Component {
    render() {
        return (
            <main>
                <div className='signup-box'>
                    <form className='form-signup'>
                        <h1 className='signupTitle'>Sign up</h1>
                        <br></br>
                        <div className='field-firstname'>
                            <input type='text' id='input-fname' className='form-control' placeholder='First Name' required='true' autoFocus='true'/>
                        </div>
                        <br></br>
                        <div className='field-lastname'>
                            <input type='text' id='input-lname' className='form-control' placeholder='Last Name' required='true'/>
                        </div>
                        <br></br>
                        <div className='field-email'>
                            <input type='email' id='inputEmail' className='form-control' placeholder='Email' required='true'/>
                        </div>
                        <br></br>
                        <div className='field-password'>
                            <input type='password' id='inputPassword' className='form-control' placeholder='Password' required='true'/>
                        </div>
                        <br></br>
                        <div className='btn-signup'>
                            <button className='btn-signup'>Sign up</button>
                        </div>
                    </form>
                </div>
            </main>
        );
    }
}