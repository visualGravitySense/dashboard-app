import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const WasteByCategory: React.FC = () => {
  const data = [
    { name: 'Fabric Scraps', value: 48, color: '#2c6ecb' },
    { name: 'Rejected Items', value: 24, color: '#34c759' },
    { name: 'End-of-Roll', value: 16, color: '#ff9500' },
    { name: 'Damaged Materials', value: 8, color: '#ff3b30' },
    { name: 'Thread/Trim', value: 4, color: '#8e8e93' }
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="card waste-by-category">
      <div className="card-header">
        <div className="card-title">Waste by Category</div>
        <div className="card-actions">
          <button className="card-action">⋮</button>
        </div>
      </div>
      
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="donut-center">
          <div className="donut-value">{total}%</div>
          <div className="donut-label">total</div>
        </div>
      </div>
      
      <div className="categories-legend">
        {data.map((item, index) => (
          <div key={index} className="legend-item">
            <div className="legend-color" style={{ backgroundColor: item.color }}></div>
            <div>{item.name} ({item.value}%)</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WasteByCategory; 