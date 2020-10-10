import React from "react";
import "../Style.css";

export default class AddViewDebt extends React.Component {
    render() {
        return(
            <body>
                <main>
                    <div className='add-debt-box'>
                        <form>
                            <h1 className='addDebt'>Create a Debt</h1>
                            <br></br>
                            <div>
                                <p>Title</p>
                                <input type='text' id='input-title' className='form-control1' required='true' autoFocus='true'/>
                            </div>
                            <br></br>
                            <div>
                                <p>Full Name</p>
                                <input type='text' id='input-fname' className='form-control1' required='true' />
                            </div>
                            <br></br>                    
                            <div>
                                <p>Email Address</p>
                                <input type='email' id='input-email' className='form-control1' required='true'/>
                            </div>
                            <br></br>
                            <div>
                                <p>Description</p>  
                                <textarea type = 'description' id='description' className = 'form-control1' required='true'/>
                            </div>
                            <br></br>
                            <div>
                                <p>Reward</p>
                                <select name="rewardItems" className='form-control1'>
                                    <option value="pizza">Pizza</option>
                                    <option value="sushi">Sushi</option>
                                    <option value="pho">Pho</option>
                                    <option value="noodle">Noodle</option>
                                    <option value="coffee">Coffee</option>
                                </select>
                            </div>
                            <br></br>
                            <div>
                                <p>Reward (Quantity)</p>
                                <input type='text' id='input-fname' className='form-control1' required='true' />
                            </div>
                            <br></br>
                            <div>
                                <p>Upload Picture Here (Proof)</p>
                                <input type='file' id='evidence-file' className='form-control1' required='true'/>                                
                            </div>
                            <br></br><br/>
                            <div className='btn-signup'>
                                <button className='btn-signup'>Create a new debt</button>
                            </div>                        
                        </form>
                    </div>
                </main>
            </body>
        );
    };
}
