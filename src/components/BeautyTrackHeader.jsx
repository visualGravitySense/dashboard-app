import React from 'react';
import '../styles/Dashboard2.css';

const BeautyTrackHeader = () => {
  return (
    <header className="header">
      <div className="logo">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4C11.164 4 4 11.164 4 20C4 28.836 11.164 36 20 36C28.836 36 36 28.836 36 20C36 11.164 28.836 4 20 4ZM20 34C12.268 34 6 27.732 6 20C6 12.268 12.268 6 20 6C27.732 6 34 12.268 34 20C34 27.732 27.732 34 20 34Z" fill="#8e44ad"/>
          <path d="M20 10C14.477 10 10 14.477 10 20C10 25.523 14.477 30 20 30C25.523 30 30 25.523 30 20C30 14.477 25.523 10 20 10ZM20 28C15.589 28 12 24.411 12 20C12 15.589 15.589 12 20 12C24.411 12 28 15.589 28 20C28 24.411 24.411 28 20 28Z" fill="#8e44ad"/>
          <circle cx="20" cy="20" r="4" fill="#8e44ad"/>
        </svg>
        <h1>BeautyTrack</h1>
      </div>
      <div className="user-info">
        <div className="user-avatar">SM</div>
        <div className="user-details">
          <span className="user-name">Sarah Manager</span>
          <span className="user-role">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default BeautyTrackHeader; 