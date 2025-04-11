import React from 'react';

const InsightsPanel: React.FC = () => {
  const insights = [
    {
      icon: '↑',
      iconBg: '#edf2fc',
      iconColor: '#2c6ecb',
      title: 'Pattern Efficiency Opportunity',
      description: 'Shanghai facility showing 12% higher fabric waste than others. Review cutting patterns.'
    },
    {
      icon: '↓',
      iconBg: '#ebf8ee',
      iconColor: '#34c759',
      title: 'Success: Rejected Items Reduction',
      description: 'Quality control improvements reduced rejected garments by 8.2% this month.'
    },
    {
      icon: '!',
      iconBg: '#fff2eb',
      iconColor: '#ff9500',
      title: 'End-of-Roll Optimization',
      description: 'Consider smaller batch production for premium lines to reduce end-of-roll waste.'
    }
  ];

  return (
    <div className="card insights-panel">
      <div className="card-header">
        <div className="card-title">Actionable Insights</div>
        <div className="card-actions">
          <button className="card-action">⋮</button>
        </div>
      </div>
      
      {insights.map((insight, index) => (
        <div key={index} className="insight-item">
          <div
            className="insight-icon"
            style={{
              backgroundColor: insight.iconBg,
              color: insight.iconColor
            }}
          >
            {insight.icon}
          </div>
          <div className="insight-info">
            <div className="insight-title">{insight.title}</div>
            <div className="insight-desc">{insight.description}</div>
          </div>
        </div>
      ))}
      
      <button className="action-button">View All Insights</button>
    </div>
  );
};

export default InsightsPanel; 