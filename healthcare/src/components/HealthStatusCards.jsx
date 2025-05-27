import React from 'react';
import '../styles/HealthStatusCards.css';

const healthData = [
  { part: 'Lungs', condition: 'Healthy', lastUpdated: '25 May 2025' },
  { part: 'Teeth', condition: 'Moderate', lastUpdated: '24 May 2025' },
  { part: 'Bone', condition: 'Healthy', lastUpdated: '23 May 2025' },
];

const HealthStatusCards = () => {
  return (
    <section className="report-wrapper">
      {healthData.map((item, index) => (
        <div className="report-card" key={index}>
          <h4>{item.part}</h4>
          <span className="condition">Condition: {item.condition}</span>
          <small className="last-update">Updated on: {item.lastUpdated}</small>
        </div>
      ))}
    </section>
  );
};

export default  HealthStatusCards;