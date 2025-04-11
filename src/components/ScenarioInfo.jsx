import React, { useState } from 'react';

const ScenarioInfo = ({ activeScenario }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const scenarioData = {
    'textile-waste': {
      title: 'Textile Waste Analytics',
      description: 'This dashboard helps textile manufacturers monitor waste metrics across facilities, identify inefficiencies, and implement reduction strategies.',
      benefits: [
        'Reduce material waste by up to 25% through pattern optimization',
        'Lower operational costs by identifying waste hotspots',
        'Improve sustainability metrics for reporting and compliance',
        'Make data-driven decisions for process improvements'
      ],
      tooltips: {
        'summary-metrics': 'Key performance indicators show overall waste reduction progress',
        'waste-by-category': 'Breakdown of waste types helps identify areas for improvement',
        'waste-trend': 'Track waste reduction efforts over time to measure effectiveness',
        'facility-comparison': 'Compare performance across facilities to share best practices',
        'reduction-progress': 'Monitor progress toward waste reduction targets',
        'insights-panel': 'Actionable recommendations based on data analysis'
      }
    },
    'sales-analytics': {
      title: 'Sales Performance Dashboard',
      description: 'Track sales metrics, customer behavior, and revenue trends to optimize your sales strategy and increase profitability.',
      benefits: [
        'Identify top-performing products and sales channels',
        'Forecast future sales based on historical data',
        'Optimize pricing strategies for maximum revenue',
        'Track customer acquisition costs and lifetime value'
      ],
      tooltips: {
        'summary-metrics': 'Key sales metrics show overall performance and trends',
        'waste-by-category': 'Product category performance and contribution to revenue',
        'waste-trend': 'Sales trends over time to identify seasonal patterns',
        'facility-comparison': 'Compare performance across sales teams or regions',
        'reduction-progress': 'Progress toward sales targets and quotas',
        'insights-panel': 'Actionable recommendations to improve sales performance'
      }
    },
    'team-efficiency': {
      title: 'Team Efficiency Metrics',
      description: 'Measure productivity, project completion rates, and resource allocation to optimize team performance and project outcomes.',
      benefits: [
        'Identify bottlenecks in workflows and processes',
        'Optimize resource allocation across projects',
        'Improve project completion rates and quality',
        'Enhance team collaboration and communication'
      ],
      tooltips: {
        'summary-metrics': 'Key efficiency metrics show overall team performance',
        'waste-by-category': 'Breakdown of time spent on different project activities',
        'waste-trend': 'Track efficiency improvements over time',
        'facility-comparison': 'Compare performance across teams or departments',
        'reduction-progress': 'Progress toward efficiency targets',
        'insights-panel': 'Actionable recommendations to improve team efficiency'
      }
    },
    'kpi-control': {
      title: 'KPI Control Center',
      description: 'Monitor key performance indicators across departments and projects to ensure alignment with strategic goals and objectives.',
      benefits: [
        'Track progress toward strategic goals in real-time',
        'Identify areas requiring attention or intervention',
        'Align team efforts with organizational priorities',
        'Make data-driven decisions for resource allocation'
      ],
      tooltips: {
        'summary-metrics': 'Key performance indicators show overall progress toward goals',
        'waste-by-category': 'Breakdown of KPI performance by category or department',
        'waste-trend': 'Track KPI trends over time to identify patterns',
        'facility-comparison': 'Compare KPI performance across departments or projects',
        'reduction-progress': 'Progress toward KPI targets',
        'insights-panel': 'Actionable recommendations to improve KPI performance'
      }
    }
  };

  const currentScenario = scenarioData[activeScenario] || scenarioData['textile-waste'];

  return (
    <div className="scenario-info">
      <div className="scenario-title">
        <h1>{currentScenario.title}</h1>
        <button 
          className="info-toggle"
          onClick={() => setShowTooltip(!showTooltip)}
        >
          {showTooltip ? 'Hide Info' : 'Show Info'}
        </button>
      </div>
      
      {showTooltip && (
        <div className="scenario-details">
          <p className="scenario-description">{currentScenario.description}</p>
          
          <div className="scenario-benefits">
            <h3>Key Benefits</h3>
            <ul>
              {currentScenario.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          
          <div className="component-tooltips">
            <h3>Dashboard Components</h3>
            <div className="tooltip-grid">
              {Object.entries(currentScenario.tooltips).map(([component, tooltip]) => (
                <div key={component} className="tooltip-item">
                  <h4>{component.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h4>
                  <p>{tooltip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScenarioInfo; 