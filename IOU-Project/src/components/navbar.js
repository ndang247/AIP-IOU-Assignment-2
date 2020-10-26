import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "react-sidebar";
import "../Style.css";

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }
    logout() {
        axios.get('/logout').then(res => {
            this.onSetSidebarOpen(false);
            this.props.setLoggedOut();
        });

    }
    render() {
        if (this.props.isLoggedIn === true) {
            return (
                <div>
                    <header className="header">
                        <div className="brand">
                            <Sidebar
                                sidebar={
                                    <header className="header">
                                        <div className="brand">
                                            <div className="header-links">
                                                <div>
                                                    <Link to='/' onClick={() => this.onSetSidebarOpen(false)}>Home</Link>
                                                </div>
                                                <br />
                                                <div>
                                                    <Link to='/leaderboard' onClick={() => this.onSetSidebarOpen(false)}>Leaderboard</Link>
                                                </div>
                                                <br />
                                                <div>
                                                    <div>
                                                        <Link to='/addpublicrequests' onClick={() => this.onSetSidebarOpen(false)}>Add Public Request</Link>
                                                    </div>
                                                </div>
                                                <br />
                                                <div>
                                                    <div>
                                                        <Link to='/addandviewfavour' onClick={() => this.onSetSidebarOpen(false)}>View/Add Favour</Link>
                                                    </div>
                                                </div>
                                                <br />
                                                <div>
                                                    <Link to='/addandviewdebt' onClick={() => this.onSetSidebarOpen(false)}>View/Add Debt</Link>
                                                </div>
                                                <br />
                                                <div>
                                                    <Link to='/gainreward' onClick={() => this.onSetSidebarOpen(false)}>Gain Reward</Link>
                                                </div>
                                                <br />
                                                <div>
                                                    <div>
                                                        <Link to='/signin' onClick={() => this.logout()}>Sign Out</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </header>
                                }
                                open={this.state.sidebarOpen}
                                onSetOpen={this.onSetSidebarOpen}
                                styles={{ sidebar: { background: "#0078b5" } }}
                            >
                                <button onClick={() => this.onSetSidebarOpen(true)}>
                                    &#9776;
                                </button>
                            </Sidebar>
                            <div>
                                <div className="logo">
                                    <Link to='/'>IOU</Link>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            );
        }
        else {
            return (
                <div>
                    <header className="header">
                        <div className="brand">
                            <Sidebar
                                sidebar={
                                    <header className="header">
                                        <div className="brand">
                                            <div className="header-links">
                                                <div>
                                                    <Link to='/' onClick={() => this.onSetSidebarOpen(false)}>Home</Link>
                                                </div>
                                                <br />
                                                <div>
                                                    <Link to='/leaderboard' onClick={() => this.onSetSidebarOpen(false)}>Leaderboard</Link>
                                                </div>
                                                <br />
                                                <div>
                                                    <div>
                                                        <Link to='/addpublicrequests' onClick={() => this.onSetSidebarOpen(false)}>Add Public Request</Link>
                                                    </div>
                                                </div>
                                                <br />
                                                <div>
                                                    <div>
                                                        <Link to='/addandviewfavour' onClick={() => this.onSetSidebarOpen(false)}>View/Add Favour</Link>
                                                    </div>
                                                </div>
                                                <br />
                                                <div>
                                                    <Link to='/addandviewdebt' onClick={() => this.onSetSidebarOpen(false)}>View/Add Debt</Link>
                                                </div>
                                                <br />
                                                <div>
                                                    <Link to='/gainreward' onClick={() => this.onSetSidebarOpen(false)}>Gain Reward</Link>
                                                </div>
                                                <br />
                                                <div>
                                                    <Link to='/payfavour' onClick={() => this.onSetSidebarOpen(false)}>Pay Favour</Link>
                                                </div>
                                                <br />
                                                <div>
                                                    <div>
                                                        <Link to='/signup' onClick={() => this.onSetSidebarOpen(false)}>Sign Up</Link>
                                                    </div>
                                                </div>
                                                <br />
                                                <div>
                                                    <div>
                                                        <Link to='/signin' onClick={() => this.onSetSidebarOpen(false)}>Sign In</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </header>
                                }
                                open={this.state.sidebarOpen}
                                onSetOpen={this.onSetSidebarOpen}
                                styles={{ sidebar: { background: "#0078b5" } }}
                            >
                                <button onClick={() => this.onSetSidebarOpen(true)}>
                                    &#9776;
                                </button>
                            </Sidebar>
                            <div>
                                <div className="logo">
                                    <Link to='/'>IOU</Link>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            );
        }

    }
}