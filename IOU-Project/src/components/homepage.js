import React from "react";
import "../Style.css";
import axios from 'axios';
// 9
export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.deletePublicRequest = this.deletePublicRequest.bind(this);
        this.onFilter = this.onFilter.bind(this);
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: '/api/all-requests',
            data: null
        }).then(res => {
            //alert(res.data);
            this.setState({
                data: res.data
            });
        }).catch(err => {
            console.log(err);
        })
    }

    deletePublicRequest(id) {
        axios.delete('/api/delete-requests/' + id)
            .then(response => console.log(response.data));

        this.setState({
            // whenever the id in the exercises array does not equal to the id that is being deleted will be pass back to the array
            data: this.state.data.filter(request => request._id !== id)
        })
    }

    onFilter(rewardName) {
        axios.post('/api/filter-request', {
            reward: rewardName
        })
            .then(res => {
                this.setState({
                    data: []
                });
                console.log(res.data)
                this.setState({
                    data: res.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        //alert(this.state.email)

    }
    render() {

        return (
            <body>
             
                <div className="container">
                    <section className='jumbotron text-centre'>
                        <h1 className='leaderboard-title'>Public Requests</h1>
                    </section>
                    <div className="filter-div">
                        <button className="btn-filter" onClick={() => this.onFilter("Pho")}>Pho</button>
                        <button className="btn-filter" onClick={() => this.onFilter("Pizza")}>Pizza</button>
                        <button className="btn-filter" onClick={() => this.onFilter("Sushi")}>Sushi</button>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <table className="request-table">
                        <thead>
                            <tr>
                                <th>Request ID</th>
                                <th>Task Name</th>
                                <th>Description</th>
                                <th>Requester's ID</th>
                                <th>Reward</th>
                                <th>Reward (Quantity)</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {                                                             
                                this.state.data.map((publicRequests) => 
                                <tr>
                                    <td>{publicRequests.id}</td>
                                    <td>{publicRequests.taskName}</td>
                                    <td>{publicRequests.description}</td>
                                    <td>{publicRequests.UserId}</td>
                                    <td>{publicRequests.rewardName}</td>
                                    <td>{publicRequests.quantity}</td>
                                    <td>
                                        <button onClick={() => this.deletePublicRequest(publicRequests.id)}>Delete</button>
                                        {/*<button onClick={() => this.onFilter("Pizza")}>Pho</button>*/}
                                    </td>
                                </tr>
                                )}
                                
                        </tbody>
                    </table>
                    
                    
                </div>
              
            </body>
            
        );
    }
}