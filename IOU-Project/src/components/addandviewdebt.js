import React from "react";
import "../Style.css";
import axios from 'axios';
const qs = require('querystring');
const Cookie = require('js-cookie');

export default class AddViewDebt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // the property of the state that correspond to the field of the database
            offererId: '',
            description: '',
            reward: '',
            quantity: '',
            rewardData: [], // this will be shown in a dropdown all the rewards in the database
            debtData: [],
            userIdData: []
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChangeSelectReward = this.handleChangeSelectReward.bind(this);
        this.handleChangeSelectOffererId = this.handleChangeSelectOffererId.bind(this);
        this.deleteDebt = this.deleteDebt.bind(this);
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
            url: '/api/user-id',
            data: null
        }).then (res => {
            console.log(res);
            this.setState({
                userIdData: res.data
            });
        }).catch(err => {
            console.log(err);
        })
        
        axios({
            method: 'GET',
            url: '/api/get-my-debts',
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

    deleteDebt(id) {
        axios.delete('/api/delete-debts/' + id)
            .then(response => console.log(response.data));

        this.setState({
            // whenever the id in the exercises array does not equal to the id that is being deleted will be pass back to the array
            debtData: this.state.debtData.filter(debt => debt._id !== id)
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // for selecting rewards
    handleChangeSelectReward(e){
        this.setState({reward: e.target.value});
    }

    // for selecting offererId
    handleChangeSelectOffererId(e){
        this.setState({offererId: e.target.value});
    }

    // this function is use when user submit a form
    onSubmit(e) {
        const debt = {
            description: this.state.description,
            reward: this.state.reward,
            quantity: this.state.quantity,
            offererId: this.state.offererId,
            user_id: Cookie.get('user_id')
        }
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        axios.post('/api/add-my-debts',  qs.stringify(debt), config)
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
                                <tr>
                                    <td>{debtData.UserId}</td> 
                                    <td>{debtData.fullname}</td> 
                                    <td>{debtData.description}</td> 
                                    <td></td> 
                                    <td></td>
                                    <td>
                                        {
                                            debtData.UserId === Number(Cookie.get('user_id')) ?
                                                <td>
                                                    <a href='#' onClick={() => this.deleteDebt(debtData.FavourId)}>Delete</a>
                                                </td>
                                                : <td></td>
                                        }
                                    </td>
                                </tr>
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
                                <p>User's ID</p>  
                                <select value={this.state.offererId} className='form-control1' onChange={this.handleChangeSelectOffererId}>
                                    {
                                        this.state.userIdData.map((userIdData) =>
                                        <option>{userIdData.id}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <br></br>
                            <div>
                                <p>Description</p>  
                                <textarea type = 'description' value={this.state.description} id='description' name='description' className = 'form-control1' required='true' onChange={this.handleChange}/>
                            </div>
                            <br></br>
                            <div>
                                <p>Reward</p>
                                <select value={this.state.reward} className='form-control1' onChange={this.handleChangeSelectReward}>
                                    {
                                        this.state.rewardData.map((rewardData) =>
                                        <option>{rewardData.rewardName}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <br></br>
                            <div>
                                <p>Reward (Quantity)</p>
                                <input type='text' value={this.state.quantity} name='quantity' className='form-control1' required='true' onChange={this.handleChange}/>
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
