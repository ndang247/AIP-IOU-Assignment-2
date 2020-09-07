import React from "react";
import { Link } from "react-router-dom";
import "../Style.css"

export default class HomePage extends React.Component {
    render() {
        return (
            <main>
                <section className='jumbotron text-centre'>
                    <div className='container'>
                        <h1 className='jumbotron-heading'>Public Requests</h1>
                        <table className="request-table">
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Description</th>
                                    <th>Favour</th>
                                    <th>Rewards</th>
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
                        <br/>
                        <p>
                            <Link to='/leaderboard' className='btn btn-primary my-2'>Leaderboard</Link>
                            <Link to='/signup' className='btn btn-primary my-2'>Sign in to post a request</Link>
                        </p>
                    </div>
                </section>
            </main>
        );
    }
}