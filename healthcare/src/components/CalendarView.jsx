import React from 'react';
import '../styles/CalendarView.css';
import CalendarAppointments from '../data/calendarAppointments.js';

import teethIcon from '../assets/icons/teeth.png';
import physioIcon from '../assets/icons/physio.png';

function CalendarView() {
  const days = Array.from({ length: 30 });

  return (
    <div className="calendar-view">
      <h3>{CalendarAppointments.month}</h3>
      <div className="calendar-grid">
        {days.map((_, i) => (
  <div key={i} className="calendar-day">
    <span>{i + 1}</span>
    {CalendarAppointments.appointments &&
      CalendarAppointments.appointments[i + 1] && (
        <div className="appointment">
          {CalendarAppointments.appointments[i + 1].join(', ')}
        </div>
      )}
  </div>
))}
      </div>
      <div className="calendar-details">
        <div className="appointment-card">
          <img src={teethIcon} alt="Dentist" className="appt-icon" />
          <span>Dentist - 09:00 AM Dr.Ahuja</span>
        </div>
        <div className="appointment-card">
          <img src={physioIcon} alt="Physiotherapy" className="appt-icon" />
          <span>Physiotherapy - 03:00 PM Dr.Swastik</span>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
