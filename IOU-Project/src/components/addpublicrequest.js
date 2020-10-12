import React  from "react";
import "../Style.css";
import axios from 'axios';


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
            rewardData: []
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
    }

    render() {

        return (
            <body>               
                <main>                                       
                    <div className='addreq-box'>
                        <form>
                            <h1>Create a Public Request</h1>   
                            <br></br>
                            <div>
                                <p>Task Name</p>
                                <input type='text' id='input-request' className='form-control1' required='true' autoFocus='true'/>
                            </div>
                            <br></br>
                            <div>
                                <p>Description</p>
                                <input type='text' id='input-request' className='form-control1' required='true' />
                            </div>
                            <br></br>                    
                            <div>
                                <p>Requester Name</p>
                                <input type='text' id='input-request' className='form-control1' required='true'/>
                            </div>
                            <br></br>
                            <div>
                                <p>Description</p>  
                                <textarea type = 'text' id='input-request' className = 'form-control1' required='true'/>
                            </div>
                            <br></br>
                            <div>
                                <p>Reward</p>
                                <select name="rewardItems" id='input-request' className='form-control1'>
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
                            <br></br><br/>
                            <div className='btn-signup'>
                                <button className='btn-signup'>Create a new favour</button>
                            </div>                        
                        </form>
                    </div>                   
                </main>                
            </body>
        );
    };
}

export default AddPublicRequest;