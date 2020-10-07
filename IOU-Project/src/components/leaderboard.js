import React from "react";
import "../Style.css";

export default class Leaderboard extends React.Component {
    render() {
        return (
            <body>
                <div className="container">
                    <h1 className="leaderboard-title">Leaderboard</h1>
                    <table className="leaderboard-table">
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Full Name</th>
                                <th>Number of Debt</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nam Long Nguyen</td>
                                <td>100,000$</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Nam Dang</td>
                                <td>88,000$</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Harry</td>
                                <td>50,000$</td>
                            </tr>
                            <tr>
                                <td>4</td>
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