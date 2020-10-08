import React  from "react";
import "../Style.css";


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

    render() {
        return (
            <body>
                <main>
                    <div className='add-request-box'>
                        <form>
                            <h1 className='addRequest'>Create a Request</h1>
                            <br></br>
                            <div>
                                <p>Task Name</p>
                                <input type='text' id='input-title' className='form-control1' required='true' autoFocus='true'/>
                            </div>
                            <br></br>
                            <div>
                                <p>Description</p>  
                                <textarea type = 'description' id='description' className = 'form-control1' required='true'/>
                            </div>
                            <br></br>
                            <div>
                                <p>Requester Name</p>
                                <input type='text' id='input-fname' className='form-control1' required='true' />
                            </div>
                            <br></br>                          
                            <div>
                                <p>Reward</p>
                                <select name="rewardItems" className='form-control1'>
                                    <option value="pizza">Pizza</option>
                                    <option value="sushi">Sushi</option>
                                    <option value="pho">Pho</option>
                                    <option value="noodle">Noodle</option>
                                    <option value="coffee">Coffee</option>
                                </select>
                            </div>
                            <br></br>
                            <div>
                                <p>Reward (Quantity)</p>
                                <input type='text' id='input-reward-quantity' className='form-control1' required='true' />
                            </div>
                            <br></br>
                            <div>
                                <p>Upload Picture Here (Proof)</p>
                                <input type='file' id='input-proof' className='form-control1' required='true'/>                                
                            </div>
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