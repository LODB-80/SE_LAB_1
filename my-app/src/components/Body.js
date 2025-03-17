import React from "react";
import users from "../data/users.json";
import "./Body.css";

const Body = () => {
  return (
    <div className="body">
      <h1>User Information</h1>
      <div className="card-container">
        {users.map((user) => (
          <div key={user.id} className="card">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Student ID: {user["student id"]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
