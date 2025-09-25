import React from 'react';
import { useHeatPumpData } from '../hooks/useHeatPumpData';
import { governmentSchemeChartConfig, heatPumpTypeChartConfig, chartDefaults } from '../config/chartConfig';

import ReusableBarChart from './common/ReusableBarChart';
import LoadingSpinner from './common/LoadingSpinner';
import ErrorMessage from './common/ErrorMessage';
import DataNote from './common/DataNote';
import './Overview.css';

const Overview: React.FC = () => {
  const { governmentSchemeData, heatPumpTypeData, loading, error } = useHeatPumpData();

  if (loading) {
    return (
      <div className="overview-container">
        <h1>UK Heat Pump Installations</h1>
        <LoadingSpinner />
      </div>
    );
  }


  return (
    <div className="overview-container">
      <h1>UK Heat Pump Installations</h1>
      <p className="overview-description">
        Quarterly statistics for heat pump installations in the United Kingdom
      </p>
      
      {error && <ErrorMessage message={error} />}
      
      <div className="charts-container">
        <ReusableBarChart
          data={governmentSchemeData}
          bars={governmentSchemeChartConfig.bars}
          stackId={governmentSchemeChartConfig.stackId}
          title="By Government Scheme"
          description="Data from Excel Tab: Table 1.1"
        />

        <ReusableBarChart
          data={heatPumpTypeData}
          bars={heatPumpTypeChartConfig.bars}
          stackId={heatPumpTypeChartConfig.stackId}
          title="By Type"
          description="Data from Excel Tab: Table 1.2"
          margins={chartDefaults.marginsWithLargeLegend}
        />
      </div>

      <DataNote />
    </div>
  );
};export default Overview;