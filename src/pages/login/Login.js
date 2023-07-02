import React, {useState} from "react"
import { Register } from "./Register";
import pic1 from './pic1.png'

export const Login = (props) => {
    
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
  
  
  return (
      <div>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet"></link>
              <nav class="navbar bg-dark">
                <div class="container-fluid">
                  <span class="navbar-brand mb-0 h1 text-light p-4">Customer Relationship Management System</span>
                </div>
              </nav>
              <br/><br/>

        <div style={{display:'flex'}}>
          <div style={{marginLeft:'80px'}}>

            <form className="needs-validation" novalidate onSubmit={handlesubmit}>  
              <br/>
              <h3 style={{marginRight:'250px'}}>Sign in</h3>
              <hr style={{marginLeft:'50px',width:'400px'}}/>
                <div className="input-group mb-3" style={{marginLeft:'50px'}}>
                  <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-user"></i></span>
                  <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" className="form-control p-3" placeholder="name@email.com" style={{maxWidth: '500px'}} id="fni"/>
                </div>

                <div className="input-group mb-3" style={{marginLeft:'50px'}}>
                  <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-unlock"></i></span>
                  <input value={pass} onChange={(e)=>setPass(e.target.value)} type="text" className="form-control p-3" placeholder="abcd123" style={{maxWidth: '500px'}} id="fni"/>
                </div>

                <button type="submit" className="btn btn-primary my-2 ms-5">Login</button>
                <button onClick={() => props.onFormSwitch('register')} className="btn btn-secondary my-2 ms-3">Don't have an account? Register here.</button>
              </form>
          </div>

          <div>
            <img src={pic1} height={600} width={850}/>
          </div>
          
        </div>
      </div>
    )
}
