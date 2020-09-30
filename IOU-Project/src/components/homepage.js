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
                                <th>Proof</th>
                                <th>Requester ID</th>
                                <th>Accepter ID</th>
                                <th>When</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nam Long Nguyen</td>
                                <td>100,000$</td>
                                <td>Nam Long Nguyen</td>
                                <td>100,000$</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Nam Dang</td>
                                <td>88,000$</td>
                                <td>Nam Dang</td>
                                <td>88,000$</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Harry</td>
                                <td>50,000$</td>
                                <td>Harry</td>
                                <td>50,000$</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Hoang Long Nguyen</td>
                                <td>50$</td>
                                <td>Hoang Long Nguyen</td>
                                <td>50$</td>
                            </tr>
                        </tbody>
                    </table>   
                </div>
            </body>
        );
    }
}