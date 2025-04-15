import React from 'react';
import '../styles/Dashboard2.css';

const InventoryOverview = () => {
  return (
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
  );
};

export default InventoryOverview; 