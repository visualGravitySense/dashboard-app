import React from 'react';
import '../styles/ChartTooltip.css';

const ChartTooltip = ({ data, position }) => {
  if (!data) return null;

  return (
    <div 
      className="chart-tooltip"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -100%)',
        marginTop: '-10px'
      }}
    >
      <div className="tooltip-header">
        <h4>{data.title}</h4>
        <span className="tooltip-value">{data.value}</span>
      </div>
      
      {data.details && (
        <div className="tooltip-details">
          {Object.entries(data.details).map(([key, value]) => (
            <div key={key} className="tooltip-detail-item">
              <span className="detail-label">{key}:</span>
              <span className="detail-value">{value}</span>
            </div>
          ))}
        </div>
      )}
      
      {data.trend && (
        <div className={`tooltip-trend ${data.trend > 0 ? 'positive' : 'negative'}`}>
          <span className="trend-icon">
            {data.trend > 0 ? '↑' : '↓'}
          </span>
          <span className="trend-value">
            {Math.abs(data.trend)}% from previous period
          </span>
        </div>
      )}
    </div>
  );
};

export default ChartTooltip; 