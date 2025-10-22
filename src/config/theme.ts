export const colors = {
  // Primary color palette - Navy, Blue, Light Yellow
  navy: '#1a2332',           // Dark navy blue (primary)
  blue: '#4a90e2',           // Middle blue (secondary)
  lightYellow: '#fef3c7',    // Light yellow (accent)
  
  // Semantic colors derived from palette
  primary: '#1a2332',        // Navy
  secondary: '#2d3e50',      // Slightly lighter navy
  accent: '#4a90e2',         // Middle blue
  
  // Background colors
  background: '#fef3c7',     // Light yellow for page background
  cardBackground: '#ffffff', // White for cards
  
  // Text colors
  textPrimary: '#1a2332',    // Navy for primary text
  textSecondary: '#2d3e50',  // Lighter navy for secondary text
  textMuted: '#64748b',      // Muted gray-blue
  
  // Chart colors - using palette-derived colors
  chart: {
    // Government schemes
    BUS: '#4a90e2',          // Middle blue
    ECO4: '#3b82f6',         // Brighter blue variation
    Other: '#fbbf24',        // Golden yellow
    
    // Heat pump types
    airSource: '#4a90e2',    // Middle blue
    groundSource: '#3b82f6', // Brighter blue
    waterSource: '#fbbf24',  // Golden yellow
    hybrid: '#f59e0b',       // Amber
  },
  
  // Status colors
  success: '#10b981',        // Green (keeping standard)
  warning: '#f59e0b',        // Amber/yellow
  error: '#ef4444',          // Red (keeping standard)
  info: '#4a90e2',           // Middle blue
  
  // Border and shadow colors
  border: '#e2e8f0',         // Light gray-blue
  shadow: 'rgba(26, 35, 50, 0.1)', // Navy with transparency
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
    primary: '"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    code: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
  },
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    md: 18,
    lg: 20,
    xl: 24,
    xxl: 28,
    xxxl: 32,
  },
  fontWeight: {
    light: 300,
    normal: 400,
    bold: 700,
    black: 900,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.8,
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
