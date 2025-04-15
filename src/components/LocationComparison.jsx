import React from 'react';
import '../styles/Dashboard2.css';

const LocationComparison = () => {
  return (
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
  );
};

export default LocationComparison; 