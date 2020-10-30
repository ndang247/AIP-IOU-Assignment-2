import React from "react";
import "../Style.css";
import axios from 'axios';
import Cookies from 'js-cookie';
const qs = require('querystring');
class AddPublicRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // the property of the state that correspond to the field of the database
            taskName: '',
            description: '',
            reward: '',
            rewardData: [], // this will be shown in a dropdown all the rewards in the database
            quantity: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: '/api/rewards',
            data: null
        }).then(res => {
            console.log(res);
            this.setState({
                rewardData: res.data,
                reward: res.data[0].rewardName
            });
        }).catch(err => {
            console.log(err);
        })
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    // this function is use when user submit a form
    onSubmit(e) {
        // this will prevent the default HTML form submit behaviour from taking place
        e.preventDefault();
        if(this.state.taskName.length !== 0 && this.state.description.length !== 0  && Number(this.state.quantity) > 0) {
            const publicRequest = {
                taskName: this.state.taskName,
                description: this.state.description,
                quantity: this.state.quantity,
                reward: this.state.reward,
                user_id: Cookies.get('user_id')
            }
            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
            axios.post('/api/add-my-request', qs.stringify(publicRequest), config).then(res => {
                //alert(res.data);
                console.log(res.data);
                this.setState = (
                    {
                        taskName: '',
                        description: '',
                        reward: '',
                        quantity: ''
                    }
                );
                this.props.history.push('/');
            }
            );
        } else if (Number(this.state.quantity) <= 0 || isNaN(this.state.quantity)) {
            alert("The reward quantity should be a number and larger than 0.");
        } else {
            alert("Please fill all the fields");
        }
        
    }
    handleChangeSelect(e) {
        this.setState({ reward: e.target.value });
    }
    render() {
        return (
            <body>
                <main>
                    <div className='addreq-box'>
                        <form onSubmit={this.onSubmit}>
                            <h1>Create a Public Request</h1>
                            <br></br>
                            <div>
                                <p>Task Name</p>
                                <input type='text' value={this.state.taskName} id='input-request' className='form-control1' required='true' autoFocus='true' name='taskName' onChange={this.handleChange} />
                            </div>
                            <br></br>
                            <div>
                                <p>Description</p>
                                <textarea type='text' value={this.state.description} id='input-request' className='form-control1' required='true' name='description' onChange={this.handleChange} />
                            </div>
                            <br></br>
                            <div>
                                <p>Reward</p>
                                <select value={this.state.reward} id='input-request' className='form-control1' onChange={this.handleChangeSelect}>
                                    {
                                        this.state.rewardData.map((rewardData) =>
                                            <option>{rewardData.rewardName}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <br></br>
                            <div>
                                <p>Quantity</p>
                                <input type='text' value={this.state.quantity} id='input-fname' className='form-control1' required='true' name='quantity' onChange={this.handleChange} />
                            </div>
                            <br></br>
                            <br></br><br />
                            <div className='btn-signup'>
                                <button type='reset' className='btn-signup' onClick={this.onSubmit}>Create a new request</button>
                            </div>
                        </form>
                    </div>
                </main>
            </body>
        );
    };
}
export default AddPublicRequest;