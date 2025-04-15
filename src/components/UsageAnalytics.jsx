import React, { useState } from 'react';
import '../styles/Dashboard2.css';

const UsageAnalytics = () => {
  const [activeTab, setActiveTab] = useState('Monthly');

  return (
    <div className="card usage-card">
      <div className="card-header">
        <div className="card-title">Usage Analytics</div>
        <div className="card-actions">
          <button className="card-action">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6H5H21M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="tab-container">
        <div className="tabs">
          <div 
            className={`tab ${activeTab === 'Monthly' ? 'active' : ''}`}
            onClick={() => setActiveTab('Monthly')}
          >
            Monthly
          </div>
          <div 
            className={`tab ${activeTab === 'By Service' ? 'active' : ''}`}
            onClick={() => setActiveTab('By Service')}
          >
            By Service
          </div>
          <div 
            className={`tab ${activeTab === 'Top Products' ? 'active' : ''}`}
            onClick={() => setActiveTab('Top Products')}
          >
            Top Products
          </div>
        </div>
      </div>
      
      <div className="chart-container">
        <svg width="100%" height="100%" viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg">
          {/* X and Y Axis */}
          <line x1="50" y1="200" x2="450" y2="200" stroke="#ddd" strokeWidth="2" />
          <line x1="50" y1="200" x2="50" y2="50" stroke="#ddd" strokeWidth="2" />
          
          {/* Y-Axis Labels */}
          <text x="30" y="200" fontSize="12" textAnchor="end" fill="#777">0</text>
          <text x="30" y="150" fontSize="12" textAnchor="end" fill="#777">50</text>
          <text x="30" y="100" fontSize="12" textAnchor="end" fill="#777">100</text>
          <text x="30" y="50" fontSize="12" textAnchor="end" fill="#777">150</text>
          
          {/* X-Axis Labels */}
          <text x="83" y="220" fontSize="12" textAnchor="middle" fill="#777">Apr</text>
          <text x="150" y="220" fontSize="12" textAnchor="middle" fill="#777">May</text>
          <text x="217" y="220" fontSize="12" textAnchor="middle" fill="#777">Jun</text>
          <text x="284" y="220" fontSize="12" textAnchor="middle" fill="#777">Jul</text>
          <text x="351" y="220" fontSize="12" textAnchor="middle" fill="#777">Aug</text>
          <text x="418" y="220" fontSize="12" textAnchor="middle" fill="#777">Sep</text>
          
          {/* Grid Lines */}
          <line x1="50" y1="150" x2="450" y2="150" stroke="#eee" strokeWidth="1" />
          <line x1="50" y1="100" x2="450" y2="100" stroke="#eee" strokeWidth="1" />
          <line x1="50" y1="50" x2="450" y2="50" stroke="#eee" strokeWidth="1" />
          
          {/* Hair Products Line */}
          <polyline 
            points="83,120 150,110 217,90 284,105 351,80 418,60" 
            fill="none" 
            stroke="#8e44ad" 
            strokeWidth="3" 
          />
          <circle cx="83" cy="120" r="4" fill="#8e44ad" />
          <circle cx="150" cy="110" r="4" fill="#8e44ad" />
          <circle cx="217" cy="90" r="4" fill="#8e44ad" />
          <circle cx="284" cy="105" r="4" fill="#8e44ad" />
          <circle cx="351" cy="80" r="4" fill="#8e44ad" />
          <circle cx="418" cy="60" r="4" fill="#8e44ad" />
          
          {/* Skin Products Line */}
          <polyline 
            points="83,140 150,130 217,120 284,110 351,115 418,90" 
            fill="none" 
            stroke="#27ae60" 
            strokeWidth="3" 
          />
          <circle cx="83" cy="140" r="4" fill="#27ae60" />
          <circle cx="150" cy="130" r="4" fill="#27ae60" />
          <circle cx="217" cy="120" r="4" fill="#27ae60" />
          <circle cx="284" cy="110" r="4" fill="#27ae60" />
          <circle cx="351" cy="115" r="4" fill="#27ae60" />
          <circle cx="418" cy="90" r="4" fill="#27ae60" />
          
          {/* Legend */}
          <rect x="350" y="10" width="12" height="12" fill="#8e44ad" />
          <text x="370" y="20" fontSize="12" fill="#777">Hair Products</text>
          <rect x="350" y="30" width="12" height="12" fill="#27ae60" />
          <text x="370" y="40" fontSize="12" fill="#777">Skin Products</text>
        </svg>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <h3 style={{ marginBottom: '10px', fontSize: '16px' }}>Top Used Products</h3>
        <table className="products-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Premium Color #5</td>
              <td>127 units</td>
            </tr>
            <tr>
              <td>Facial Clean</td>
              <td>98 units</td>
            </tr>
            <tr>
              <td>Nail Polish #3</td>
              <td>85 units</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsageAnalytics; 