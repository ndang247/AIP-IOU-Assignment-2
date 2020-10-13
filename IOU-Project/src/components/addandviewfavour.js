import React from "react";
import "../Style.css";
import axios from 'axios';
const qs = require('querystring');


export default class AddViewFavour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // the property of the state that correspond to the field of the database
            title: '',
            description: '',
            quantity: '',
            rewardData: [], // this will be shown in a dropdown all the rewards in the database
            favourData: []
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:8080/api/rewards',
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
            url: 'http://localhost:8080/api/get-my-favours',
            data: null
        }).then (res => {
            console.log(res);
            this.setState({
                favourData: res.data
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

        const favour = {
            description: this.state.description,
            quantity: this.state.quantity
        }
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        axios.post('http://localhost:8080/api/add-my-favours',  qs.stringify(favour), config)
        .then(res => console.log(res.data));
    }

    render() {
        return (
            <body>
                <div className="favour-container container">
                    <section className='jumbotron text-centre'>
                        <h1 className='leaderboard-title'>My Favours</h1>
                    </section>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <table className="request-table">
                        <thead>
                            <tr>
                                <th>Favour ID</th>
                                <th>Favour's Title</th>
                                <th>Owner's Name</th>
                                <th>Description</th>
                                <th>Reward</th>
                                <th>Reward (Quantity)</th>
                                <th>Proof</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                        
                    </table>   
                </div>          
                <main>
                    <div className='addfavours-box'>
                        <form onSubmit={this.onSubmit}>
                            <h1>Create a Favour</h1>   
                            <br></br>
                            <div>
                                <p>Title</p>
                                <input type='text' id='input-title' className='form-control1' required='true' autoFocus='true'/>
                            </div>
                            <br></br>
                            <div>
                                <p>Description</p>  
                                <textarea type = 'description' id='description' className = 'form-control1' required='true'/>
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
                                <input type='text' id='input-fname' className='form-control1' required='true' />
                            </div>
                            <br></br>
                            <div>
                                <p>Upload Picture Here (Proof)</p>
                                <input type='file' id='evidence-file' className='form-control1' required='true'/>                                
                            </div>
                            <br></br><br/>
                            <div className='btn-signup'>
                                <button className='btn-signup'>Create a new favour</button>
                            </div>                        
                        </form>
                    </div>
                </main>             
            </body>
        );
    }
}
