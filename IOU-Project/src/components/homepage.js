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
                        <p className='lead text-muted'>
                            This is a public request that is available to everyone.
                            Anyone can view or browse any of these request favours.
                            A leaderboard that showing the best user with the least amount of debt is available.
                            leaderboard can be helpful bla bloh
                        </p>
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