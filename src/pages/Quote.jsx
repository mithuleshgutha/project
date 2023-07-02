import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Quote.css';

const Quote = () => {
  const [showForm, setShowForm] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [fields, setFields] = useState([{ item: "", description: "", quantity: "", price: "" }]);
  const handleFieldChange = (index, field, value) => {
    const updatedFields = [...fields];
    updatedFields[index][field] = value;
    setFields(updatedFields);
  };
  const handleCancel = () => {
    setShowForm(false);
    setButtonClicked(false);
  };
  const addNewField = () => {
    setFields([...fields, { item: "", description: "", quantity: "", price: "" }]);
  };
  const openForm = () => {
    setShowForm(true);
    setButtonClicked(true);
  };
  const handleRefresh = () => {
    window.location.reload(); 
  };
  return (
    <div>
      {!buttonClicked && (
        <><br /><b><p style={{marginLeft: '40px',  fontSize: '20px'}}>Quotes List</p></b><button onClick={openForm} class="btn btn-primary" style={{marginLeft: '800px'}}>+ Add New Quote</button>
        <button onClick={handleRefresh} class="btn btn-primary" style={{marginLeft: '10px'}}>Refresh</button>
        <table style={{width: '1100px'}}>  
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
              <td>Maria</td>
              <td>2023-06-23</td>
              <td>2023-07-23</td>
              <td>100.00</td>
              <td>50.00</td>
              <td><div style={{ backgroundColor: "lightpink", padding: "5px", borderRadius: "4px", color: "white", display: "inline-block" }}>Draft </div></td>
              <td> <div style={{ backgroundColor: "lightcoral", padding: "5px", borderRadius: "4px", color: "white", display: "inline-block" }}>Paid</div></td>
            </tr>
            <tr>
              <td>2</td>
              <td>John</td>
              <td>2023-06-24</td>
              <td>2023-07-24</td>
              <td>150.00</td>
              <td>0.00</td>
              <td><div style={{ backgroundColor: "lightblue", padding: "5px", borderRadius: "4px", color: "white", display: "inline-block" }}>Sent</div></td>
              <td> <div style={{ backgroundColor: "lightgreen", padding: "5px", borderRadius: "4px", color: "white", display: "inline-block" }}>Unpaid</div></td>
            </tr>
          </tbody>
        </table></>
      )}

      {showForm && (
            <div className="container-fluid">
              <br /><button type="submit" className="btn btn-primary" style={{width: '200px', height: '40px', marginLeft: '700px'}}>+ Save Quote</button>
              <button type="submit" className="btn" style={{width: '200px', height: '40px', marginLeft: '10px', border: '0.4px solid lightgray'}} onClick={handleCancel}>Cancel</button> <br /> 
             <hr style={{color: 'lightgray'}}></hr>
            <form>
            <div className="d-flex">
          <div className="form-group mr-3">
            <label htmlFor="client"><font color='red'>*</font>Client</label>
            <br /><br /><input style={{width: '350px', marginRight: '10px'}} placeholder="Search Here" type="text" id="client" name="client" className="form-control" />
          </div>
          <div className="form-group mr-2">
            <label htmlFor="number"><font color='red'>*</font>Number</label>
            <br /><br /><input type="text" style={{width: '300px', marginRight: '10px'}} value="1" id="number" name="number" className="form-control" />
          </div>
          <div className="form-group mr-2">
            <label htmlFor="year"><font color='red'>*</font>Year</label>
            <br /><br /><input type="text" style={{width: '200px', marginRight: '10px'}} value="2023" id="year" name="year" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <br /><br /><select style={{width: '200px', marginRight: '10px'}} id="status" name="status" className="form-control" >
          <option value="draft">Draft</option>
          <option value="pending">Pending</option>
          <option value="sent">Sent</option>
        </select>
          </div>
        </div><br />
        <div className="d-flex">
              <div className="form-group  mr-3">
                <label htmlFor="note">Note</label>
                <br /><br /><input style={{width: '500px', marginRight: '10px'}} id="note" name="note" className="form-control" />
              </div>
              <div className="form-group  mr-2">
                    <label htmlFor="date"><font color='red'>*</font>Date</label>
                    <br /><br /><input  style={{width: '300px', marginRight: '10px'}} type="date" id="dateExpire" name="dateExpire" className="form-control" />
              </div>
              <div className="form-group  mr-3">
                    <label htmlFor="dateExpire"><font color='red'>*</font>Date Expire</label>
                    <br /><br /><input style={{width: '300px', marginRight: '10px'}} type="date" id="dateExpire" name="dateExpire" className="form-control" />
              </div>
              </div><br /><hr style={{color: 'lightgray'}}></hr>
      
              {fields.map((field, index) => (
                <div key={index} className="form-group">
                  <div className="form-row">
                  <div className="d-flex">
                    <div className="col">
                    <div className="form-group  mr-3">
                      <label htmlFor={`item-${index}`}>Item</label>
                      <br /><br /><input placeholder="ItemName" type="text" style={{width: '300px', marginRight: '10px'}} id={`item-${index}`} name={`item-${index}`} className="form-control" value={field.item} onChange={(e) => handleFieldChange(index, "item", e.target.value)}/>
                      </div>
                    </div>
                    <div className="col">
                    <div className="form-group  mr-3">
                      <label htmlFor={`description-${index}`}>Description</label>
                      <br /><br /><input type="text" placeholder="DescriptionName" style={{width: '300px', marginRight: '5px'}} id={`description-${index}`}  name={`description-${index}`} className="form-control" value={field.description} onChange={(e) => handleFieldChange(index, "description", e.target.value)}/>
                      </div>
                    </div>
                    <div className="form-group  mr-3">
                      <label htmlFor={`quantity-${index}`}>Quantity</label>
                      <br /><br /><input type="text" style={{width: '100px', marginRight: '5px'}} id={`quantity-${index}`} name={`quantity-${index}`} className="form-control" value={field.quantity} onChange={(e) => handleFieldChange(index, "quantity", e.target.value)} />
                      </div>
                    <div className="form-group  mr-3">
                      <label htmlFor={`price-${index}`}>Price</label>
                      <br /><br /><input type="text" style={{width: '200px', marginRight: '10px'}} id={`price-${index}`} name={`price-${index}`} className="form-control" value={field.price}  onChange={(e) => handleFieldChange(index, "price", e.target.value)}/>
                      </div>
                      <div className="form-group  mr-3">
                      <label htmlFor={`total-${index}`}>Total</label>
                      <br /><br /><input type="text" style={{width: '200px'}} id={`total-${index}`} name={`total-${index}`} className="form-control" value={field.price} onChange={(e) => handleFieldChange(index, "total", e.target.value)}/>
                      </div>
                      </div>
                  </div><br />
                </div>
              ))}
              <div className="form-group"><br />
                <button style={{width: '1125px' ,border: '1px solid lightgray'}} type="button" className="btn"  onClick={addNewField}> + Add New Field</button>
              </div><br />
              <div className="d-flex">
              <button type="submit" className="btn btn-primary" style={{width: '200px', height: '40px'}}>+ Save Quote</button>
            <font color='red' style={{marginLeft: '600px'}}>*</font>Subtotal 
            <input style={{width: '200px', marginLeft: '50px'}} value="0.00" type="text" id="client" name="client" className="form-control" />   
          </div><br />
          <div className="d-flex">
          <font color='red' style={{marginLeft: '800px'}}>*</font>0
          <input style={{width: '200px', marginLeft: '100px'}} value="0.00" type="text" id="client" name="client" className="form-control" />
          </div><br />
          <div className="d-flex">
          <font color='red' style={{marginLeft: '800px'}}>*</font>Total
          <input style={{width: '200px', marginLeft: '75px'}} type="text" value="0.00" id="client" name="client" className="form-control" />
          </div>
            </form>
          </div>
      )}
    </div>
  );};
export default Quote;
