import React from 'react';

const ReductionProgress = () => {
  const progressData = [
    { label: 'Current Reduction', value: '17.3%' },
    { label: 'Target (2025)', value: '25%' },
    { label: 'Industry Avg.', value: '12.8%' },
    { label: 'Best Practice', value: '28.5%' }
  ];

  return (
    <div className="card reduction-progress">
      <div className="card-header">
        <div className="card-title">Reduction Progress</div>
        <div className="card-actions">
          <button className="card-action">⋮</button>
        </div>
      </div>
      
      <div className="gauge-container">
        <div className="gauge">
          <div className="gauge-fill" style={{ height: '60%' }}></div>
          <div className="gauge-marker" style={{ height: '80px', left: '75%' }}></div>
        </div>
        <div className="gauge-value">68%</div>
      </div>
      
      <div className="progress-details">
        {progressData.map((item, index) => (
          <div key={index} className="progress-item">
            <div className="progress-label">{item.label}</div>
            <div className="progress-value">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReductionProgress; 