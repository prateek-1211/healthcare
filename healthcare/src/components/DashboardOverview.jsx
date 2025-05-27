import React from 'react';
import '../styles/DashboardOverview.css';

const DashboardOverview = () => {
  return (
    <section className="overview-card">
      <h2 className="overview-title">Welcome back, Dr. Prateek</h2>
      <p className="overview-subtext">
        Here’s a quick look at your healthcare insights.
      </p>
    </section>
  );
};

export default DashboardOverview;
