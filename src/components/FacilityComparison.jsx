import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const FacilityComparison = () => {
  const data = [
    { name: 'Shanghai', value: 180 },
    { name: 'Dhaka', value: 120 },
    { name: 'Istanbul', value: 90 },
    { name: 'Mexico City', value: 150 },
    { name: 'Milan', value: 60 }
  ];

  return (
    <div className="card facility-comparison">
      <div className="card-header">
        <div className="card-title">Facility Comparison</div>
        <div className="card-actions">
          <button className="card-action">⋮</button>
        </div>
      </div>
      
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f2f2f7" />
            <XAxis dataKey="name" stroke="#636366" />
            <YAxis stroke="#636366" />
            <Tooltip />
            <Bar dataKey="value" fill="#2c6ecb" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FacilityComparison; 