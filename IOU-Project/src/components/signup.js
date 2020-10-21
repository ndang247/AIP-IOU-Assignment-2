import React from "react";
import "../Style.css";
import axios from "axios";

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname:'',
            email: '',
            password: ''
        };
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        axios.post('/auth/signup', {
            fullname: this.state.fullname,
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
        return (
            <body>
                <main>
                    <div className='signup-box'>
                        <form className='form-signup'>
                            <h1 className='signupTitle'>Sign up</h1>
                            <br></br>
                            <div>
                                <input type='text' id='input-fname' className='form-control' placeholder='Full Name' required='true' autoFocus='true' name = {'fullname'} onChange={this.handleChange}/>
                            </div>
                            <br></br>
                            <div>
                                <input type='email' id='inputEmail' className='form-control' placeholder='Email' required='true' name={'email'} onChange={this.handleChange}/>
                            </div>
                            <br></br>
                            <div>
                                <input type='password' id='inputPassword' className='form-control' placeholder='Password' required='true' name = {'password'} onChange={this.handleChange}/>
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