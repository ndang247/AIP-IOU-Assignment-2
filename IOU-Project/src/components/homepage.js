import React from "react";
import "../Style.css";

export default class HomePage extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data: []
    //     };
    // }

    // componentDidMount() {
    //     axios({
    //         method: 'GET',
    //         url: 'http://localhost:8080/api/'
    //     })
    // }

    render() {
        return (
            <body>
                <div className="container">
                    <section className='jumbotron text-centre'>
                        <h1 className='leaderboard-title'>Public Requests</h1>
                    </section>
                    <br></br>
                    <br></br>
                    <br></br>
                    <table className="request-table">
                        <thead>
                            <tr>
                                <th>Request ID</th>
                                <th>Task Name</th>
                                <th>Description</th>
                                <th>Requester Name</th>
                                <th>Reward</th>
                                <th>Reward (Quantity)</th>
                            </tr>
                        </thead>
                    </table>   
                </div>
            </body>
        );
    }
}