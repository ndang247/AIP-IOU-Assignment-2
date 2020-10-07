import React from "react";
import "../Style.css";

export default class AddFavour extends React.Component {
    render() {
        return (
            <body>               
                <main>                                       
                    <div className='addfavours-box'>
                        <form>
                            <h1 className='addFavours'>Create a Favour</h1>   
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
                                <p>Upload Picture Here</p>
                                <input type='file' id='evidence-file' className='form-control1' required='true'/>                                
                            </div>
                            <br></br><br/>
                            <div className='btn-signup'>
                                <button className='btn-signup'>Create a new favour</button>
                            </div>                        
                        </form>
                    </div>                   
                </main>                
            </body>
        );
    }
}
