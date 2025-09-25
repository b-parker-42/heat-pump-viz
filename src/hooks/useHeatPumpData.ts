import { useState, useEffect } from 'react';
import { parseExcelData, GovernmentSchemeData, HeatPumpTypeData } from '../utils/dataParser';

interface UseHeatPumpDataReturn {
  governmentSchemeData: GovernmentSchemeData[];
  heatPumpTypeData: HeatPumpTypeData[];
  loading: boolean;
  error: string | null;
}

// Fallback dummy data
const dummyGovernmentSchemeData: GovernmentSchemeData[] = [
  { quarter: '2023 Q1', BUS: 8000, ECO4: 5000, Other: 2000 },
  { quarter: '2023 Q2', BUS: 9000, ECO4: 6000, Other: 2500 },
  { quarter: '2023 Q3', BUS: 10000, ECO4: 7000, Other: 2800 },
  { quarter: '2023 Q4', BUS: 11000, ECO4: 7500, Other: 3000 },
  { quarter: '2024 Q1', BUS: 12000, ECO4: 8000, Other: 3000 },
  { quarter: '2024 Q2', BUS: 15000, ECO4: 9500, Other: 3500 },
  { quarter: '2024 Q3', BUS: 18000, ECO4: 11000, Other: 4000 },
  { quarter: '2024 Q4', BUS: 20000, ECO4: 12500, Other: 4500 },
];

const dummyHeatPumpTypeData: HeatPumpTypeData[] = [
  { quarter: '2023 Q1', 'Air Source': 12000, 'Ground Source': 2000, 'Water Source': 300, 'Hybrid': 1000 },
  { quarter: '2023 Q2', 'Air Source': 14000, 'Ground Source': 2200, 'Water Source': 350, 'Hybrid': 1200 },
  { quarter: '2023 Q3', 'Air Source': 16000, 'Ground Source': 2500, 'Water Source': 400, 'Hybrid': 1400 },
  { quarter: '2023 Q4', 'Air Source': 17000, 'Ground Source': 2800, 'Water Source': 450, 'Hybrid': 1500 },
  { quarter: '2024 Q1', 'Air Source': 18000, 'Ground Source': 3000, 'Water Source': 500, 'Hybrid': 1500 },
  { quarter: '2024 Q2', 'Air Source': 22000, 'Ground Source': 3500, 'Water Source': 600, 'Hybrid': 1900 },
  { quarter: '2024 Q3', 'Air Source': 26000, 'Ground Source': 4000, 'Water Source': 700, 'Hybrid': 2300 },
  { quarter: '2024 Q4', 'Air Source': 30000, 'Ground Source': 4500, 'Water Source': 800, 'Hybrid': 2700 },
];

const EXCEL_FILE_PATH = '/Heat_pump_deployment_quarterly_statistics_United_Kingdom_2025_Q2.xlsx';

export const useHeatPumpData = (): UseHeatPumpDataReturn => {
  const [governmentSchemeData, setGovernmentSchemeData] = useState<GovernmentSchemeData[]>([]);
  const [heatPumpTypeData, setHeatPumpTypeData] = useState<HeatPumpTypeData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await parseExcelData(EXCEL_FILE_PATH);
        
        setGovernmentSchemeData(data.governmentSchemeData);
        setHeatPumpTypeData(data.heatPumpTypeData);
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Failed to load Excel data. Using dummy data instead.');
        
        // Fallback to dummy data
        setGovernmentSchemeData(dummyGovernmentSchemeData);
        setHeatPumpTypeData(dummyHeatPumpTypeData);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return {
    governmentSchemeData,
    heatPumpTypeData,
    loading,
    error,
  };
};
