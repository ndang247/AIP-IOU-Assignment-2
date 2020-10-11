import React from "react";
import "../Style.css";
import axios from 'axios';

export default class AddViewDebt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rewardData: [],
            userData: []
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
                rewardData: res.data
            });
        }).catch(err => {
            console.log(err);
        })
        
        axios({
            method: 'GET',
            url: 'http://localhost:8080/api/emails',
            data: null
        }).then (res => {
            console.log(res);
            this.setState({
                userData: res.data
            });
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return(
            <body>
                <div className="debt-container container">
                    <section className='jumbotron text-centre'>
                        <h1 className='leaderboard-title'>My Debts</h1>
                    </section>
                    <br></br>
                    <br></br>
                    <table className="request-table">
                        <thead>
                            <tr>
                                <th>Debt ID</th>
                                <th>Debt's Title</th>
                                <th>Debtor</th>
                                <th>Description</th>
                                <th>Reward</th>
                                <th>Reward (Quantity)</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.userData.map((userData) =>
                                <tr><td>{userData.email}</td></tr>
                            )}
                        </tbody>
                        
                    </table>   
                </div>          
                <main>
                    <div className='add-debt-box'>
                        <form>
                            <h1 className='addDebt'>Create a Debt</h1>
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
