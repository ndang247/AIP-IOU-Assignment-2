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
                    <div>
                        <form className='add-request-form'>
                            <h1 className='add-header'>Add Public Request</h1>
                            <br></br>
                            <div>
                                <input type="text" id="inputRequest" placeholder="Task Name" required='true' autoFocus='true'/>
                                <input type="text" id="inputRequest" placeholder="Description" required='true' autoFocus='true'/>
                                <input type="text" id="inputRequest" placeholder="Requester Name" required='true' autoFocus='true'/>
                                <select name="rewardItems" id="rewardItems">
                                    <option value="pizza">Pizza</option>
                                    <option value="sushi">Sushi</option>
                                    <option value="pho">Pho</option>
                                    <option value="noodle">Noodle</option>
                                    <option value="coffee">Coffee</option>
                                </select>
                                <input type="text" id="inputRequest" placeholder="Reward (Quantity)" required='true' autoFocus='true'/>
                            </div>
                            <br></br>
                            <div>
                                <button type="submit">Add</button>
                            </div>
                        </form>
                    </div>
                </main>
            </body>
        );
    }
}

export default AddPublicRequest;