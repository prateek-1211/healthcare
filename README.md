Healthcare Dashboard

A pixel-perfect, responsive, static single-page Healthcare Dashboard built with React, replicating a clean and professional design. It demonstrates component-based architecture, mock data rendering, and meticulous visual fidelity to the provided design.

Features

Responsive layout with Sidebar, Header, and Main Dashboard content.

Static data rendered via mock JavaScript files.

Modular, reusable React components.

Pixel-perfect UI matching the given design concept.

No interactivity required – fully static display.

Optimized for all screen sizes (desktop, tablet, mobile).

Clean structure and accessible codebase.

Tech Stack

React.js (with create-react-app)

CSS (Modular styling using separate CSS files)

Mock Data via static JavaScript files

Icons from Lucide React / Font Awesome

Deployment: Vercel 

Project Folder Structure

bash
Copy
Edit
src/
│
├── components/
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── DashboardMainContent.jsx
│   ├── DashboardOverview.jsx
│   ├── AnatomySection.jsx
│   ├── HealthStatusCards.jsx
│   ├── CalendarView.jsx
│   ├── UpcomingSchedule.jsx
│   ├── ActivityFeed.jsx
│   └── SimpleAppointmentCard.jsx
│
├── data/
│   ├── navigation.js                
│   ├── healthStatus.js             
│   ├── calendarAppointments.js      
│   └── upcomingAppointments.js      
│
├── assets/
    |
    icons
    |_bone.png
    |_calendar.png
    |_clock.png
    |_heart.png
    |_lungs.png
    |_physio.png
    |_teeth
├── anatomy.png                  
└── user.png                     
│
├── styles/
│   ├── App.css                     
│   └── components/
│       ├── Header.css
│       ├── Sidebar.css
│       ├── DashboardMainContent.css
│       ├── DashboardOverview.css
│       ├── AnatomySection.css
│       ├── HealthStatusCards.css
│       ├── CalendarView.css
│       ├── UpcomingSchedule.css
│       ├── ActivityFeed.css
        ├── SimpleAppointmentCard.css
│      
│
├── App.js                          
├── index.js                        
└── index.css    

Components Overview

Component	Description

Header	Top navigation bar with logo, search, notification, profile avatar, and "Add" button.
Sidebar	Static sidebar with navigation links grouped under "General".
DashboardMainContent	Container for all main content.
DashboardOverview	Wraps AnatomySection and HealthStatusCards.
AnatomySection	Displays a human anatomy illustration with health indicators.
HealthStatusCards	Static cards with health info like lungs, teeth, bones, etc.
CalendarView	Static calendar grid and appointment cards.
UpcomingSchedule	Schedule cards grouped by days like "On Thursday", "On Saturday".
ActivityFeed	Static text and bar chart for weekly activity.
SimpleAppointmentCard	Reusable card component for displaying upcoming appointment details.

How to Run Locally

bash
Copy
Edit
git clone https://github.com/prateek-1211/healthcare.git
cd healthcare
npm install
npm start
Open http://localhost:5173/

Live Demo

View Hosted Website on Vercel

Deployment
This project is deployed using Vercel for optimal performance and seamless static hosting. You can deploy it yourself by:

bash
Copy
Edit
# Install Vercel globally
npm install -g vercel

# Link and deploy
vercel



