import React from 'react';
import '../styles/AnatomySection.css';

import heartIcon from '../assets/icons/heart.png';
import lungsIcon from '../assets/icons/lungs.png';
import teethIcon from '../assets/icons/teeth.png';
import boneIcon from '../assets/icons/bone.png';
import bodyScanImage from '../assets/anatomy.png';

const AnatomySection = () => {
  const healthStats = [
    { icon: heartIcon, label: 'Heart', status: 'Healthy', type: 'ok' },
    { icon: lungsIcon, label: 'Lungs', status: 'Issue', type: 'alert' },
    { icon: teethIcon, label: 'Teeth', status: 'Check', type: 'warn' },
    { icon: boneIcon, label: 'Bone', status: 'Healthy', type: 'ok' },
  ];

  return (
    <section className="body-scan-container">
      <img src={bodyScanImage} alt="Body Overview" className="scan-image" />
      <div className="health-indicators">
        {healthStats.map((item, index) => (
          <div key={index} className={`health-pill ${item.type}`}>
            <img src={item.icon} alt={item.label} className="icon-img" />
            <span>{item.label}: {item.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnatomySection;
