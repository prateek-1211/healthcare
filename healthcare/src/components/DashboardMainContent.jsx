import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import '../styles/DashboardMainContent.css';

const DashboardMainContent = () => {
  return (
    <section className="dashboard-container">
      <header className="dashboard-header">
        <h2>Dashboard</h2>
        <span className="time-range-label">This Week</span>
      </header>

      <main className="dashboard-content">
        <div className="dashboard-left-panel">
          <AnatomySection />
          <HealthStatusCards />
          <ActivityFeed />
        </div>

        <aside className="dashboard-right-panel">
          <CalendarView />
          <UpcomingSchedule />
        </aside>
      </main>
    </section>
  );
};

export default DashboardMainContent;
