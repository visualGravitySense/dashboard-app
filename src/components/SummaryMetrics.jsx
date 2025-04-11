import React from 'react';

const SummaryMetrics = () => {
  const metrics = [
    {
      title: 'Total Waste',
      value: '5,842 kg',
      trend: 'down',
      change: '8.2% from last period'
    },
    {
      title: 'Waste per Unit',
      value: '0.37 kg',
      trend: 'down',
      change: '2.5% from last period'
    },
    {
      title: 'Cost Impact',
      value: '$21,576',
      trend: 'down',
      change: '10.3% from last period'
    },
    {
      title: 'Recovery Rate',
      value: '42.8%',
      trend: 'up',
      change: '5.1% from last period'
    }
  ];

  return (
    <div className="summary-metrics">
      {metrics.map((metric, index) => (
        <div key={index} className="metric-card">
          <div className="metric-title">{metric.title}</div>
          <div className="metric-value">{metric.value}</div>
          <div className={`metric-trend trend-${metric.trend}`}>
            {metric.trend === 'up' ? '↑' : '↓'} {metric.change}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryMetrics; 