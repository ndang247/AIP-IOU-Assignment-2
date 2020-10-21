import React  from "react";
import "../Style.css";
import axios from 'axios';
const qs = require('querystring');

class AddPublicRequest extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         items:[],
    //         currentItem: {
    //             text: '',
    //             key: ''
    //         }
    //     }
    //     this.handleRequest = this.handleRequest.bind(this);
    //     this.addItem = this.addItem.bind(this);
    // }

    // handleRequest(e) {
    //     this.setState({
    //         currentItem:{
    //             text: e.target.value,
    //             key: Date.now()
    //         }
    //     })
    // }

    // addItem(e) {
    //     e.preventDefault();
    //     const newItem = this.state.currentItem;
    // }

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

        // this.onChangeTaskName = this.onChangeTaskName.bind(this);
        // this.onChangeDescription = this.onChangeDescription.bind(this);
        // this.onChangeFullName = this.onChangeFullName.bind(this);
        // this.onChangeRewardQuantity = this.onChangeRewardQuantity.bind(this);
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
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    // this function is use when user submit a form
    onSubmit(e) {
        // this will prevent the default HTML form submit behaviour from taking place
        e.preventDefault();

        const publicRequest = {
            taskName: this.state.taskName,
            description: this.state.description,
            quantity: this.state.quantity,
            reward: this.state.reward
        }
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        axios.post('/api/add-requests',  qs.stringify(publicRequest), config)
        .then(res => console.log(res.data));
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
                                <input type='text' id='input-request' className='form-control1' required='true' autoFocus='true' name = 'taskName' onChange={this.handleChange}/>
                            </div>
                            <br></br>
                            <div>
                                <p>Description</p>  
                                <textarea type = 'text' id='input-request' className = 'form-control1' required='true' name='description' onChange={this.handleChange}/>
                            </div>
                            <br></br>
                            <div>
                                <p>Reward</p>
                                <select name="reward" id='input-request' className='form-control1' onChange={this.handleChange}>
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
                                <input type='text' id='input-fname' className='form-control1' required='true' name='quantity' onChange={this.handleChange}/>
                            </div>
                            <br></br>                           
                            <br></br><br/>
                            <div className='btn-signup'>
                                <button className='btn-signup'>Create a new request</button>
                            </div>                        
                        </form>
                    </div>                   
                </main>                
            </body>
        );
    };
}

export default AddPublicRequest;