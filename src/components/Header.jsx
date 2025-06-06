import React from 'react';

const Header = ({ activeTab, setActiveTab }) => {
  const tabs = ['Overview', 'Waste Categories', 'Facilities Comparison', 'Reduction Targets', 'Reports'];

  return (
    <header>
      <div className="logo-container">
        <div className="logo">TW</div>
        <div className="logo-text">Waste Analytics</div>
      </div>
      
      <ul className="nav-tabs">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
      
      <div className="header-right">
        <div className="period-selector">
          Last 30 days ▼
        </div>
        <div className="user-profile">
          <div className="avatar">JD</div>
        </div>
      </div>
    </header>
  );
};

export default Header; 