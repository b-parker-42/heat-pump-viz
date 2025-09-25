import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Overview.css';

// Dummy data for the skeleton charts
const dummyGovernmentSchemeData = [
  { quarter: 'Q1 2024', BUS: 12000, ECO4: 8000, Other: 3000 },
  { quarter: 'Q2 2024', BUS: 15000, ECO4: 9500, Other: 3500 },
  { quarter: 'Q3 2024', BUS: 18000, ECO4: 11000, Other: 4000 },
  { quarter: 'Q4 2024', BUS: 20000, ECO4: 12500, Other: 4500 },
];

const dummyHeatPumpTypeData = [
  { quarter: 'Q1 2024', 'Air Source': 18000, 'Ground Source': 3000, 'Water Source': 500, 'Hybrid': 1500 },
  { quarter: 'Q2 2024', 'Air Source': 22000, 'Ground Source': 3500, 'Water Source': 600, 'Hybrid': 1900 },
  { quarter: 'Q3 2024', 'Air Source': 26000, 'Ground Source': 4000, 'Water Source': 700, 'Hybrid': 2300 },
  { quarter: 'Q4 2024', 'Air Source': 30000, 'Ground Source': 4500, 'Water Source': 800, 'Hybrid': 2700 },
];

const Overview: React.FC = () => {
  return (
    <div className="overview-container">
      <h1>Heat Pump Deployment Overview</h1>
      <p className="overview-description">
        Quarterly statistics for heat pump installations in the United Kingdom
      </p>
      
      <div className="charts-container">
        {/* Chart 1: Quarterly Heat Pump installations by government scheme (Table 1.1) */}
        <div className="chart-section">
          <h2>Quarterly Heat Pump Installations by Government Scheme</h2>
          <p className="chart-description">Data from Excel Tab: Table 1.1</p>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={dummyGovernmentSchemeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="BUS" stackId="a" fill="#8884d8" />
                <Bar dataKey="ECO4" stackId="a" fill="#82ca9d" />
                <Bar dataKey="Other" stackId="a" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Quarterly Heat Pump installations by Heat Pump type (Table 1.2) */}
        <div className="chart-section">
          <h2>Quarterly Heat Pump Installations by Heat Pump Type</h2>
          <p className="chart-description">Data from Excel Tab: Table 1.2</p>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={dummyHeatPumpTypeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Air Source" stackId="b" fill="#8884d8" />
                <Bar dataKey="Ground Source" stackId="b" fill="#82ca9d" />
                <Bar dataKey="Water Source" stackId="b" fill="#ffc658" />
                <Bar dataKey="Hybrid" stackId="b" fill="#ff7300" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="data-note">
        <p><strong>Note:</strong> Charts are currently showing placeholder data. 
        The Excel file "Heat_pump_deployment_quarterly_statistics_United_Kingdom_2025_Q2.xlsx" 
        should be placed in the /data/ directory for actual data visualization.</p>
      </div>
    </div>
  );
};

export default Overview;