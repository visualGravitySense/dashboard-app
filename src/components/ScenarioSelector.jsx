import React from 'react';

const ScenarioSelector = ({ activeScenario, setActiveScenario }) => {
  const scenarios = [
    {
      id: 'textile-waste',
      name: 'Textile Waste Analytics',
      description: 'Monitor and analyze waste metrics across textile manufacturing facilities',
      icon: '🧵'
    },
    {
      id: 'sales-analytics',
      name: 'Sales Performance Dashboard',
      description: 'Track sales metrics, customer behavior, and revenue trends',
      icon: '📊'
    },
    {
      id: 'team-efficiency',
      name: 'Team Efficiency Metrics',
      description: 'Measure productivity, project completion rates, and resource allocation',
      icon: '👥'
    },
    {
      id: 'kpi-control',
      name: 'KPI Control Center',
      description: 'Monitor key performance indicators across departments and projects',
      icon: '🎯'
    }
  ];

  return (
    <div className="scenario-selector">
      <div className="scenario-header">
        <h2>Demo Scenarios</h2>
        <p>Select a business scenario to explore different use cases</p>
      </div>
      <div className="scenario-grid">
        {scenarios.map((scenario) => (
          <div 
            key={scenario.id}
            className={`scenario-card ${activeScenario === scenario.id ? 'active' : ''}`}
            onClick={() => setActiveScenario(scenario.id)}
          >
            <div className="scenario-icon">{scenario.icon}</div>
            <div className="scenario-info">
              <h3>{scenario.name}</h3>
              <p>{scenario.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScenarioSelector; 