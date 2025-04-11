import React, { useState } from 'react';
import '../styles/DataFilters.css';

const DataFilters = ({ onFilterChange, onVisualizationChange }) => {
  const [filters, setFilters] = useState({
    productLine: 'all',
    materialType: 'all',
    season: 'all'
  });

  const [visualizationType, setVisualizationType] = useState({
    wasteDistribution: 'pie',
    trendAnalysis: 'line'
  });

  const productLines = [
    { value: 'all', label: 'All Product Lines' },
    { value: 'cotton', label: 'Cotton Products' },
    { value: 'synthetic', label: 'Synthetic Materials' },
    { value: 'blended', label: 'Blended Fabrics' },
    { value: 'recycled', label: 'Recycled Materials' }
  ];

  const materialTypes = [
    { value: 'all', label: 'All Materials' },
    { value: 'raw', label: 'Raw Materials' },
    { value: 'processed', label: 'Processed Materials' },
    { value: 'finished', label: 'Finished Goods' },
    { value: 'waste', label: 'Waste Materials' }
  ];

  const seasons = [
    { value: 'all', label: 'All Seasons' },
    { value: 'spring', label: 'Spring' },
    { value: 'summer', label: 'Summer' },
    { value: 'fall', label: 'Fall' },
    { value: 'winter', label: 'Winter' }
  ];

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleVisualizationChange = (chartType, newType) => {
    const newVisualizationType = { ...visualizationType, [chartType]: newType };
    setVisualizationType(newVisualizationType);
    onVisualizationChange(newVisualizationType);
  };

  return (
    <div className="data-filters">
      <div className="filters-section">
        <h3>Data Filters</h3>
        <div className="filters-grid">
          <div className="filter-group">
            <label htmlFor="productLine">Product Line</label>
            <select
              id="productLine"
              value={filters.productLine}
              onChange={(e) => handleFilterChange('productLine', e.target.value)}
              className="filter-select"
            >
              {productLines.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="materialType">Material Type</label>
            <select
              id="materialType"
              value={filters.materialType}
              onChange={(e) => handleFilterChange('materialType', e.target.value)}
              className="filter-select"
            >
              {materialTypes.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="season">Season</label>
            <select
              id="season"
              value={filters.season}
              onChange={(e) => handleFilterChange('season', e.target.value)}
              className="filter-select"
            >
              {seasons.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="visualization-controls">
        <h3>Visualization Options</h3>
        <div className="controls-grid">
          <div className="control-group">
            <label>Waste Distribution</label>
            <div className="toggle-buttons">
              <button
                className={`toggle-button ${visualizationType.wasteDistribution === 'pie' ? 'active' : ''}`}
                onClick={() => handleVisualizationChange('wasteDistribution', 'pie')}
              >
                Pie Chart
              </button>
              <button
                className={`toggle-button ${visualizationType.wasteDistribution === 'treemap' ? 'active' : ''}`}
                onClick={() => handleVisualizationChange('wasteDistribution', 'treemap')}
              >
                Treemap
              </button>
            </div>
          </div>

          <div className="control-group">
            <label>Trend Analysis</label>
            <div className="toggle-buttons">
              <button
                className={`toggle-button ${visualizationType.trendAnalysis === 'line' ? 'active' : ''}`}
                onClick={() => handleVisualizationChange('trendAnalysis', 'line')}
              >
                Line Chart
              </button>
              <button
                className={`toggle-button ${visualizationType.trendAnalysis === 'area' ? 'active' : ''}`}
                onClick={() => handleVisualizationChange('trendAnalysis', 'area')}
              >
                Area Chart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataFilters; 