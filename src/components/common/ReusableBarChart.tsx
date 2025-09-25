import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { chartDefaults, chartLegendConfig } from '../../config/chartConfig';
import { formatYAxisValue, formatTooltipValue } from '../../utils/formatters';

interface BarConfig {
  dataKey: string;
  color: string;
}

interface ReusableBarChartProps {
  data: any[];
  bars: BarConfig[];
  stackId?: string;
  title: string;
  description: string;
  margins?: {
    top: number;
    right: number;
    left: number;
    bottom: number;
  };
}

const ReusableBarChart: React.FC<ReusableBarChartProps> = ({
  data,
  bars,
  stackId,
  title,
  description,
  margins = chartDefaults.margins,
}) => {
  return (
    <div className="chart-section">
      <h2>{title}</h2>
      <p className="chart-description">{description}</p>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={chartDefaults.height}>
          <BarChart data={data} margin={margins}>
            <CartesianGrid strokeDasharray={chartDefaults.gridStrokeDasharray} />
            <XAxis dataKey="quarter" />
            <YAxis tickFormatter={formatYAxisValue} />
            <Tooltip formatter={formatTooltipValue} />
            <Legend 
              verticalAlign={chartLegendConfig.verticalAlign}
              height={chartLegendConfig.height}
              wrapperStyle={chartLegendConfig.wrapperStyle}
            />
            {bars.map((bar) => (
              <Bar
                key={bar.dataKey}
                dataKey={bar.dataKey}
                stackId={stackId}
                fill={bar.color}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReusableBarChart;
