import React, { useState, useEffect } from 'react';
import './styles/Dashboard2.css';
import BeautyTrackHeader from './components/BeautyTrackHeader';
import InventoryOverview from './components/InventoryOverview';
import LocationComparison from './components/LocationComparison';
import UsageAnalytics from './components/UsageAnalytics';
import ScenarioSelector from './components/ScenarioSelector';
import SimulationService from './services/SimulationService';

const App = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const unsubscribe = SimulationService.subscribeToChanges((scenario) => {
      if (scenario) {
        setDashboardData(scenario.data);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="app-container">
      <BeautyTrackHeader />
      <main className="container">
        <ScenarioSelector />
        <div className="dashboard">
          <InventoryOverview data={dashboardData?.inventory} />
          <LocationComparison data={dashboardData?.locations} />
          <UsageAnalytics data={dashboardData?.usage} />
        </div>
      </main>
    </div>
  );
};

export default App;
