import React, { Suspense } from "react";

const Header = React.lazy(() => import("header/Header"));
const Dashboard = React.lazy(() => import("dashboard/Dashboard"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading header...</div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div>Loading dashboard...</div>}>
        <Dashboard />
      </Suspense>
    </div>
  );
};

export default App;
