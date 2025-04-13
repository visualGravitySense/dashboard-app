// Import the demo data
import demoData from '../data/demoData.json';

export const getMetadata = () => {
  return demoData.metadata;
};

export const getDailyData = () => {
  return demoData.dailyData;
};

export const getWasteByCategory = () => {
  return demoData.wasteByCategory;
};

export const getWasteByFacility = () => {
  return demoData.wasteByFacility;
};

export const getMonthlyTotals = () => {
  return demoData.monthlyTotals;
};

export const getWeeklyTotals = () => {
  return demoData.weeklyTotals;
};

export const getTrends = () => {
  return demoData.trends;
};

export const getInsights = () => {
  return demoData.insights;
};

export const getTargets = () => {
  return demoData.targets;
};

export const getBenchmarks = () => {
  return demoData.benchmarks;
};

// Helper function to format currency
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};

// Helper function to format percentages
export const formatPercentage = (value) => {
  return `${value.toFixed(1)}%`;
};

// Helper function to format numbers with commas
export const formatNumber = (value) => {
  return new Intl.NumberFormat('en-US').format(value);
}; 