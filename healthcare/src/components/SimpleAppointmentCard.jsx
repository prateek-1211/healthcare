import React from 'react';
import '../styles/SimpleAppointmentCard.css';
import calendarIcon from '../assets/icons/calendar.png';
import clockIcon from '../assets/icons/clock.png';

function SimpleAppointmentCard({ title, time }) {
  return (
    <div className="appointment-card">
      <div className="appointment-row">
        <img src={calendarIcon} alt="calendar" className="icon-img" />
        <span className="title-text">{title}</span>
      </div>
      <div className="appointment-row">
        <img src={clockIcon} alt="clock" className="icon-img" />
        <span className="time-text">{time}</span>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;
