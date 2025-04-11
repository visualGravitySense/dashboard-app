import React, { useState } from 'react';

const DataIntegration = () => {
  const [selectedSource, setSelectedSource] = useState(null);
  
  const dataSources = [
    {
      id: 'erp',
      name: 'ERP System',
      description: 'Integrate with your existing ERP system to pull real-time production data',
      icon: '📊',
      fields: ['Production Orders', 'Inventory Levels', 'Material Usage', 'Quality Metrics']
    },
    {
      id: 'scada',
      name: 'SCADA Systems',
      description: 'Connect to factory floor SCADA systems for automated data collection',
      icon: '🏭',
      fields: ['Machine Performance', 'Production Speed', 'Downtime Events', 'Energy Usage']
    },
    {
      id: 'manual',
      name: 'Manual Entry',
      description: 'Allow manual data entry for facilities without automated systems',
      icon: '✍️',
      fields: ['Daily Production Logs', 'Waste Measurements', 'Quality Inspections', 'Maintenance Records']
    },
    {
      id: 'api',
      name: 'Custom API',
      description: 'Connect via API to your existing data systems and databases',
      icon: '🔌',
      fields: ['Custom Endpoints', 'Data Transformations', 'Authentication', 'Rate Limiting']
    }
  ];

  return (
    <div className="data-integration">
      <h2>Data Integration Options</h2>
      <p className="integration-description">
        Choose your preferred data source to populate the dashboard with real or mock data.
        Each integration option comes with pre-configured data mappings and validation rules.
      </p>
      
      <div className="integration-grid">
        {dataSources.map(source => (
          <div 
            key={source.id}
            className={`integration-card ${selectedSource === source.id ? 'selected' : ''}`}
            onClick={() => setSelectedSource(source.id)}
          >
            <div className="integration-icon">{source.icon}</div>
            <h3>{source.name}</h3>
            <p>{source.description}</p>
            
            {selectedSource === source.id && (
              <div className="integration-details">
                <h4>Available Fields:</h4>
                <ul>
                  {source.fields.map((field, index) => (
                    <li key={index}>{field}</li>
                  ))}
                </ul>
                <button className="connect-button">
                  Connect {source.name}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="integration-footer">
        <p>
          <strong>Note:</strong> For demo purposes, all integrations will use mock data.
          In production, these integrations will connect to your actual data sources.
        </p>
      </div>
    </div>
  );
};

export default DataIntegration; 