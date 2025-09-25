import * as XLSX from 'xlsx';

export interface GovernmentSchemeData {
  quarter: string;
  BUS: number;
  ECO4: number;
  Other: number;
}

export interface HeatPumpTypeData {
  quarter: string;
  'Air Source': number;
  'Ground Source': number;
  'Water Source': number;
  'Hybrid': number;
}

export const parseExcelData = async (filePath: string): Promise<{
  governmentSchemeData: GovernmentSchemeData[];
  heatPumpTypeData: HeatPumpTypeData[];
}> => {
  try {
    // Fetch the Excel file from the public directory
    const response = await fetch(filePath);
    const arrayBuffer = await response.arrayBuffer();
    
    // Parse the Excel file
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    
    // Get all sheet names to help debug
    console.log('Available sheets:', workbook.SheetNames);
    
    // Parse Table 1.1 - Government Scheme data
    const table11SheetName = workbook.SheetNames.find(name => 
      name.includes('Table 1.1') || name.includes('1.1')
    ) || workbook.SheetNames[0]; // fallback to first sheet
    
    const table11Sheet = workbook.Sheets[table11SheetName];
    const table11Data = XLSX.utils.sheet_to_json(table11Sheet, { header: 1 });
    
    // Parse Table 1.2 - Heat Pump Type data
    const table12SheetName = workbook.SheetNames.find(name => 
      name.includes('Table 1.2') || name.includes('1.2')
    ) || workbook.SheetNames[1]; // fallback to second sheet
    
    const table12Sheet = workbook.Sheets[table12SheetName];
    const table12Data = XLSX.utils.sheet_to_json(table12Sheet, { header: 1 });
    
    // Process government scheme data
    const governmentSchemeData = processGovernmentSchemeData(table11Data as any[][]);
    
    // Process heat pump type data
    const heatPumpTypeData = processHeatPumpTypeData(table12Data as any[][]);
    
    return {
      governmentSchemeData,
      heatPumpTypeData
    };
  } catch (error) {
    console.error('Error parsing Excel file:', error);
    throw error;
  }
};

const normalizeQuarterFormat = (quarterStr: string): string => {
  if (!quarterStr) return quarterStr;
  
  const str = quarterStr.toString().trim();
  
  // Extract year and quarter - handle years from 2018 onwards
  const yearMatch = str.match(/20(1[8-9]|2[0-9])/);
  const quarterMatch = str.match(/Q[1-4]/i);
  
  if (yearMatch && quarterMatch) {
    return `${yearMatch[0]} ${quarterMatch[0].toUpperCase()}`;
  }
  
  // Handle month-based quarters
  const anyYearMatch = str.match(/20(1[8-9]|2[0-9])/);
  if (anyYearMatch) {
    const year = anyYearMatch[0];
    
    if (str.toLowerCase().includes('jan') || str.toLowerCase().includes('mar')) {
      return `${year} Q1`;
    } else if (str.toLowerCase().includes('apr') || str.toLowerCase().includes('jun')) {
      return `${year} Q2`;
    } else if (str.toLowerCase().includes('jul') || str.toLowerCase().includes('sep')) {
      return `${year} Q3`;
    } else if (str.toLowerCase().includes('oct') || str.toLowerCase().includes('dec')) {
      return `${year} Q4`;
    }
  }
  
  return quarterStr;
};

const processGovernmentSchemeData = (rawData: any[][]): GovernmentSchemeData[] => {
  console.log('Processing government scheme data:', rawData.slice(0, 10)); // Log first 10 rows for debugging
  
  // Skip header rows and find data rows
  const dataStartIndex = rawData.findIndex(row => 
    row && row[0] && typeof row[0] === 'string' && 
    (row[0].toString().includes('Q') || row[0].toString().match(/20(1[8-9]|2[0-9])/))
  );
  
  if (dataStartIndex === -1) {
    console.warn('No data rows found for government scheme data');
    return [];
  }
  
  const processedData: GovernmentSchemeData[] = [];
  
  for (let i = dataStartIndex; i < rawData.length; i++) {
    const row = rawData[i];
    if (!row || !row[0]) continue;
    
    const quarter = String(row[0]).trim();
    // Look for quarter patterns like "2024 Q1", "Q1 2024", etc. - handle years from 2018 onwards
    if (!quarter || (!quarter.includes('Q') && !quarter.match(/20(1[8-9]|2[0-9])/))) continue;
    
    // Skip empty or non-numeric data rows
    if (!row[1] && !row[2] && !row[3]) continue;
    
    processedData.push({
      quarter: normalizeQuarterFormat(quarter),
      BUS: Number(row[1]) || 0,
      ECO4: Number(row[2]) || 0,
      Other: Number(row[3]) || 0,
    });
  }
  
  console.log('Processed government scheme data:', processedData);
  return processedData;
};

const processHeatPumpTypeData = (rawData: any[][]): HeatPumpTypeData[] => {
  console.log('Processing heat pump type data:', rawData.slice(0, 10)); // Log first 10 rows for debugging
  
  // Skip header rows and find data rows
  const dataStartIndex = rawData.findIndex(row => 
    row && row[0] && typeof row[0] === 'string' && 
    (row[0].toString().includes('Q') || row[0].toString().match(/20(1[8-9]|2[0-9])/))
  );
  
  if (dataStartIndex === -1) {
    console.warn('No data rows found for heat pump type data');
    return [];
  }
  
  const processedData: HeatPumpTypeData[] = [];
  
  for (let i = dataStartIndex; i < rawData.length; i++) {
    const row = rawData[i];
    if (!row || !row[0]) continue;
    
    const quarter = String(row[0]).trim();
    // Look for quarter patterns like "2024 Q1", "Q1 2024", etc. - handle years from 2018 onwards
    if (!quarter || (!quarter.includes('Q') && !quarter.match(/20(1[8-9]|2[0-9])/))) continue;
    
    // Skip empty or non-numeric data rows
    if (!row[1] && !row[2] && !row[3] && !row[4]) continue;
    
    processedData.push({
      quarter: normalizeQuarterFormat(quarter),
      'Air Source': Number(row[1]) || 0,
      'Ground Source': Number(row[2]) || 0,
      'Water Source': Number(row[3]) || 0,
      'Hybrid': Number(row[4]) || 0,
    });
  }
  
  console.log('Processed heat pump type data:', processedData);
  return processedData;
};
