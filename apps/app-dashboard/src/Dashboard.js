import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Users</h3>
          <p>1,234</p>
        </div>
        <div className="dashboard-card">
          <h3>Revenue</h3>
          <p>$45,678</p>
        </div>
        <div className="dashboard-card">
          <h3>Orders</h3>
          <p>890</p>
        </div>
        <div className="dashboard-card">
          <h3>Products</h3>
          <p>456</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
