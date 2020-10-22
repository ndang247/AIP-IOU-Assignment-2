import React from "react";
import "../Style.css";
import axios from 'axios';
import Cookie from "js-cookie";
const qs = require('querystring');

export default class AddViewFavour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // the property of the state that correspond to the field of the database
            description: '',
            quantity: '',
            receiverId: '',
            reward:'',
            rewardData: [], // this will be shown in a dropdown all the rewards in the database
            debtData: [],
            userIdData: []
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChangeSelectReward = this.handleChangeSelectReward.bind(this);
        this.handleChangeSelectReceiverId = this.handleChangeSelectReceiverId.bind(this);
        this.deleteFavour = this.deleteFavour.bind(this);
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: '/api/rewards',
            data: null
        }).then (res => {
            console.log(res);
            this.setState({
                rewardData: res.data,
                reward: res.data[0].rewardName
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
                userIdData: res.data,
                receiverId: res.data[0].id
            });
        }).catch(err => {
            console.log(err);
        })

        const cookie = {
            user_id: Cookie.get('user_id')
        };
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        axios.post('/api/my-favours', qs.stringify(cookie), config)
            .then (res => {
                console.log(res);
                this.setState({
                    debtData: res.data
                });
            }).catch(err => {
            console.log(err);
        });
    }

    deleteFavour(id) {
        axios.delete('/api/delete-favours/' + id)
            .then(response => console.log(response.data)).then(() =>  {
            const cookie = {
                user_id: Cookie.get('user_id')
            };
            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };
            axios.post('/api/my-favours', qs.stringify(cookie), config)
                .then (res => {
                    console.log(res);
                    this.setState({
                        debtData: res.data
                    });
                }).catch(err => {
                console.log(err);
            });
        });


    }

    handleChange = (event) => {
        console.log(this.state.reward);
        console.log(this.state.receiverId);
        this.setState({ [event.target.name]: event.target.value });
    }

    // for selecting rewards
    handleChangeSelectReward(e){
        this.setState({reward: e.target.value});
    }

    // for selecting receiverId
    handleChangeSelectReceiverId(e){
        this.setState({receiverId: e.target.value});
    }

    // this function is use when user submit a form
    onSubmit(e) {
        e.preventDefault();
        const favour = {
            description: this.state.description,
            reward: this.state.reward,
            quantity: this.state.quantity,
            receiverId: this.state.receiverId,
            user_id: Cookie.get('user_id')
        }
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        axios.post('/api/add-my-favours',  qs.stringify(favour), config)
            .then(res => console.log(res.data)).then(() =>  {
            const cookie = {
                user_id: Cookie.get('user_id')
            };
            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };
            axios.post('/api/my-favours', qs.stringify(cookie), config)
                .then (res => {
                    console.log(res);
                    this.setState({
                        debtData: res.data
                    });
                }).catch(err => {
                console.log(err);
            });
        });

    }

    render() {
        return(
            <body>
            <div className="debt-container">
                <section className='jumbotron text-centre'>
                    <h1 className='leaderboard-title'>My Favours</h1>
                </section>
                <table className="request-table">
                    <thead>
                    <tr>
                        <th>Favour ID</th>
                        <th>Debtee</th>
                        <th>Description</th>
                        <th>Reward</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.debtData.map((debtData) =>
                            <tr>
                                <td>{debtData.id}</td>
                                <td>{debtData.fullname}</td>
                                <td>{debtData.description}</td>
                                <td>{debtData.rewardName}</td>
                                <td>{debtData.quantity}</td>
                                <td>
                                    <button onClick={() => this.deleteFavour(debtData.id)}>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
            <main>
                <div className='add-debt-box'>
                    <form onSubmit={this.onSubmit}>
                        <h1 className='addDebt'>Create a Favour</h1>
                        {/* <br></br>
                            <div>
                                <p>Title</p>
                                <input type='text' id='input-title' className='form-control1' required='true' autoFocus='true' onChange={this.handleChange}/>
                            </div> */}
                        <br></br>
                        <div>
                            <p>User's ID</p>
                            <select value={this.state.receiverId} className='form-control1' onChange={this.handleChangeSelectReceiverId}>
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
                            <button className='btn-signup'>Create a new Favour</button>
                        </div>
                    </form>
                </div>
            </main>
            </body>
        );
    };
}

