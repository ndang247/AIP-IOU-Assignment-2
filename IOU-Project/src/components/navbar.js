import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "react-sidebar";
import "../Style.css"

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
    
    render() {
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
                                    <Link to='/'>Home</Link>
                                </div>
                                <br/>
                                <div>
                                    <Link to='/leaderboard'>Leaderboard</Link>
                                </div>
                                <br/>
                                <div>
                                    <div>
                                        <Link to='/signup'>Sign Up</Link>  
                                    </div>
                                </div>
                                <br/>
                                <div>      
                                    <div>
                                        <Link to='/signin'>Sign In</Link>
                                    </div>                             
                                </div>
                                <br/>
                                <div>      
                                    <div>
                                        <Link to='/addrequest'>View/Add Request</Link>
                                    </div>                             
                                </div>
                                <br/>
                                <div>      
                                    <div>
                                        <Link to='/addfavour'>Add Favour</Link>
                                    </div>                             
                                </div>
                            </div>
                        </div>
                    </header>
                    }
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{ sidebar: { background: "#0078B5" } }}
                    >
                        <button onClick={() => this.onSetSidebarOpen(true)}>
                            &#9776;
                        </button>
                    </Sidebar>
                    <div className="logo">
                        <Link to='/'>IOU</Link>
                    </div>
                </div>
            </header>
        </div>
        );
    }
}