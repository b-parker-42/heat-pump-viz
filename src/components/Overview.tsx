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
      
      <div className="intro-section">
        <h2>Understanding Heat Pumps</h2>
        <p className="intro-description">
          Heat pumps are electric heating systems that transfer heat from a source (air, ground, or water) into
          a building instead of generating heat by combustion. Essentially, a refrigerant cycle is used to absorb
          low-grade heat from the environment and "pump" it to a higher temperature for space heating or hot
          water. This process is highly efficient – often 300–400% efficient – meaning 1 kWh of electricity can
          deliver 3–4 kWh of heat. There are several types of heat pumps in use:
        </p>
        
        <div className="heat-pump-types">
          <div className="heat-pump-card">
            <h3>Air-Source Heat Pumps (ASHP)</h3>
            <p>
              The most common type, extracting heat from outside air.
              ASHPs can be air-to-water (providing hot water to radiators or underfloor heating) or air-to-air
              (blowing warm air). Hydronic air-to-water systems dominate in UK residential use (air-to-air
              systems are not typically counted in government incentives).
            </p>
          </div>
          
          <div className="heat-pump-card">
            <h3>Ground-Source Heat Pumps (GSHP)</h3>
            <p>
              Use underground loops to capture heat from the soil (or
              sometimes a body of water). These tend to be more efficient in cold weather but are costlier due
              to ground loop installation. Water-source heat pumps are a variant using lakes, rivers, or
              aquifers as the heat source, and are often grouped with GSHPs.
            </p>
          </div>
          
          <div className="heat-pump-card">
            <h3>Other Types</h3>
            <p>
              A small number of hybrid heat pump systems (combining a heat pump with a 
              boiler) exist, but have generally not been eligible for major UK grant schemes so have had low uptake. 
              There are also exhaust-air heat pumps (using warm ventilation air), but they're not common.
            </p>
          </div>
        </div>
      </div>

      <div className="charts-container">
        <ReusableBarChart
          data={heatPumpTypeData}
          bars={heatPumpTypeChartConfig.bars}
          stackId={heatPumpTypeChartConfig.stackId}
          title="By Type"
          description="Data from Excel Tab: Table 1.2"
          margins={chartDefaults.marginsWithLargeLegend}
        />

          {/* Government Schemes Explainer Card */}
          <div className="intro-section" style={{ marginBottom: 0 }}>
            <h2>Government Schemes Explained</h2>
            <p className="intro-description">
              The UK’s heat pump market has been shaped by overlapping schemes. RHI built the early market, while BUS and ECO now lead growth. Stable, long-term policy and strong incentives are key to meeting future targets—like 600,000 installs per year by 2028. New regulations will further boost demand and supply.
            </p>
            <div className="heat-pump-types">
              <div className="heat-pump-card">
                <h3>ECO (Energy Company Obligation)</h3>
                <p>
                  ECO funds heat pumps for low-income and off-gas-grid homes. Since 2022, it has become a major driver, supporting about one-third of installations in 2024–25. ECO targets fuel-poor households and aligns energy efficiency with decarbonization.
                </p>
              </div>
              <div className="heat-pump-card">
                <h3>RHI (Renewable Heat Incentive, 2014–2022)</h3>
                <p>
                  RHI paid homeowners for renewable heat, setting the stage for heat pump uptake. The scheme closed in 2022 after supporting around 34,500 systems, but fell short of ambitious targets due to low tariffs, complexity, and low consumer awareness.
                </p>
              </div>
              <div className="heat-pump-card">
                <h3>BUS (Boiler Upgrade Scheme, 2022–present)</h3>
                <p>
                  BUS is the main current incentive, offering upfront grants (£7,500 from October 2023) for heat pump installation. BUS now drives about 60% of funded installs, with uptake surging after the grant increase.
                </p>
              </div>
            </div>
          </div>
        <ReusableBarChart
          data={governmentSchemeData}
          bars={governmentSchemeChartConfig.bars}
          stackId={governmentSchemeChartConfig.stackId}
          title="By Government Scheme"
          description="Data from Excel Tab: Table 1.1"
        />
      </div>

      <DataNote />
    </div>
  );
};export default Overview;