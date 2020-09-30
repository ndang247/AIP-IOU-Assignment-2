import React  from "react";
import "../Style.css"


class AddRequest extends React.Component {
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
                        <h1 id="add-header">Add Request</h1>
                        <form id="add-request-form">
                            <div>
                                <input type="text" placeholder="Enter request"/>
                            </div>
                            <button type="submit">Add</button>

                        </form>
                    </main>
                </body>            
        );
    }
}

export default AddRequest;