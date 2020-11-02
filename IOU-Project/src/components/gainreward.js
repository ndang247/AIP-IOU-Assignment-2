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
            requestID: '',
            requestData: []
        }
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    componentDidMount() {
        axios({
            method: 'GET',
            url: '/api/requests-id',
            data: null
        }).then(res => {
            console.log(res);
            this.setState({
                requestData: res.data,
                requestID: res.data[0].id
            });
        }).catch(err => {
            console.log(err);
        })
    };

    handleChangeSelect(e) {
        this.setState({ requestId: e.target.value });
    }
    // // this function is use when user submit a form
    onSubmit(e) {
        // this will prevent the default HTML form submit behaviour from taking place
        e.preventDefault();
        
        const favour = {
            requestId: this.state.requestID,
            user_id: Cookie.get('user_id')
        };
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        axios.post('/api/gain-reward', qs.stringify(favour), config).then(() => {
            axios.delete('/api/delete-requests/'+Number(this.state.requestID), null, config).catch(err => console.log(err));
        }).then(() => {
            this.props.history.push('/');
        });

    };

    render() {
        return (
            <body>
                <main>
                    <div className='addfavours-box'>
                        <form>
                            <h1>Gain Reward</h1>
                            <br></br>
                            {/*<div>*/}
                            {/*    <p>Request ID</p>*/}
                            {/*    <input type='id' id='requestID' name='requestID' className='form-control1' required='true' onChange={this.handleChange} />*/}
                            {/*</div>*/}
                            <div>
                                <p>Request ID</p>
                                <select value={this.state.requestID} id='input-request' className='form-control1' onChange={this.handleChangeSelect}>
                                    {
                                        this.state.requestData.map((requestData) =>
                                            <option>{requestData.id}</option>
                                        )
                                    }
                                </select>
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
    };
}
