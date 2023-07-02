import React, {useState} from "react"

export const Register = (props) => {

    const [fname,setFname] = useState('');
    const [lname,setLname] = useState(''); 
    const [email,setEmail] = useState(''); 
    const [pass,setPass] = useState(''); 

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <form onSubmit={handlesubmit} className="needs-validation" novalidate>  
              <br/>
              <h3>Register now</h3>
              <hr/>
              <div className="row g-3" style={{marginLeft:'100px',marginRight:'100px'}}>
                  <div className="col">
                    <input value={fname} onChange={(e)=>setFname(e.target.value)} type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                  </div>
                  <div className="col">
                    <input value={lname} onChange={(e)=>setLname(e.target.value)} type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                  </div>
                  <div className="col-12">
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" placeholder="Email" id="inputEmail4"/>
                  </div>
                  <div className="col-md-6">
                    <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" className="form-control" placeholder="Password" id="inputPassword4"/>
                  </div>
                  <div className="col-md-6">
                    <input type="password" className="form-control" placeholder="Re-enter Password" id="inputPassword4"/>
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control" id="inputAddress" placeholder="Address - Line 1 (1234 Main St)"/>
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Address - Line 2 (Apartment, studio, or floor)"/>
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="City" id="inputCity"/>
                  </div>
                  <div className="col-md-4">
                    <select id="inputState" className="form-select">
                      <option selected>State</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <input type="text" className="form-control" placeholder="Pin" id="inputZip"/>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary my-2">Confirm Registration</button>
                  </div>
                  <button onClick={() => props.onFormSwitch('login')} className="btn btn-secondary my-2">Already have an account? Login here.</button>
              </div>
        </form>
    )
}