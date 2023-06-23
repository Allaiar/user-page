import React from "react";
import { useParams, Link } from "react-router-dom";

function UserPage({ users }) {
  const { id } = useParams();
  const user = users[id];

  return (
    <div key={user.id}>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address}</p>
      <p>Country: {user.country}</p>
      <p>Gender: {user.gender}</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default UserPage;
