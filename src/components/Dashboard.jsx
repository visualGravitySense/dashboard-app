import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.css';
import DataFilters from './DataFilters';
import ChartTooltip from './ChartTooltip';
import { 
  getMetadata, 
  getMonthlyTotals, 
  getTrends, 
  getInsights,
  formatPercentage,
  formatNumber,
  formatCurrency
} from '../services/dataService';

const Dashboard = () => {
  const [metadata, setMetadata] = useState(null);
  const [monthlyTotals, setMonthlyTotals] = useState(null);
  const [trends, setTrends] = useState(null);
  const [insights, setInsights] = useState([]);
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

  useEffect(() => {
    // Load initial data
    setMetadata(getMetadata());
    setMonthlyTotals(getMonthlyTotals());
    setTrends(getTrends());
    setInsights(getInsights());
  }, []);

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

  if (!metadata || !monthlyTotals || !trends) {
    return <div className="dashboard-loading">Loading...</div>;
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>{metadata.company}</h1>
        <p>{metadata.period}</p>
      </header>

      <DataFilters 
        onFilterChange={handleFilterChange}
        onVisualizationChange={handleVisualizationChange}
      />

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Waste Overview</h3>
          <div className="metric">
            <span className="metric-value">{formatNumber(monthlyTotals.totalWaste)} kg</span>
            <span className="metric-label">Total Waste</span>
          </div>
          <div className="trend-indicator">
            <span className={`trend ${trends.wasteTrend < 0 ? 'positive' : 'negative'}`}>
              {trends.wasteTrend < 0 ? '↓' : '↑'} {Math.abs(trends.wasteTrend)}%
            </span>
            <span className="trend-label">vs previous period</span>
          </div>
          <div 
            className="chart-container"
            onMouseMove={(e) => handleChartHover({
              title: "Waste Overview",
              value: `${formatNumber(monthlyTotals.totalWaste)} kg`,
              details: {
                "Per Unit": `${monthlyTotals.avgWastePerUnit.toFixed(3)} kg`,
                "Recovery Rate": formatPercentage(monthlyTotals.avgRecoveryRate)
              }
            }, e)}
            onMouseLeave={() => handleChartHover(null)}
          >
            {/* Chart component would go here */}
            <div className="placeholder-chart">Waste Trend Chart</div>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Cost Impact</h3>
          <div className="metric">
            <span className="metric-value">{formatCurrency(monthlyTotals.totalCostImpact)}</span>
            <span className="metric-label">Total Cost Impact</span>
          </div>
          <div className="trend-indicator">
            <span className={`trend ${trends.costImpactTrend < 0 ? 'positive' : 'negative'}`}>
              {trends.costImpactTrend < 0 ? '↓' : '↑'} {Math.abs(trends.costImpactTrend)}%
            </span>
            <span className="trend-label">vs previous period</span>
          </div>
          <div 
            className="chart-container"
            onMouseMove={(e) => handleChartHover({
              title: "Cost Impact",
              value: formatCurrency(monthlyTotals.totalCostImpact),
              details: {
                "Per Unit": formatCurrency(monthlyTotals.totalCostImpact / monthlyTotals.totalProductionUnits),
                "Trend": formatPercentage(trends.costImpactTrend)
              }
            }, e)}
            onMouseLeave={() => handleChartHover(null)}
          >
            {/* Chart component would go here */}
            <div className="placeholder-chart">Cost Impact Chart</div>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Recovery Rate</h3>
          <div className="metric">
            <span className="metric-value">{formatPercentage(monthlyTotals.avgRecoveryRate)}</span>
            <span className="metric-label">Average Recovery Rate</span>
          </div>
          <div className="trend-indicator">
            <span className={`trend ${trends.recoveryRateTrend > 0 ? 'positive' : 'negative'}`}>
              {trends.recoveryRateTrend > 0 ? '↑' : '↓'} {Math.abs(trends.recoveryRateTrend)}%
            </span>
            <span className="trend-label">vs previous period</span>
          </div>
          <div 
            className="chart-container"
            onMouseMove={(e) => handleChartHover({
              title: "Recovery Rate",
              value: formatPercentage(monthlyTotals.avgRecoveryRate),
              details: {
                "Target": "60%",
                "Progress": formatPercentage(monthlyTotals.avgRecoveryRate)
              }
            }, e)}
            onMouseLeave={() => handleChartHover(null)}
          >
            {/* Chart component would go here */}
            <div className="placeholder-chart">Recovery Rate Chart</div>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Production Units</h3>
          <div className="metric">
            <span className="metric-value">{formatNumber(monthlyTotals.totalProductionUnits)}</span>
            <span className="metric-label">Total Production Units</span>
          </div>
          <div className="trend-indicator">
            <span className="trend neutral">
              {formatNumber(monthlyTotals.totalProductionUnits / 31)} /day
            </span>
            <span className="trend-label">daily average</span>
          </div>
          <div 
            className="chart-container"
            onMouseMove={(e) => handleChartHover({
              title: "Production Units",
              value: formatNumber(monthlyTotals.totalProductionUnits),
              details: {
                "Daily Average": formatNumber(monthlyTotals.totalProductionUnits / 31),
                "Waste Per Unit": `${monthlyTotals.avgWastePerUnit.toFixed(3)} kg`
              }
            }, e)}
            onMouseLeave={() => handleChartHover(null)}
          >
            {/* Chart component would go here */}
            <div className="placeholder-chart">Production Units Chart</div>
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