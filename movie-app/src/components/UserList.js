import React from 'react';

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <div>
              <strong>Name:</strong> {user.name}
            </div>
            <div>
              <strong>Email:</strong> {user.email}
            </div>
            {/* Add more user information here as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
