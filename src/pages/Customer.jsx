import React, { useState } from 'react';
import './pages.css';
function Customer() {

  const [Customers, setCustomers] = useState([
    {
      name: "John Doe",
      company: "Google",
      email: "john.doe@example.com"
    },
    {
      name: "Jane Smith",
      company: "JP Morgan",
      email: "jane.smith@example.com"
    },
    {
      name: "David Johnson",
      company: "Accenture",
      email: "david.johnson@example.com"
    }
  ]);
    const [showForm, setShowForm] = useState(false);
    const [CustomerData, setCustomerData] = useState({
      name: '',
      role: '',
      email: ''
    });
  
    const handleInputChange = (e) => {
      setCustomerData({
        ...CustomerData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add the new Customer data to the Customers array
      setCustomers([...Customers, CustomerData]);
      // Clear the form inputs
      setCustomerData({
        name: '',
        role: '',
        email: ''
      });
      // Hide the form modal
      setShowForm(false);
    };
    return (
      <div>
        <h1> Customers </h1>
        <button className="add-admin-button" onClick={() => setShowForm(true)}>
          Add Customer
        </button>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {Customers.map((Customer, index) => (
              <tr key={index}>
                <td>{Customer.name}</td>
                <td>{Customer.company}</td>
                <td>{Customer.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {showForm && (
          <div className="admin-form-container">
            <h2>Add Customer</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={CustomerData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <br />
              <label>
                Company:
                <input
                  type="text"
                  name="company"
                  value={CustomerData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={CustomerData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <br />
              <button className="submit-button" type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    );
  
}


export default Customer
