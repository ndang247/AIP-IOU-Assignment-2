import React from "react";
import "../Style.css";
import axios from "axios";
const qs = require('querystring');
const Cookie = require('js-cookie');
export default class GainReward extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // the property of the state that correspond to the field of the database
            requestID: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }



    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    // // this function is use when user submit a form
    onSubmit(e) {
        // this will prevent the default HTML form submit behaviour from taking place
        e.preventDefault();

        const favour = {
            requestId: this.state.requestID,
            user_id: Cookie.get('user_id')
        }
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        axios.post('/api/gain-reward', qs.stringify(favour), config)
            .then(() => {
                axios.delete('/api/delete-requests/' + 82, null, config).catch(err => console.log(err));
            });
    }

    render() {
        return (
            <body>
                <main>
                    <div className='addfavours-box'>
                        <form>
                            <h1>Gain Reward</h1>
                            <br></br>
                            <div>
                                <p>Request ID</p>
                                <input type='id' id='requestID' name='requestID' className='form-control1' required='true' onChange={this.handleChange} />
                            </div>

                            <br></br>
                            <div className='btn-signup'>
                                <button className='btn-signup' type='submit' onClick={this.onSubmit}>Gain reward</button>
                            </div>
                        </form>
                    </div>
                </main>
            </body>
        );
    }
}
