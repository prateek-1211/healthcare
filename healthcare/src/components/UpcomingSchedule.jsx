import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import '../styles/UpcomingSchedule.css';
import schedule from '../data/upcomingAppointments';

function UpcomingSchedule() {
  return (
    <section className="schedule-container">
      <h3 className="schedule-title">The Upcoming Schedule</h3>
      {schedule.map((dayData, dayIndex) => (
        <div key={dayIndex} className="schedule-day">
          <h4 className="day-heading">{dayData.day}</h4>
          {dayData.appointments.map((appointment, apptIndex) => (
            <SimpleAppointmentCard key={apptIndex} {...appointment} />
          ))}
        </div>
      ))}
    </section>
  );
}

export default UpcomingSchedule;
