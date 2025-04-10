import React, { Suspense } from "react";
import "../../../shared/styles/global.css";

// const Header = React.lazy(() => import("app_header/Header"));
const Dashboard = React.lazy(() => import("app_dashboard/Dashboard"));
// import Dashboard from 'app_dashboard/Dashboard';

function App() {
  return (
    <>
        {/* <h1>Host App</h1> */}
      {/* <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense> */}
      <Suspense fallback={<div>Loading Dashboard...</div>}>
        <Dashboard />
      </Suspense>
    </>
  
  );
}

export default App;
