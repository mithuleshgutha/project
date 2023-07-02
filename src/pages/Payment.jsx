import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Payment.css';

const Payment = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };
  const handleRefresh = () => {
    window.location.reload(); 
  };

  return (
    <div className="container-fluid d-flex">
      {showForm && (
        <div className={`form-container ${showForm ? 'slide-in' : ''}`}>
          <br /><p style={{fontSize: '30px', color: 'blue'}}><b>Currency Panel</b></p>
          <br />
          <div className="d-flex"><form>
            <div className="d-flex">
          <div className="form-group mr-3">
            <label htmlFor="client"><font color='red'>*</font>Number</label>
            <br /><br /><input style={{width: '150px', marginRight: '10px'}} value="1" type="number" id="no" name="client" className="form-control" />
          </div>
          <div className="form-group mr-2">
            <label htmlFor="number"><font color='red'>*</font>Date</label>
            <br /><br /><input type="date" style={{width: '150px', marginRight: '10px'}} id="date" name="number" className="form-control" />
          </div>
          
        </div><br />
        <div className="d-flex">
              <div className="form-group  mr-3">
                <label htmlFor="Amount"><font color='red'>*</font>Amount</label>
                <br /><br /><input style={{width: '320px', marginRight: '10px'}} id="amount" className="form-control" />
              </div>
              </div><br />
              <div className="d-flex">
              <div className="form-group  mr-3">
                <label htmlFor="Amount"><font color='red'>*</font>Payment Mode</label>
                <br /><br /><input style={{width: '320px', marginRight: '10px'}} id="mode" className="form-control" />
              </div></div><br />
              <div className="d-flex">
              <div className="form-group  mr-3">
                <label htmlFor="Amount">Reference</label>
                <br /><br /><input style={{width: '320px', marginRight: '10px'}} id="ref" className="form-control" />
              </div></div><br />
              <label htmlFor="Amount">Description</label><br /><br />
              <textarea style={{width: '320px', height: '70px', border: '0.1px solid lightgray'}}></textarea>
              <br /><br /><button type="submit" className="btn btn-primary" style={{width: '200px', height: '40px'}}>Submit</button>
              
                                </form><br />
                                <div class="vertical-line" style={{border: '0.1px solid lightgray', marginLeft: '50px'}}></div></div>
        </div>
      )}
      <div className={`table-container ${showForm ? 'shift-right' : ''}`}><br />
      {!showForm && <><button type="submit" className="btn btn-primary" style={{ width: '175px', height: '40px', marginLeft: '320px' }} onClick={handleButtonClick}>Add New Payment</button><button onClick={handleRefresh} class="btn btn-primary" style={{ marginLeft: '10px' }}>Refresh</button></>}
      <table>  
          <thead>
            <tr>
              <th>#N</th>
              <th>Client</th>
              <th>Date</th>
              <th>Due date</th>
              <th>Total</th>
              <th>Balance</th>
              <th>Status</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Client 1</td>
              <td>2023-06-23</td>
              <td>2023-07-23</td>
              <td>$100.00</td>
              <td>$50.00</td>
              <td><div style={{ backgroundColor: "lightpink", padding: "5px", borderRadius: "4px", color: "white", display: "inline-block" }}>
      Draft
    </div></td>
              <td> <div style={{ backgroundColor: "lightcoral", padding: "5px", borderRadius: "4px", color: "white", display: "inline-block" }}>
      Paid
    </div></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Client 2</td>
              <td>2023-06-24</td>
              <td>2023-07-24</td>
              <td>$150.00</td>
              <td>$0.00</td>
              <td><div style={{ backgroundColor: "lightblue", padding: "5px", borderRadius: "4px", color: "white", display: "inline-block" }}>
      Sent
    </div></td>
              <td> <div style={{ backgroundColor: "lightgreen", padding: "5px", borderRadius: "4px", color: "white", display: "inline-block" }}>
      Unpaid
    </div></td>
            </tr>
          </tbody>
        </table>
        
      </div>
    </div>
  );
};

export default Payment;
