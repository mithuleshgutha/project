import React, { useState } from 'react';
import './pages.css';
function Employee() {

  const [Employees, setEmployees] = useState([
    {
      name: "John Doe",
      phoneNumber: "123456789",
      email: "john.doe@example.com"
    },
    {
      name: "Jane Smith",
      phoneNumber: "987654321",
      email: "jane.smith@example.com"
    },
    {
      name: "David Johnson",
      phoneNumber: "123321789",
      email: "david.johnson@example.com"
    }
  ]);
    const [showForm, setShowForm] = useState(false);
    const [EmployeeData, setEmployeeData] = useState({
      name: '',
      role: '',
      email: ''
    });
  
    const handleInputChange = (e) => {
      setEmployeeData({
        ...EmployeeData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add the new Employee data to the Employees array
      setEmployees([...Employees, EmployeeData]);
      // Clear the form inputs
      setEmployeeData({
        name: '',
        role: '',
        email: ''
      });
      // Hide the form modal
      setShowForm(false);
    };
    return (
      <div>
        <h1> Employees </h1>
        <button className="add-admin-button" onClick={() => setShowForm(true)}>
          Add Employee
        </button>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>phoneNumber</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {Employees.map((Employee, index) => (
              <tr key={index}>
                <td>{Employee.name}</td>
                <td>{Employee.phoneNumber}</td>
                <td>{Employee.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {showForm && (
          <div className="admin-form-container">
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={EmployeeData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <br />
              <label>
                Phone Number:
                <input
                  type="text"
                  name="phoneNumber"
                  value={EmployeeData.name}
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
                  value={EmployeeData.name}
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


export default Employee
