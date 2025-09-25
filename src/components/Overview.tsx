import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { parseExcelData, GovernmentSchemeData, HeatPumpTypeData } from '../utils/dataParser';
import './Overview.css';

const Overview: React.FC = () => {
  const [governmentSchemeData, setGovernmentSchemeData] = useState<GovernmentSchemeData[]>([]);
  const [heatPumpTypeData, setHeatPumpTypeData] = useState<HeatPumpTypeData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Try to load the Excel file from the public directory
        const data = await parseExcelData('/Heat_pump_deployment_quarterly_statistics_United_Kingdom_2025_Q2.xlsx');
        
        setGovernmentSchemeData(data.governmentSchemeData);
        setHeatPumpTypeData(data.heatPumpTypeData);
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Failed to load Excel data. Using dummy data instead.');
        
        // Fallback to dummy data
        setGovernmentSchemeData([
          { quarter: '2023 Q1', BUS: 8000, ECO4: 5000, Other: 2000 },
          { quarter: '2023 Q2', BUS: 9000, ECO4: 6000, Other: 2500 },
          { quarter: '2023 Q3', BUS: 10000, ECO4: 7000, Other: 2800 },
          { quarter: '2023 Q4', BUS: 11000, ECO4: 7500, Other: 3000 },
          { quarter: '2024 Q1', BUS: 12000, ECO4: 8000, Other: 3000 },
          { quarter: '2024 Q2', BUS: 15000, ECO4: 9500, Other: 3500 },
          { quarter: '2024 Q3', BUS: 18000, ECO4: 11000, Other: 4000 },
          { quarter: '2024 Q4', BUS: 20000, ECO4: 12500, Other: 4500 },
        ]);
        
        setHeatPumpTypeData([
          { quarter: '2023 Q1', 'Air Source': 12000, 'Ground Source': 2000, 'Water Source': 300, 'Hybrid': 1000 },
          { quarter: '2023 Q2', 'Air Source': 14000, 'Ground Source': 2200, 'Water Source': 350, 'Hybrid': 1200 },
          { quarter: '2023 Q3', 'Air Source': 16000, 'Ground Source': 2500, 'Water Source': 400, 'Hybrid': 1400 },
          { quarter: '2023 Q4', 'Air Source': 17000, 'Ground Source': 2800, 'Water Source': 450, 'Hybrid': 1500 },
          { quarter: '2024 Q1', 'Air Source': 18000, 'Ground Source': 3000, 'Water Source': 500, 'Hybrid': 1500 },
          { quarter: '2024 Q2', 'Air Source': 22000, 'Ground Source': 3500, 'Water Source': 600, 'Hybrid': 1900 },
          { quarter: '2024 Q3', 'Air Source': 26000, 'Ground Source': 4000, 'Water Source': 700, 'Hybrid': 2300 },
          { quarter: '2024 Q4', 'Air Source': 30000, 'Ground Source': 4500, 'Water Source': 800, 'Hybrid': 2700 },
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="overview-container">
        <h1>UK Heat Pump Installations</h1>
        <div className="loading-message">Loading data...</div>
      </div>
    );
  }

  // Custom formatter for y-axis to add comma separators
  const formatYAxis = (value: number) => {
    return value.toLocaleString();
  };


  return (
    <div className="overview-container">
      <h1>UK Heat Pump Installations</h1>
      <p className="overview-description">
        Quarterly statistics for heat pump installations in the United Kingdom
      </p>
      
      {error && (
        <div className="error-message">
          <p><strong>Note:</strong> {error}</p>
        </div>
      )}
      
      <div className="charts-container">
        {/* Chart 1: Quarterly Heat Pump installations by government scheme (Table 1.1) */}
        <div className="chart-section">
          <h2>By Government Scheme</h2>
          <p className="chart-description">Data from Excel Tab: Table 1.1</p>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={governmentSchemeData} margin={{ top: 70, right: 30, left: 20, bottom: 70 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis tickFormatter={formatYAxis} />
                <Tooltip formatter={(value: number) => [value.toLocaleString(), '']} />
                <Legend verticalAlign="bottom" height={70} wrapperStyle={{ paddingBottom: 16 }} />
                <Bar dataKey="BUS" stackId="a" fill="#8884d8" />
                <Bar dataKey="ECO4" stackId="a" fill="#82ca9d" />
                <Bar dataKey="Other" stackId="a" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Quarterly Heat Pump installations by Heat Pump type (Table 1.2) */}
        <div className="chart-section">
          <h2>By Type</h2>
          <p className="chart-description">Data from Excel Tab: Table 1.2</p>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={heatPumpTypeData} margin={{ top: 70, right: 30, left: 20, bottom: 90 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis tickFormatter={formatYAxis} />
                <Tooltip formatter={(value: number) => [value.toLocaleString(), '']} />
                <Legend verticalAlign="bottom" height={70} wrapperStyle={{ paddingTop: 16 }} />
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
        <p><strong>Data Source:</strong> Heat pump deployment quarterly statistics, United Kingdom 2025 Q2</p>
        <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};export default Overview;