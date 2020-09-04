import React from "react";
import { Link } from "react-router-dom";
import "../Style.css"

export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="brand">
                        <button>
                            &#9776;
                        </button>
                        <Link to='/'>IOU</Link>
                    </div>
                    <div className="header-links">
                        <Link to='/signup'>Sign Up</Link>
                        <Link to='/signin'>Sign In</Link>
                    </div>
                </header>

                <aside className="sidebar">
                    <button>x</button>
                </aside>
            </div>
        );
    }
}