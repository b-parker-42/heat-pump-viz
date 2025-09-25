export const colors = {
  // Primary colors
  primary: '#2c3e50',
  secondary: '#34495e',
  accent: '#3498db',
  
  // Background colors
  background: '#f8f9fa',
  cardBackground: '#ffffff',
  
  // Text colors
  textPrimary: '#2c3e50',
  textSecondary: '#7f8c8d',
  textMuted: '#95a5a6',
  
  // Chart colors
  chart: {
    // Government schemes
    BUS: '#8884d8',
    ECO4: '#82ca9d',
    Other: '#ffc658',
    
    // Heat pump types
    airSource: '#8884d8',
    groundSource: '#82ca9d',
    waterSource: '#ffc658',
    hybrid: '#ff7300',
  },
  
  // Status colors
  success: '#27ae60',
  warning: '#f39c12',
  error: '#e74c3c',
  info: '#3498db',
  
  // Border and shadow colors
  border: '#dee2e6',
  shadow: 'rgba(0, 0, 0, 0.1)',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 40,
} as const;

export const typography = {
  fontFamily: {
    primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    code: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
  },
  fontSize: {
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
  },
} as const;

export const layout = {
  maxWidth: 1200,
  borderRadius: 8,
  containerPadding: spacing.lg,
} as const;

export const breakpoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200,
} as const;
