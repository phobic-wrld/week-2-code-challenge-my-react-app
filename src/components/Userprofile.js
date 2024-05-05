// UserProfile.js
import React from 'react';

const UserProfile = ({ userId }) => {
  // Fetch user data based on the userId and display it in the profile
  // For demonstration purposes, let's assume we have a user object with name and email properties
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;