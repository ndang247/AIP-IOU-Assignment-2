import React from "react";
import "../Style.css";
import axios from "axios";

export default class PayFavour extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         // the property of the state that correspond to the field of the database
    //         title: '',
    //         description: '',
    //         quantity: '',
    //         rewardData: [], // this will be shown in a dropdown all the rewards in the database
    //         favourData: []
    //     }

    //     this.onSubmit = this.onSubmit.bind(this);
    // }

    // componentDidMount() {
    //     axios({
    //         method: 'GET',
    //         url: '/api/rewards',
    //         data: null
    //     }).then (res => {
    //         console.log(res);
    //         this.setState({
    //             rewardData: res.data
    //         });
    //     }).catch(err => {
    //         console.log(err);
    //     })

    //     axios({
    //         method: 'GET',
    //         url: '/api/my-favours',
    //         data: null
    //     }).then (res => {
    //         console.log(res);
    //         this.setState({
    //             favourData: res.data
    //         });
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }

    // handleChange = (event) => {
    //     this.setState({ [event.target.name]: event.target.value })
    // }
    // // this function is use when user submit a form
    // onSubmit(e) {
    //     // this will prevent the default HTML form submit behaviour from taking place
    //     e.preventDefault();

    //     const favour = {
    //         description: this.state.description,
    //         quantity: this.state.quantity
    //     }
    //     const config = {
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         }
    //     }
    //     axios.post('/api/add-my-favours',  qs.stringify(favour), config)
    //     .then(res => console.log(res.data));
    // }

    render() {
        return (
            <body>   
                <main>
                    <div className='addfavours-box'>
                        <form onSubmit={this.onSubmit}>
                            <h1>Gain Reward</h1>   
                            <br></br>
                            <div>
                                <p>Request ID</p>  
                                <input type = 'id' id='requestID' name='requestID' className = 'form-control1' required='true'/>
                            </div>
                            <br></br>
                            <div>
                                <p>Upload Picture Here (Proof)</p>
                                <input type='file' id='evidence-file' className='form-control1' required='true'/>                                
                            </div>
                            <br></br><br/>
                            <div className='btn-signup'>
                                <button className='btn-signup'>Gain reward</button>
                            </div>                        
                        </form>
                    </div>
                </main>             
            </body>
        );
    }
}
