import React from 'react';
import '../styles/ActivityFeed.css'; 
const ActivityFeed = () => {
  const weeklyData = [5, 3, 7, 2, 4];

  return (
    <section className="activity-overview">
      <header>
        <h3>Recent Activity</h3>
        <p>You have 3 appointments this week</p>
      </header>

      <div className="chart-wrapper">
        {weeklyData.map((count, index) => {
          const height = count * 10; 
          return (
            <span
              key={`activity-bar-${index}`}
              className="chart-bar"
              style={{ height: `${height}px` }}
            ></span>
          );
        })}
      </div>
    </section>
  );
};

export default ActivityFeed;