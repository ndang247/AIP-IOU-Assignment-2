import React from "react";
import "../Style.css";
import axios from "axios";
const qs = require('querystring');
const Cookie = require('js-cookie');

export default class PayDebt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // the property of the state that correspond to the field of the database
            requestID: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    // componentDidMount() {
    //     axios({
    //         method: 'GET',
    //         url: '/api/rewards',
    //         data: null
    //     }).then (res => {
    //         console.log(res);
    //         this.setState({
    //             rewardData: res.data
    //         });
    //     }).catch(err => {
    //         console.log(err);
    //     })

    //     axios({
    //         method: 'GET',
    //         url: '/api/my-favours',
    //         data: null
    //     }).then (res => {
    //         console.log(res);
    //         this.setState({
    //             favourData: res.data
    //         });
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    // this function is use when user submit a form
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
        axios.post('/api/gain-reward',  qs.stringify(favour), config).then(res => {
            alert(res.data);
            console.log(res.data);   
        });
    }

    
    render() {
        return (
            <body>   
                <main>
                    <div className='addfavours-box'>
                        <form onSubmit={this.onSubmit}>
                            <h1>Pay Debts</h1>   
                            <br></br>
                            <div>
                                <p>Request ID</p>  
                                <input type = 'id' id='requestID' name='requestID' className = 'form-control1' required='true'/>
                            </div>
                            <br></br>                            
                            <br></br><br/>
                            <div className='btn-signup'>
                                <button className='btn-signup'>Gain reward</button>
                            </div>                        
                        </form>
                    </div>
                </main>             
            </body>
        );
    }
}
