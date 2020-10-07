import React from "react";
import "../Style.css";

export default class HomePage extends React.Component {
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
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nam Long Nguyen</td>
                                <td>100,000$</td>
                                <td>Nam Long Nguyen</td>
                                <td>100,000$</td>
                                <td>100,000$</td>
                                <td><button> Del </button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Nam Dang</td>
                                <td>88,000$</td>
                                <td>Nam Dang</td>
                                <td>88,000$</td>
                                <td>100,000$</td>
                                <td><button> Del </button></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Harry</td>
                                <td>50,000$</td>
                                <td>Harry</td>
                                <td>50,000$</td>
                                <td>100,000$</td>
                                <td><button> Del </button></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Hoang Long Nguyen</td>
                                <td>50$</td>
                                <td>Hoang Long Nguyen</td>
                                <td>50$</td>
                                <td>100,000$</td>
                                <td><button> Del </button></td>
                            </tr>
                        </tbody>
                    </table>   
                </div>
            </body>
        );
    }
}