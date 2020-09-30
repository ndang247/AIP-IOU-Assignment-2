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
                            <h1 className='add-header'>Add Request</h1>
                            <br></br>
                            <div>
                                <input type="text" id="inputRequest" placeholder="Enter request" required='true' autoFocus='true'/>
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