import React from "react";
import { Link } from "react-router-dom";
import "../Style.css"

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.openSidebar = this.openSidebar.bind(this);
        this.closeSidebar = this.closeSidebar.bind(this);
    }

    render() {
        return (
            <div>
                <header className="header">
                    <div className="brand">
                        <button onClick={this.openSidebar}>
                            &#9776;
                        </button>
                        <Link to='/'>IOU</Link>
                    </div>
                    <div className="header-links">
                        <Link to='/'>Home</Link>
                        <Link to='/leaderboard'>Leaderboard</Link>
                        <Link to='/signup'>Sign Up</Link>
                        <Link to='/signin'>Sign In</Link>
                    </div>
                </header>

                <aside className="sidebar">
                    <button onClick={this.closeSidebar}>x</button>
                </aside>
            </div>
        );
    }

    // Use react-side-bar or refs instead of acccessing DOM directly
    openSidebar() {
        document.querySelector(".sidebar").classList.add("open");
    }
    
    closeSidebar() {
        document.querySelector(".sidebar").classList.remove("open");
    }
}