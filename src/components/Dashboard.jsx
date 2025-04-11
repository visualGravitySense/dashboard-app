import React, { useState } from 'react';
import '../styles/Dashboard.css';
import DataFilters from './DataFilters';
import ChartTooltip from './ChartTooltip';

const Dashboard = () => {
  const [filters, setFilters] = useState({
    productLine: 'all',
    materialType: 'all',
    season: 'all'
  });

  const [visualizationType, setVisualizationType] = useState({
    wasteDistribution: 'pie',
    trendAnalysis: 'line'
  });

  const [tooltipData, setTooltipData] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Here you would typically fetch new data based on filters
    console.log('Filters changed:', newFilters);
  };

  const handleVisualizationChange = (newVisualizationType) => {
    setVisualizationType(newVisualizationType);
    // Here you would typically update the chart visualization
    console.log('Visualization changed:', newVisualizationType);
  };

  const handleChartHover = (data, event) => {
    if (data) {
      setTooltipData(data);
      setTooltipPosition({
        x: event.clientX,
        y: event.clientY
      });
    } else {
      setTooltipData(null);
    }
  };

  // Mock data for demonstration
  const mockChartData = {
    title: "Waste by Category",
    value: "1,234 kg",
    details: {
      "Raw Material": "500 kg",
      "Processing": "400 kg",
      "Packaging": "334 kg"
    },
    trend: 5.2
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Textile Manufacturing Dashboard</h1>
        <p>Real-time monitoring and analytics</p>
      </header>

      <DataFilters 
        onFilterChange={handleFilterChange}
        onVisualizationChange={handleVisualizationChange}
      />

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Production Overview</h3>
          <div className="metric">
            <span className="metric-value">85%</span>
            <span className="metric-label">Efficiency Rate</span>
          </div>
          <div 
            className="chart-container"
            onMouseMove={(e) => handleChartHover(mockChartData, e)}
            onMouseLeave={() => handleChartHover(null)}
          >
            {/* Chart component would go here */}
            <div className="placeholder-chart">Production Chart</div>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Waste Management</h3>
          <div className="metric">
            <span className="metric-value">12%</span>
            <span className="metric-label">Waste Reduction</span>
          </div>
          <div 
            className="chart-container"
            onMouseMove={(e) => handleChartHover(mockChartData, e)}
            onMouseLeave={() => handleChartHover(null)}
          >
            {/* Chart component would go here */}
            <div className="placeholder-chart">Waste Chart</div>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Quality Metrics</h3>
          <div className="metric">
            <span className="metric-value">98%</span>
            <span className="metric-label">Quality Score</span>
          </div>
          <div 
            className="chart-container"
            onMouseMove={(e) => handleChartHover(mockChartData, e)}
            onMouseLeave={() => handleChartHover(null)}
          >
            {/* Chart component would go here */}
            <div className="placeholder-chart">Quality Chart</div>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Resource Utilization</h3>
          <div className="metric">
            <span className="metric-value">92%</span>
            <span className="metric-label">Utilization Rate</span>
          </div>
          <div 
            className="chart-container"
            onMouseMove={(e) => handleChartHover(mockChartData, e)}
            onMouseLeave={() => handleChartHover(null)}
          >
            {/* Chart component would go here */}
            <div className="placeholder-chart">Resource Chart</div>
          </div>
        </div>
      </div>

      {tooltipData && (
        <ChartTooltip 
          data={tooltipData}
          position={tooltipPosition}
        />
      )}
    </div>
  );
};

export default Dashboard; 