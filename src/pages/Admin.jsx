import React, { useState } from 'react';
import './pages.css';
function Admin() {

  const [admins, setAdmins] = useState([
    {
      name: "John Doe",
      role: "Admin",
      email: "john.doe@example.com"
    },
    {
      name: "Jane Smith",
      role: "Manager",
      email: "jane.smith@example.com"
    },
    {
      name: "David Johnson",
      role: "Supervisor",
      email: "david.johnson@example.com"
    }
  ]);
    const [showForm, setShowForm] = useState(false);
    const [adminData, setAdminData] = useState({
      name: '',
      role: '',
      email: ''
    });
  
    const handleInputChange = (e) => {
      setAdminData({
        ...adminData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add the new admin data to the admins array
      setAdmins([...admins, adminData]);
      // Clear the form inputs
      setAdminData({
        name: '',
        role: '',
        email: ''
      });
      // Hide the form modal
      setShowForm(false);
    };
    return (
      <div>
        <h1> Admins </h1>
        <button className="add-admin-button" onClick={() => setShowForm(true)}>
          Add Admin
        </button>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin, index) => (
              <tr key={index}>
                <td>{admin.name}</td>
                <td>{admin.role}</td>
                <td>{admin.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {showForm && (
          <div className="admin-form-container">
            <h2>Add Admin</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={adminData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <br />
              <label>
                Role:
                <input
                  type="text"
                  name="role"
                  value={adminData.role}
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
                  value={adminData.email}
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


export default Admin
