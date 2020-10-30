import React from "react";
import "../Style.css";
import axios from "axios";

export default class PayFavour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // the property of the state that correspond to the field of the database
            requestID: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <body>
                <main>
                    <div className='addfavours-box'>
                        <form onSubmit={this.onSubmit}>
                            <h1>Gain Reward</h1>
                            <br></br>
                            <div>
                                <p>Request ID</p>
                                <input type='id' id='requestID' name='requestID' className='form-control1' required='true' />
                            </div>
                            <br></br>
                            <div>
                                <p>Upload Picture Here (Proof)</p>
                                <input type='file' id='evidence-file' className='form-control1' required='true' />
                            </div>
                            <br></br><br />
                            <div className='btn-signup'>
                                <button className='btn-signup'>Gain reward</button>
                            </div>
                        </form>
                    </div>
                </main>
            </body>
        );
    }
}
