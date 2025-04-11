import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const WasteTrend = () => {
  const data = [
    { date: 'Apr 10', fabricScraps: 150, rejectedItems: 160 },
    { date: 'Apr 17', fabricScraps: 140, rejectedItems: 130 },
    { date: 'Apr 24', fabricScraps: 160, rejectedItems: 120 },
    { date: 'May 1', fabricScraps: 120, rejectedItems: 140 },
    { date: 'May 8', fabricScraps: 130, rejectedItems: 110 }
  ];

  return (
    <div className="card waste-trend">
      <div className="card-header">
        <div className="card-title">Waste Trend</div>
        <div className="card-actions">
          <button className="card-action">⋮</button>
        </div>
      </div>
      
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f2f2f7" />
            <XAxis dataKey="date" stroke="#636366" />
            <YAxis stroke="#636366" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="fabricScraps"
              stroke="#2c6ecb"
              strokeWidth={2}
              dot={{ fill: '#2c6ecb', r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="rejectedItems"
              stroke="#34c759"
              strokeWidth={2}
              dot={{ fill: '#34c759', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="categories-legend">
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#2c6ecb' }}></div>
          <div>Fabric Scraps</div>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#34c759' }}></div>
          <div>Rejected Items</div>
        </div>
      </div>
    </div>
  );
};

export default WasteTrend; 