import React from "react";
import { log } from "../../../shared/utils/logger";

const Dashboard = () => {
  log("Dashboard component loaded");
  return (
    <div className="container">
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard!</p>
    </div>
  );
};

export default Dashboard;
