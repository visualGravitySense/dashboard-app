import React, { useState } from 'react';
import '../styles/Dashboard2.css';

const Dashboard2 = () => {
  const [activeTab, setActiveTab] = useState('Monthly');

  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19" stroke="#8e44ad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z" stroke="#8e44ad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 17C9 16.4696 9.21071 15.9609 9.58579 15.5858C9.96086 15.2107 10.4696 15 11 15C11.5304 15 12.0391 15.2107 12.4142 15.5858C12.7893 15.9609 13 16.4696 13 17" stroke="#8e44ad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 13C10 13.5523 9.55228 14 9 14C8.44772 14 8 13.5523 8 13C8 12.4477 8.44772 12 9 12C9.55228 12 10 12.4477 10 13Z" fill="#8e44ad"/>
            <path d="M15 13C15 13.5523 14.5523 14 14 14C13.4477 14 13 13.5523 13 13C13 12.4477 13.4477 12 14 12C14.5523 12 15 12.4477 15 13Z" fill="#8e44ad"/>
          </svg>
          <h1>BeautyTrack</h1>
        </div>
        <div className="user-info">
          <div className="user-avatar">SM</div>
          <div>
            <p>Sarah Manager</p>
            <small>Admin</small>
          </div>
        </div>
      </div>
      
      <div className="dashboard">
        {/* Inventory Overview Card */}
        <div className="card overview-card">
          <div className="card-header">
            <div className="card-title">Inventory Overview</div>
            <div className="card-actions">
              <button className="card-action">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="card-action">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6H5H21M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="card-action">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="stats-grid">
            <div className="stat-box">
              <h3>1,253</h3>
              <p>Total Products</p>
            </div>
            <div className="stat-box">
              <h3>37</h3>
              <p><span className="status-indicator status-critical"></span>Critical Stock</p>
            </div>
            <div className="stat-box">
              <h3>82</h3>
              <p><span className="status-indicator status-low"></span>Low Stock</p>
            </div>
            <div className="stat-box">
              <h3>42</h3>
              <p>Expiring Soon</p>
            </div>
          </div>
          
          <div style={{ marginTop: '20px' }}>
            <h3 style={{ marginBottom: '15px', fontSize: '16px' }}>Product Categories</h3>
            <div className="product-category">
              <span>Hair</span>
              <div className="category-bar">
                <div className="category-fill hair-fill" style={{ width: '45%' }}></div>
              </div>
              <span>45%</span>
            </div>
            <div className="product-category">
              <span>Skin</span>
              <div className="category-bar">
                <div className="category-fill skin-fill" style={{ width: '30%' }}></div>
              </div>
              <span>30%</span>
            </div>
            <div className="product-category">
              <span>Nails</span>
              <div className="category-bar">
                <div className="category-fill nails-fill" style={{ width: '15%' }}></div>
              </div>
              <span>15%</span>
            </div>
            <div className="product-category">
              <span>Retail</span>
              <div className="category-bar">
                <div className="category-fill retail-fill" style={{ width: '10%' }}></div>
              </div>
              <span>10%</span>
            </div>
          </div>
        </div>
        
        {/* Location Comparison Card */}
        <div className="card location-card">
          <div className="card-header">
            <div className="card-title">Location Comparison</div>
            <div className="card-actions">
              <button className="card-action">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6H5H21M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="card-action">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <div className="alert alert-danger">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9V13M12 17H12.01M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="alert-text">Location #3 has 12 products at critical level</span>
            </div>
            <div className="alert alert-warning">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9V13M12 17H12.01M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#f39c12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="alert-text">Location #5 turnover rate is below target by 15%</span>
            </div>
          </div>
          
          <div className="locations-grid">
            <div className="location-card-mini">
              <div className="location-header">
                <h3>Location #1</h3>
                <span className="location-status status-normal">Normal</span>
              </div>
              <div>
                <p><strong>354</strong> Products</p>
                <p><strong>97%</strong> Stock Level</p>
                <p><strong>2.4x</strong> Turnover Rate</p>
              </div>
            </div>
            <div className="location-card-mini">
              <div className="location-header">
                <h3>Location #2</h3>
                <span className="location-status status-normal">Normal</span>
              </div>
              <div>
                <p><strong>287</strong> Products</p>
                <p><strong>92%</strong> Stock Level</p>
                <p><strong>2.1x</strong> Turnover Rate</p>
              </div>
            </div>
            <div className="location-card-mini">
              <div className="location-header">
                <h3>Location #3</h3>
                <span className="location-status status-alert">Alert</span>
              </div>
              <div>
                <p><strong>198</strong> Products</p>
                <p><strong>68%</strong> Stock Level</p>
                <p><strong>3.2x</strong> Turnover Rate</p>
              </div>
            </div>
            <div className="location-card-mini">
              <div className="location-header">
                <h3>Location #4</h3>
                <span className="location-status status-normal">Normal</span>
              </div>
              <div>
                <p><strong>276</strong> Products</p>
                <p><strong>89%</strong> Stock Level</p>
                <p><strong>2.7x</strong> Turnover Rate</p>
              </div>
            </div>
            <div className="location-card-mini">
              <div className="location-header">
                <h3>Location #5</h3>
                <span className="location-status status-warning">Warning</span>
              </div>
              <div>
                <p><strong>138</strong> Products</p>
                <p><strong>85%</strong> Stock Level</p>
                <p><strong>1.5x</strong> Turnover Rate</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Usage Analytics Card */}
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
      </div>
    </div>
  );
};

export default Dashboard2; 