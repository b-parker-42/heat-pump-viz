import { colors } from './theme';

export const chartDefaults = {
  margins: {
    top: 70,
    right: 30,
    left: 20,
    bottom: 70,
  },
  marginsWithLargeLegend: {
    top: 70,
    right: 30,
    left: 20,
    bottom: 90,
  },
  height: 400,
  gridStrokeDasharray: '3 3',
} as const;

export const chartLegendConfig = {
  verticalAlign: 'bottom' as const,
  height: 70,
  wrapperStyle: { 
    paddingBottom: 16,
    paddingTop: 16,
  },
} as const;

export const governmentSchemeChartConfig = {
  bars: [
    { dataKey: 'BUS', color: colors.chart.BUS },
    { dataKey: 'ECO4', color: colors.chart.ECO4 },
    { dataKey: 'Other', color: colors.chart.Other },
  ],
  stackId: 'government-schemes',
};

export const heatPumpTypeChartConfig = {
  bars: [
    { dataKey: 'Air Source', color: colors.chart.airSource },
    { dataKey: 'Ground Source', color: colors.chart.groundSource },
    { dataKey: 'Water Source', color: colors.chart.waterSource },
    { dataKey: 'Hybrid', color: colors.chart.hybrid },
  ],
  stackId: 'heat-pump-types',
};
