import React from "react";
import "../Style.css";
import axios from 'axios';

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

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: '/api/all-requests',
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
                        <tbody>
                            {
                                this.state.data.map((publicRequests) => 
                                <tr><td>{publicRequests.id}</td> <td>{publicRequests.taskName}</td> <td>{publicRequests.description}</td>
                                <td>{publicRequests.fullname}</td><td></td><td>{publicRequests.quantity}</td></tr>
                                )}
                        </tbody>
                    </table>   
                </div>
            </body>
        );
    }
}