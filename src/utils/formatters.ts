/**
 * Formats numbers with comma separators for better readability
 * @param value - The number to format
 * @returns Formatted string with comma separators
 */
export const formatNumber = (value: number): string => {
  return value.toLocaleString();
};

/**
 * Formats tooltip values for charts
 * @param value - The value to format
 * @param name - The name of the data series (optional)
 * @returns Formatted array for tooltip display
 */
export const formatTooltipValue = (value: number, name?: string): [string, string] => {
  return [formatNumber(value), name || ''];
};

/**
 * Formats Y-axis values for charts
 * @param value - The value to format
 * @returns Formatted string
 */
export const formatYAxisValue = (value: number): string => {
  return formatNumber(value);
};

/**
 * Formats dates consistently across the application
 * @param date - Date to format
 * @returns Formatted date string
 */
export const formatDate = (date: Date = new Date()): string => {
  return date.toLocaleDateString();
};
