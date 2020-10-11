import React from "react";
import "../Style.css";
import axios from 'axios';


export default class AddViewFavour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:8080/api/rewards',
            data: null
        }).then (res => {
            console.log(res);
            this.setState({
                data: res.data
            });
        }).catch(err => {
            console.log(err);
        })
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
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                        
                    </table>   
                </div>          
                <main>
                    <div className='addfavours-box'>
                        <form>
                            <h1>Create a Favour</h1>   
                            <br></br>
                            <div>
                                <p>Title</p>
                                <input type='text' id='input-title' className='form-control1' required='true' autoFocus='true'/>
                            </div>
                            <br></br>
                            <div>
                                <p>Full Name</p>
                                <input type='text' id='input-fname' className='form-control1' required='true' />
                            </div>
                            <br></br>                    
                            <div>
                                <p>Email Address</p>
                                <input type='email' id='input-email' className='form-control1' required='true'/>
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
                                        this.state.data.map((rewardData) =>
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
