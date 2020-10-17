import React from "react";
import "../Style.css";
import axios from 'axios';
const qs = require('querystring');

export default class AddViewDebt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // the property of the state that correspond to the field of the database
            description: '',
            quantity: '',
            rewardData: [], // this will be shown in a dropdown all the rewards in the database
            debtData: []
        }

        this.onSubmit = this.onSubmit.bind(this);
    }
    
    componentDidMount() {
        axios({
            method: 'GET',
            url: '/api/rewards',
            data: null
        }).then (res => {
            console.log(res);
            this.setState({
                rewardData: res.data
            });
        }).catch(err => {
            console.log(err);
        })
        
        axios({
            method: 'GET',
            url: 'http://localhost:8080/api/get-my-debts',
            data: null
        }).then (res => {
            console.log(res);
            this.setState({
                debtData: res.data
            });
        }).catch(err => {
            console.log(err);
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // this function is use when user submit a form
    onSubmit(e) {
        const debt = {
            description: this.state.description,
            quantity: this.state.quantity
        }
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        axios.post('http://localhost:8080/api/add-my-debts',  qs.stringify(debt), config)
        .then(res => console.log(res.data));
    }

    render() {
        return(
            <body>
                <div className="debt-container">
                    <section className='jumbotron text-centre'>
                        <h1 className='leaderboard-title'>My Debts</h1>
                    </section>
                    <table className="request-table">
                        <thead>
                            <tr>
                                <th>Debt ID</th>
                                <th>Debtor</th>
                                <th>Description</th>
                                <th>Reward</th>
                                <th>Reward (Quantity)</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.debtData.map((debtData) =>
                                <tr><td>{debtData.UserId}</td> <td>{debtData.fullname}</td> <td>{debtData.description}</td> </tr>
                            )}
                        </tbody>
                        
                    </table>   
                </div>          
                <main>
                    <div className='add-debt-box'>
                        <form onSubmit={this.onSubmit}>
                            <h1 className='addDebt'>Create a Debt</h1>
                            {/* <br></br>
                            <div>
                                <p>Title</p>
                                <input type='text' id='input-title' className='form-control1' required='true' autoFocus='true' onChange={this.handleChange}/>
                            </div> */}
                            <br></br>
                            <div>
                                <p>Description</p>  
                                <textarea type = 'description' id='description' name='description' className = 'form-control1' required='true' onChange={this.handleChange}/>
                            </div>
                            <br></br>
                            <div>
                                <p>Reward</p>
                                <select name="rewardItems" className='form-control1'>
                                    {
                                        this.state.rewardData.map((rewardData) =>
                                        <option value="rewards">{rewardData.rewardName}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <br></br>
                            <div>
                                <p>Reward (Quantity)</p>
                                <input type='text' id='input-fname' name='quantity' className='form-control1' required='true' onChange={this.handleChange}/>
                            </div>
                            <br></br>
                           
                            <div className='btn-signup'>
                                <button className='btn-signup'>Create a new debt</button>
                            </div>                        
                        </form>
                    </div>
                </main>
            </body>
        );
    };
}
