import React, { useState, useEffect } from 'react';
import SimulationService from '../services/SimulationService';

const ScenarioSelector = () => {
  const [scenarios, setScenarios] = useState([]);
  const [currentScenario, setCurrentScenario] = useState(null);

  useEffect(() => {
    setScenarios(SimulationService.getAllScenarios());
    const unsubscribe = SimulationService.subscribeToChanges((scenario) => {
      setCurrentScenario(scenario);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="scenario-selector">
      <div className="scenario-header">
        <h2>Dashboard Simulation</h2>
        <p>Select a scenario to see how the dashboard responds to different situations</p>
      </div>
      
      <div className="scenarios-list">
        {scenarios.map((scenario) => (
          <div
            key={scenario.id}
            className={`scenario-card ${currentScenario?.id === scenario.id ? 'active' : ''}`}
            onClick={() => SimulationService.startScenario(scenario.id)}
          >
            <h3>{scenario.title}</h3>
            <p>{scenario.description}</p>
            {currentScenario?.id === scenario.id && (
              <span className="active-scenario">Currently Active</span>
            )}
          </div>
        ))}
      </div>

      {currentScenario && (
        <div className="current-scenario-info">
          <h4>Active Scenario: {currentScenario.title}</h4>
          <p>Watch how the dashboard updates in response to this scenario</p>
        </div>
      )}
    </div>
  );
};

export default ScenarioSelector; 