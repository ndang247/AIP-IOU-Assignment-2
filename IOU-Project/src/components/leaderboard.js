import React from "react";
import "../Style.css";
import axios from 'axios';

export default class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            rank: 1
        };
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:8080/api/most-debt',
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

    handleRanking(){
        this.setState({rank: this.state.rank + 1})
        return this.state.rank;
    }
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
                        {
                            this.state.data.map((leaderboardData) => 
                                <tr><td></td> <td>{leaderboardData.fullname}</td> <td>{leaderboardData.debt}</td></tr>
                            
                            )}
                        </tbody>
                    </table>
                </div>
            </body>
        );
    }
}