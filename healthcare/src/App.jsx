import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import './App.css';

const App = () => {
  const [selectedView, setSelectedView] = useState("/dashboardOverview");
  return (
    <div className="container-app">
      <Header />
      <div className="layout-body">
        <Sidebar onSelectView={setSelectedView}  />
        <DashboardMainContent selectedView={selectedView} />
      </div>
    </div>
  );
};

export default App;

