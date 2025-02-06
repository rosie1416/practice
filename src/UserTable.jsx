import React from 'react';
import './index.css'; // Import the CSS file for styling

export default function UserTable({ users }) {
  return (
    <div className="user-table-container">
      <h2>Registered Users</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">No users registered</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}