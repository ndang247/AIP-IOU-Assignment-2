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
                        <table>
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Description</th>
                                    <th>Favour</th>
                                    <th>Rewards</th>
                                    <th>When</th>
                                </tr>
                            </thead>
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