import React from "react";
import "../Style.css";
import axios from "axios";

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            password: ''
        };
        this.validateEmail = this.validateEmail.bind(this);
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    
    handleSubmit = (event) => {
        if(this.state.fullname.length !== 0 && this.state.email.length !== 0 && this.state.password.length !== 0) {
            if (this.validateEmail(this.state.email)) {
                axios.post('/auth/signup', {
                    fullname: this.state.fullname,
                    email: this.state.email,
                    password: this.state.password
                })
                    .then((response) => {
                        if (response.data.success === true) {
                            this.props.setLoggedIn();
                            this.props.history.push('/');
                        } else {
                            alert("Email is already taken");
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                
                event.preventDefault();
            } else {
                alert("Invalid email!");
                event.preventDefault();
            }
        } else {
            alert("Please fill all the fields");
        }
        
        
    }

    validateEmail = (text) => {
        const validation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (text.match(validation)) {
            console.log(true);
            return true;
        }
        console.log(false)
        return false;
    }


    render() {
        return (
            <body>
                <main>
                    <div className='signup-box'>
                        <form className='form-signup'>
                            <h1 className='signupTitle'>Sign up</h1>
                            <br></br>
                            <div>
                                <input type='text' id='input-fname' className='form-control' placeholder='Full Name' required='true' autoFocus='true' name={'fullname'} onChange={this.handleChange} />
                            </div>
                            <br></br>
                            <div>
                                <input type='email' id='inputEmail' className='form-control' placeholder='Email' required='true' name={'email'} onChange={this.handleChange} />
                            </div>
                            <br></br>
                            <div>
                                <input type='password' id='inputPassword' className='form-control' placeholder='Password' required='true' name={'password'} onChange={this.handleChange} />
                            </div>
                            <br></br>

                            <br></br>
                            <div className='btn-signup'>
                                <button className='btn-signup' onClick={this.handleSubmit}>Sign up</button>
                            </div>
                        </form>
                    </div>
                </main>
            </body>
        );
    }
}